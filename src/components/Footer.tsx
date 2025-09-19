import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Footer({ root }: { root?: boolean }) {
  return (
    <footer className={cn("h-fit w-full", root ? "snap-end" : "")}>
      {/* Main Footer Content */}
      <div className="bg-foreground/30 text-white backdrop-blur-xl">
        <div className="container mx-auto px-8 py-16">
          <div className="flex flex-col gap-8 lg:items-start lg:justify-between xl:flex-row xl:gap-4">
            <div className="lg: flex w-full flex-col justify-center gap-4 lg:flex-row">
              {/* Left Side: Logo and Social Links */}
              <div className="flex flex-col justify-center lg:mb-0">
                <Link
                  href="/"
                  className="relative block h-[80px] w-full lg:w-[200px]"
                >
                  <Image
                    src="/logo_footer.svg"
                    alt="HiveMinds Logo"
                    fill
                    className="object-contain"
                  />
                </Link>
                {/* Social Links - Below Logo */}
                <div className="my-2 flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/hivemindsjapan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center bg-white transition-colors hover:bg-gray-200"
                  >
                    <Image
                      src="/svg/linkedin.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  </a>
                  <a
                    href="https://note.com/hiveminds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center bg-white text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    <span className="text-lg font-bold">n</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Navigation Menu */}
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:mb-0">
                {/* Home Navigation */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white md:mb-6">
                    Home
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-300 transition-colors hover:text-white"
                      >
                        Home
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Service Navigation */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white md:mb-6">
                    Service
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="https://hiveminds.co.jp/service"
                        className="text-gray-300 transition-colors hover:text-white"
                      >
                        Branding
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://support.hiveminds.co.jp"
                        className="text-gray-300 transition-colors hover:text-white"
                      >
                        Saiyou
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://global.hiveminds.co.jp"
                        className="text-gray-300 transition-colors hover:text-white"
                      >
                        Global
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Projects Navigation */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white md:mb-6">
                    Projects
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="https://hiveminds.co.jp/projects"
                        target="_blank"
                        className="text-gray-300 transition-colors hover:text-white"
                      >
                        Projects
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Company Navigation */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white md:mb-6">
                    Company
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="https://hiveminds.co.jp/company/team"
                        target="_blank"
                        className="text-gray-300 transition-colors hover:text-white"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="text-gray-300 transition-colors hover:text-white"
                      >
                        VMV
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://hiveminds.co.jp/company"
                        target="_blank"
                        className="text-gray-300 transition-colors hover:text-white"
                      >
                        Company
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Contact and Download Cards - Added more gap from navigation */}
            <div className="flex w-full flex-col justify-center gap-6 md:flex-row lg:gap-8">
              {/* Contact Card */}
              <div className="flex w-full flex-col items-center rounded-lg bg-gray-200 p-4 text-gray-800">
                <div className="mb-3 flex items-center justify-end gap-4">
                  <h3 className="text-lg font-bold text-black">CONTACT</h3>
                  <Mail className="h-12 w-12 text-gray-700" />
                </div>
                <p className="mb-4 text-center text-sm leading-relaxed">
                  各種サービスに関するご相談およびお問い合わせは、こちらからお願いいたします。
                </p>
                <div className="flex justify-end">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400">
                    <span className="text-sm text-white">→</span>
                  </div>
                </div>
              </div>

              {/* Download Card */}
              <div className="flex w-full flex-col items-center rounded-lg bg-gray-200 p-4 text-gray-800">
                <div className="mb-3 flex items-center justify-end gap-4">
                  <h3 className="text-lg font-bold text-black">DOWNLOAD</h3>
                  <FileText className="h-12 w-12 text-gray-700" />
                </div>
                <p className="mb-4 text-center text-sm leading-relaxed">
                  各種サービスに関するご相談およびお問い合わせは、こちらからお願いいたします。
                </p>
                <div className="flex justify-end">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400 ">
                    <span className="text-sm text-white">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-8">
          <p className="text-center text-sm text-gray-600">
            Copyright © HiveMinds, LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
