import LenisProvider from "./animation/LenisProvider";
import Nav from "./components/navbar/Nav";
import "./globals.css";
import { ThemeProviders } from "./providers/ThemeProvider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviders
        >
          {/* <PageTransition>   */}
          <Nav />
          <LenisProvider>{children}</LenisProvider>
          {/* </PageTransition> */}
        </ThemeProviders>
      </body>
    </html>
  );
}
