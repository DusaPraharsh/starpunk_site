import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starpunk Studio — Little games. Big universe.",
  description: "An independent studio making spirited games for curious people.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
