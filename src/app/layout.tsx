import "./globals.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buskily.com',
  description: 'Buskily - Your Street Performance Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
