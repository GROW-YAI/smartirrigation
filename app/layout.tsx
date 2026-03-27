import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import BoafoWidgetInitializer from "./components/BoafoWidgetInitializer";
import React from "react";

export const metadata: Metadata = {
  title: "My Website",
  description: "Accessibility powered by Boafo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BoafoWidgetInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}