import Navbar from "/Users/vivanverma/Documents/Port/UpdatedPortfolio/src/components/navbar.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {}
        {children} {}
      </body>
    </html>
  );
}
