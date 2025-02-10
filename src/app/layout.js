import React from "react";
import Navbar from "../components/Navbar/navbar";
import "/Users/vivanverma/Documents/Port/UpdatedPortfolio/src/styles/global.css";

export const metadata = {
  title: "Vivan Verma",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* Navigation bar */}
        <Navbar />

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
