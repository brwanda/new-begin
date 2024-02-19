import React, { ReactNode } from 'react';
import { Metadata } from 'next'; // Import Metadata from next/head
import "./globals.css";

export const metadata: Metadata = {
  title: "AUTHENTIC - EVENT",
  description: "AUTHENTIC EVENT",
};

interface RootLayoutProps {
  someRequiredProp: string;
  optionalProp?: number;
  children: ReactNode;
  parallel: ReactNode; // Define parallel prop of type ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  
  return (
    <html lang="en">
      <body className="kalisa">
        {props.children}
        {props.parallel}
      </body>
    </html>
  );
}
