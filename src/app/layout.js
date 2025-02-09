import Navbar from "/Users/vivanverma/Documents/Portfolio/vivanverma-portfolio/src/components/navbar.js";
import "../styles/global.css";

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
