import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: Props) {
  return (
    <>
        <Box>
          {children}
        </Box>
    </>
  );
}