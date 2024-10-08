import Link from "next/link";
import { Mails } from "lucide-react";
import { footerNav } from "@/constants";

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Footer({ root }: { root?: boolean }) {
  return (
    <footer className={cn("h-fit w-full", root ? "snap-end" : "")}>
      <div className="flex h-full bg-foreground/30 backdrop-blur-xl">
        <div className="flex w-full flex-col py-16 lg:flex-row lg:py-24">
          <Link
            href="/contact"
            className="mb-12 flex items-start justify-center gap-4 pr-4 lg:mb-0 lg:w-1/3"
          >
            <div className="flex gap-2 self-center">
              <Mails className="h-[30px] w-[30px] xl:h-[40px] xl:w-[40px]" />
              <h1 className="text-2xl font-bold xl:text-3xl">Contact Us</h1>
            </div>
          </Link>
          <div className="flex flex-col justify-center gap-16 self-center sm:flex-row sm:items-start lg:w-1/3 lg:gap-24">
            {footerNav.map((items, i) => (
              <div className="flex flex-col sm:items-start" key={i}>
                <h2 className="text-xl font-semibold">
                  <Link href={items.link ? items.link : ""}>{items.title}</Link>
                </h2>
              </div>
            ))}
          </div>
          <div className="items-top mt-8 flex justify-center lg:mt-0 lg:w-1/3">
            <Link href="/" className="relative h-[80px] w-[150px] lg:w-[200px]">
              <Image src="/logo_footer.svg" alt="HiveMinds Logo" fill />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-foreground py-12">
        <p className="text-background">
          Copyright &copy; HiveMinds, LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
