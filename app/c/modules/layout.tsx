import CLayout from "@/components/CLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CLayout>
        {children}
        </CLayout>
        </body>
    </html>
  );
}
