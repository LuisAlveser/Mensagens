import type { Metadata } from "next";
import { Changa_One,Lora } from "next/font/google";
import "./globals.css";


const changaOne=Changa_One({
  subsets: ["latin"],
  variable: "--font-changa",
  weight:["400"]
})
const lora=Lora({
  subsets:["latin"],
  weight:["400"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${changaOne.variable}  h-full antialiased`}
    >
      <body className={lora.className}>{children}</body>
    </html>
  );
}
