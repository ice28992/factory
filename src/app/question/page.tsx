import { Divider, Stack } from "@mui/material";
import { Zen_Maru_Gothic } from "next/font/google";

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// 質問
export default function QuestionPage() {
  return (
    <Stack className={zen.className}><br />
      <h2>質問ページ</h2>
    </Stack>
  );
}