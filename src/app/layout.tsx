import type { Metadata } from "next";
import { Box, Container, CssBaseline, Paper } from "@mui/material";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PWAタイトル",
  description: "なんか説明",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      {/* PWAの設定 */}
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon.png'></link>
        <meta name='theme-color' content='#b8e986' />
      </head>

      <body className={inter.className}>
        <CssBaseline />
        <Header />
          <Box>
            <Container maxWidth='xs' sx={{ padding: 0 }}>
              <Paper sx={{ px: 0, bgcolor:"#fffaf7", height: "100vh" }}>{children}</Paper>
            </Container>
          </Box>
          <Footer />
      </body>
    </html>
  );
}