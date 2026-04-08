import type { Metadata } from "next";
import { Changa_One,Lora, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"
const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
      className={cn("h-full", "antialiased", changaOne.variable, "font-sans", geist.variable)}
    >
    <body>
      <main className={lora.className}>{children}</main>
      <Toaster/>
      </body>
    </html>
    
  );
}
