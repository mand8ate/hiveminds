import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/custom.css";
import { ThemeProvider } from "@/components/ThemeProvider";

import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HiveMinds",
  description:
    "Your dream, Your reality! 私たちは、魅力的なランディングページから包括的な電子商取引プラットフォーム、革新的なモバイルアプリに至るまで、理想的なブランド作りを専門としています。私たちのコンサルティングは、デジタルエクスペリエンスの全ての面に及びます。ブランドをレベルアップしませんか？お問い合わせフォーム、ライン、またはどのプラットフォームからでもご連絡ください。一緒にこのワクワクする旅を始めましょう！",
};

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <GoogleTagManager gtmId="GTM-5X88BK3J" />
        <body className={(cn("antialiased"), inter.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <ProgressBar>
                <main className="mt-[55px] overflow-hidden">{children}</main>
                <Toaster />
              </ProgressBar>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
