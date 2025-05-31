import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: Props) {
  return (
    <>
        <Box sx={{ backgroundColor: "#fff9f4" }}>
          <Header />
          {children}
          <Footer />
        </Box>
    </>
  );
}