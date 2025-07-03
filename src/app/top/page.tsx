import { Stack, Divider } from "@mui/material";
import { Zen_Maru_Gothic } from "next/font/google";
import { ContentsList } from "./content";

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// トップ
export default function TopPage() {
  return (
    <Stack className={zen.className} sx={{textAlign: "center"}}>
      <h2>ようこそ！</h2>
      <p>Web上で360°見回す工場見学を体験できます</p>
      <Divider style={{ width: "100%", border: "double #e3d7a3 3px" }} />
      <h3>見学場所一覧</h3>
      <ContentsList />
    </Stack>
  );
}