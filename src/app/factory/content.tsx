// 3Dviewer
"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface FieldSize {
  x: number;
  y: number;
}

interface FieldViewerProps {
  name: string;
  image: string;
}

interface FieldObject {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera | null;
  renderer: THREE.WebGLRenderer | null;
  objects: { [key: string]: THREE.Object3D };
  controls: OrbitControls | null;
  light: THREE.DirectionalLight | null;
  size: FieldSize;
  isRendering: boolean;
  floor?: THREE.Mesh;
  skybox?: THREE.Mesh;
}

export class Field {
  fields: { [key: string]: FieldObject } = {};
  animationFrames: { [key: string]: number } = {};
  intervals: { [key: string]: NodeJS.Timeout } = {};
  timeouts: { [key: string]: NodeJS.Timeout } = {};

  createField(name: string, size: FieldSize = { x: 50, y: 50 }) {
    this.fields[name] = {
      scene: new THREE.Scene(),
      camera: null,
      renderer: null,
      objects: {},
      controls: null,
      light: null,
      size,
      isRendering: false,
    };
    console.log(`フィールド "${name}" を作成しました (サイズ: ${size.x}x${size.y})`);
  }

  initializeField(name: string, image: string) {
    const field = this.fields[name];
    field.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(image, (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      if (field.skybox) {
        field.scene.remove(field.skybox);
        field.skybox.geometry.dispose();
        (field.skybox.material as THREE.Material).dispose();
      }

      
      const skyGeometry = new THREE.SphereGeometry(500, 60, 40);
      skyGeometry.scale(-1, 1, 1); // 反転して内側を表示
      const skyMaterial = new THREE.MeshBasicMaterial({ map: texture });
      const skySphere = new THREE.Mesh(skyGeometry, skyMaterial);
      field.scene.add(skySphere);
      field.skybox = skySphere;
    });

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    field.scene.add(directionalLight);
    field.light = directionalLight;
  }

  createColorCanvas(color: THREE.Color): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const context = canvas.getContext('2d')!;
    context.fillStyle = color.getStyle();
    context.fillRect(0, 0, canvas.width, canvas.height);
    return canvas;
  }

  startRenderingField(name: string, containerRef: React.RefObject<HTMLDivElement | null>){
    const field = this.fields[name];
    if (!containerRef.current) throw new Error('コンテナの参照が無効です。');

    const container = containerRef.current;
    field.renderer = new THREE.WebGLRenderer();
    field.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(field.renderer.domElement);

    field.camera!.aspect = container.clientWidth / container.clientHeight;
    field.camera!.updateProjectionMatrix();
    field.camera!.position.set(0, 10, 30);

    field.controls = new OrbitControls(field.camera!, field.renderer.domElement);
    field.controls.enableDamping = true;

    field.isRendering = true;

    const animate = () => {
      if (!field.isRendering) return;
      field.controls!.update();
      field.renderer!.render(field.scene, field.camera!);
      this.animationFrames[name] = requestAnimationFrame(animate);
    };
    animate();
  }

  stopRenderingField(name: string) {
    const field = this.fields[name];
    field.isRendering = false;

    if (field.renderer?.domElement?.parentNode) {
      field.renderer.domElement.parentNode.removeChild(field.renderer.domElement);
    }
    cancelAnimationFrame(this.animationFrames[name]);
  }
}

// FieldViewer コンポーネント
const fieldInstance = new Field();

export const FieldViewer: React.FC<FieldViewerProps> = ({ name, image }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fieldInstance.fields[name]) {
      fieldInstance.createField(name);
      fieldInstance.initializeField(name, image);
    }
    fieldInstance.startRenderingField(name, containerRef);

    return () => {
      fieldInstance.stopRenderingField(name);
    };
  }, [name, image]);

  return <div ref={containerRef} style={{ width: '100%', height: '400px' }} />;
};