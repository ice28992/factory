"use client";
import React, { useState } from 'react';
import { Stack, Box, Button, Typography, TextField } from "@mui/material";

type Message = {
  role: 'user' | 'system';
  text: string;
};

export const Chat: React.FC = () => {
  const [message, set_message] = useState<Message[]>([
    { role: 'system', text: 'こんにちは！質問をどうぞ' },
  ]);
  const [input, set_input] = useState('');

  // 送信押された時の処理
  const send = () => {

    const new_message: Message = { role: 'user', text: input };
    const update_message = [...message, new_message];
    set_message(update_message);

    // 応答
    const reply = reply_message(input);
    set_message([...update_message, { role: 'system', text: reply }]);
    set_input('');
  };

  // 応答テスト
  const reply_message = (input: string): string => {
    if (input.includes('A社について')) {
      return 'A社は〇〇をしている会社です';
    } else if (input.includes('A棟には何がある？')) {
      return 'A棟には〇〇があります';
    } else {
      return 'もう一度質問してください。';
    }
  };

  return (
    <Stack
      spacing={2}
      sx={{
        width: 350,
        height: 500,
        padding: 2,
        border: '2px solid #e3d7a3',
        backgroundColor: "#fff7ef",
        borderRadius: 2,
      }}
    >
      {/* 質問チャット表示場所 */}
      <Box sx={{ flexGrow: 1}}>
        {message.map((msg, i) => (
          <Typography
            key={i}
            sx={{ color: msg.role == 'user' ? '#009e9f' : '#665a1a', mb: 1 }}
          >
            <strong>{msg.role == 'user' ? '<' : '>'}</strong> {msg.text}
          </Typography>
        ))}
      </Box>

      {/* 入力フォーム表示場所 */}
      <Box display="flex" gap={1}>
        <TextField
          fullWidth
          size="small"
          value={input}
          onChange={(e) => set_input(e.target.value)}
          placeholder="メッセージを入力"
        />
        <Button variant="contained" onClick={send} sx={{
            backgroundColor: '#fdd35c',
            color: '#000',
            '&:hover': { backgroundColor: '#d4cc5f'},
          }}>
          送信
        </Button>
      </Box>
    </Stack>
  );
};

export default Chat;