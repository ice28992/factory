import { Divider, Stack } from "@mui/material";
import { Zen_Maru_Gothic } from "next/font/google";

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// トップ
export default function TopPage() {
  return (
    <Stack className={zen.className}><br />
      <h2>トップ</h2>
    </Stack>
  );
}