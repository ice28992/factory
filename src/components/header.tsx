"use client"
import { Stack, Typography, Container } from "@mui/material";

export function Header() {
  return (
    <Container maxWidth="xs">
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      spacing={2}
      sx={{ bgcolor: "#68a4d9", height: '60px' }}
    >
      <Typography sx={{ fontSize: "30px", color: "white" }}>タイトル</Typography>
    </Stack>
    </Container>
  );
}