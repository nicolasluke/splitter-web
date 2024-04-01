import { Poppins } from 'next/font/google';
import Navbar from './components/Navbar';
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: "Splitter",
  description: "Split expenses with friends while managing your budget",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
