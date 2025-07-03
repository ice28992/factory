"use client";
import React, { useState } from 'react';
import { Stack } from "@mui/material";
import { Margin } from '@mui/icons-material';

export const ContentsList: React.FC = () => {
  return(
    <Stack
      sx={{
        width: 350,
        height: 200,
        paddingLeft: 2,
        textAlign: "left",
        margin: "auto",
        border: '5px solid #e3d7a3',
        backgroundColor: "#fff7ef",
        borderRadius: 2,
        fontSize: 20
      }}
    >
      <ul style={{marginLeft: 50}}>
        <li>A棟</li>
        <li>B棟</li>
        <li>カフェテリア</li>
        <li>外観</li>
      </ul>
    </Stack>
  );
}
export default ContentsList;