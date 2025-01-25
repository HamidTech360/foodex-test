
import type { Metadata } from "next";
import "./globals.css";
import { NAV_LINKS } from "@/constants";
import { div } from "framer-motion/client";
import Sidebar from "./components/sidebar";


export const metadata: Metadata = {
  title: "FoodEx",
  description: "Client side landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap" rel="stylesheet"/>
      </head>
      <body >
       
      
          <main className=" ">
            <div className="flex max-h-screen">
                <div className="w-64  lg:block hidden px-14 py-7">
                    <Sidebar/>
                </div>
                <div className="flex-1  overflow-y-scroll">
                    {children}
                </div>
            </div>
          
          </main>
          
      </body>
    </html>
  );
}
