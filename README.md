# Web工場見学
PBL型授業での制作物です。(企業名は明記していません。)
また、画像は実際のものとは異なり[こちら](https://github.com/Kazuhito00/royalty-free-360-degree-images?tab=readme-ov-file)の画像をお借りしています。

制作した意図などはこちらに記載してあります。 [参考資料](https://www.canva.com/design/DAGajx8OdDo/E1GVxqlqQJqMaA6RUltxZA/view?utm_content=DAGajx8OdDo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he7dd83e9fa)

## 概要

* **ログイン機能**：Googleアカウントでのログイン（Firebase Authentication）
* **フロントエンド**：React・Next.js
* **UIライブラリ**：MUI（Material UI）
* **3Dレンダリング**：Three.jsで球体（3Dオブジェクト）の描画

---

## インストール手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/your-username/your-project-name.git
cd your-project-name
```

### 2. 必要な依存パッケージをインストール

Node.jsとnpmがインストールされていることを確認し、プロジェクトディレクトリ内で以下のコマンドを実行します。

```bash
npm install
```

### 3. Firebase設定

Firebaseを使用するために、Firebaseのプロジェクトを作成し、認証（Googleログイン）を有効にします。

1. Firebaseコンソール（[https://console.firebase.google.com/](https://console.firebase.google.com/)）にアクセスして新しいプロジェクトを作成します。
2. 「Authentication」を選択し、Googleログインを有効にします。
3. 「Project settings」からFirebaseの設定情報を取得します。

`.env.local` ファイルをプロジェクトのルートに作成し、以下のようにFirebaseの設定を追加します。

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 4. Firebase SDKのインストール

```bash
npm install firebase
```

---

## 実行方法

開発サーバーを起動するには以下のコマンドを実行します。

```bash
npm run dev
```

これで、アプリケーションが `http://localhost:3000` で立ち上がり、ブラウザでアクセスすることができます。

---

## 機能

### 1. Googleログイン

GoogleアカウントでユーザーがアプリケーションにログインできるようにFirebase Authenticationを使用しています。

* ユーザーがログインすると、ユーザー情報がコンソールに表示され、Googleアカウントを使用して認証が行われます。

### 2. 3Dレンダリング

Three.jsを使用して、3D球を描画します。ユーザーはマウスでインタラクティブに3D球を操作できます。

* `useEffect`と`useRef`を使って、Reactコンポーネント内でThree.jsの3D球を描画しています。

---

## 使用技術

以下の画像は生成AIのGeminiを用いて生成しました。
![factory](https://github.com/user-attachments/assets/906e3149-30c1-471a-b7af-60eee08374f0)

---

### フロントエンド

* **React**: ユーザーインターフェースの構築
* **Next.js**: サーバサイドレンダリングとページルーティング
* **MUI**: Material UIライブラリでUIコンポーネントを作成
* **Three.js**: 3Dレンダリング

### バックエンド

* **Firebase Authentication**: Googleアカウント認証
* **Firebase Firestore**: ユーザーデータ保存（オプション）
