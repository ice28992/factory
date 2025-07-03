import { Stack, Button } from "@mui/material";
import { Zen_Maru_Gothic } from "next/font/google";
import { SwitchContent } from './swich_content';

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// 工場見学
export default function FactoryPage() {
  return (
    <Stack className={zen.className} sx={{textAlign: "center"}}>
      <SwitchContent /><br />
    </Stack>
  );
}