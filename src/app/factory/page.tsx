import { Divider, Stack } from "@mui/material";
import { Zen_Maru_Gothic } from "next/font/google";

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// 工場見学
export default function HomePage() {
  return (
    <Stack className={zen.className}><br />
      <h2>Web工場見学</h2>
    </Stack>
  );
}