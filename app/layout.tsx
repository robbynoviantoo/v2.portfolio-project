import LenisProvider from "./animation/LenisProvider";
import Nav from "./components/navbar/Nav";
import CustomCursor from "./components/CustomCursor";
import "./globals.css";
import Header from "./pages/header/Header";
import { ThemeProviders } from "./providers/ThemeProvider";

export const metadata = {
  title: "Portfolio | Robby Novianto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviders>
          <CustomCursor />
          {/* <PageTransition>   */}
          {/* <Nav /> */}
          <Header />
          <LenisProvider>{children}</LenisProvider>
          {/* </PageTransition> */}
        </ThemeProviders>
      </body>
    </html>
  );
}
