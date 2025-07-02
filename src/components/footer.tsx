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
import { Home, ThreeDRotation, QuestionAnswer, Style } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Footer() {
  const pathname = usePathname();

  const footerButtonsList = [
    { label: "トップ", icon: <Home sx={{ color: "#665a1a" }} />, link_to: "/top" },
    { label: "工場見学", icon: <ThreeDRotation sx={{ color: "#665a1a" }} />, link_to: "/factory" },
    { label: "質問", icon: <QuestionAnswer sx={{ color: "#665a1a" }} />, link_to: "/question" },
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
          <Typography fontSize={14} marginX={"-10px"} sx={{ color: "#665a1a" }}>
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
    <Stack justifyContent='space-between' alignItems='center'>
      <Container maxWidth='xs'>
        <BottomNavigation
          showLabels
          value={pathname}
          children={footerButtons}
          sx={{ bgcolor: "#fdd35c" ,height:'70px' }}
        />
      </Container>
    </Stack>
  );
}