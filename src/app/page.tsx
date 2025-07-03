"use client";

import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useAuth } from "../../backend/context/auth";
import { login, logout } from "../../backend/lib/auth";

export default function LoginPage() {
  const user = useAuth();
  const [waiting, setWaiting] = useState(false);

  const signIn = () => {
    setWaiting(true);
    login()
  };

  return (
    <Box>
      {user === null && !waiting && (
        <Button onClick={signIn}>ログイン</Button>
      )}
      {user && <Button onClick={logout}>ログアウト</Button>}
    </Box>
  );
}
