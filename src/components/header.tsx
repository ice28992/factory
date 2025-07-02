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
      sx={{ px: 2, bgcolor: "#fdd35c", height: '60px' }}
    >
      <Typography sx={{ fontSize: "20px", color: "#665a1a" }}>Web工場見学</Typography>
    </Stack>
    </Container>
  );
}