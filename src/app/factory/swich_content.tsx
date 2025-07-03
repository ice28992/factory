"use client";

import React, { useState } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { FieldViewer } from './content';

const fieldNames = [
  { name: "A棟", description: "A棟：小型組み立てロボットがあります", image: "image0.png" },
  { name: "B棟", description: "B棟：大型機械があります", image: "image1.png"},
  { name: "カフェテリア", description: "カフェテリア：従業員が休憩する場所です", image: "image2.png" },
  { name: "会議室", description: "会議室：ミーティングが行われます", image: "image3.png" },
];

export const SwitchContent: React.FC = () => {
  const [index, setIndex] = useState(0);
  const current = fieldNames[index];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + fieldNames.length) % fieldNames.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % fieldNames.length);
  };

  return (
    <>
      <h3>{current.description}</h3>
      <FieldViewer name={current.name} image={current.image} />

      <Stack direction="row" spacing={3} justifyContent="center" mt={2}>
        <Button
          variant="contained"
          onClick={handlePrev}
          endIcon={<KeyboardArrowLeft />}
          sx={{
            backgroundColor: '#fdd35c',
            color: '#000',
            '&:hover': {
              backgroundColor: '#d4cc5f',
            },
          }}
        >
          前の場所へ
        </Button>

        <Button
          variant="contained"
          onClick={handleNext}
          endIcon={<KeyboardArrowRight />}
          sx={{
            backgroundColor: '#fdd35c',
            color: '#000',
            '&:hover': {
              backgroundColor: '#d4cc5f',
            },
          }}
        >
          次の場所へ
        </Button>
      </Stack>
    </>
  );
};
