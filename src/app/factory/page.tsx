import { Stack, Button } from "@mui/material";
import { KeyboardArrowRight, KeyboardArrowLeft} from "@mui/icons-material";
import { Zen_Maru_Gothic } from "next/font/google";
import { FieldViewer } from './content';
import { Color } from "three";

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// 工場見学
export default function FactoryPage() {
  return (
    <Stack className={zen.className} sx={{textAlign: "center"}}>
      <h3>A棟：ここには協働ロボットがあります</h3>
      <FieldViewer /><br />
      <Stack direction="row" spacing={3} margin="auto">
  
     <Button variant="contained" endIcon={<KeyboardArrowLeft />}
      sx={{
        backgroundColor: '#edde7b',
        color: '#000',
        '&:hover': {
          backgroundColor: '#d4cc5f',
        },
      }}
    >
      前の場所へ
    </Button>
    <Button variant="contained" endIcon={<KeyboardArrowRight />}
      sx={{
       backgroundColor: '#edde7b',
       color: '#000',
       '&:hover': {
         backgroundColor: '#d4cc5f',
       },
      }}
    >
      次の場所へ
    </Button>
    </Stack>
    </Stack>
  );
}