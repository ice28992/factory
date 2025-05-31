"use client";

import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
  Container,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import { Home, Assignment, Flag, Style } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Footer() {
  const pathname = usePathname();

  const footerButtonsList = [
    { label: "トップ", icon: <Home sx={{ color: "white" }} />, link_to: "/home" },
    { label: "記録一覧", icon: <Assignment sx={{ color: "white" }} />, link_to: "/record" },
    { label: "目標設定", icon: <Flag sx={{ color: "white" }} />, link_to: "/target" },
  ];

  const footerButtons = footerButtonsList.map((elm) => {
    function setMode(arg0: string) {
      throw new Error("Function not implemented.");
    }

    return (
      <BottomNavigationAction
        key={elm.label}
        value={elm.link_to}
        label={
          <Typography fontSize={14} marginX={"-10px"} sx={{ color: "white" }}>
            {elm.label}
          </Typography>
        }
        icon={elm.icon}
        LinkComponent={Link}
        href={elm.link_to}
      />
    );
  });

  return (
    <Box sx={{ pb: 10 }}>
      <Stack justifyContent='center' alignItems='center'>
        <Container sx={{ position: "fixed", bottom: 0, px: 0, zIndex: 5 }} maxWidth='xs'>
          <Paper sx={{ px: 0 }}>
            <BottomNavigation
              showLabels
              value={pathname}
              children={footerButtons}
              sx={{ bgcolor: "#4496d3" }}
            />
          </Paper>
        </Container>
      </Stack>
    </Box>
  );
}