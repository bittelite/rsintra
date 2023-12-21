import AuthProvider from "./(components)/AuthProvider";
import Footer from "./(components)/Footer";
import Nav from "./(components)/Nav";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata = {
  title: "Intranett",
  description: "Reklameservice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-page text-default-text grid">
          <Nav />
          <main className="bg-main justify-center">
            <div className="container contentContainer">{children}</div>
          </main>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
