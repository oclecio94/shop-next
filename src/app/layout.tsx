"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <div className="flex flex-col h-screen">
              <div>
                <Header />
              </div>

              <div className="flex-1">{children}</div>
              <div>
                <Footer />
              </div>
            </div>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
