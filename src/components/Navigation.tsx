"use client";

import { Koulen } from "next/font/google";
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTheme } from "next-themes";

import Image from "next/image";
import Link from "next/link";

import { navigationItems, navigationItemsService } from "@/constants";
import HamburgerMenu from "./Hamburger";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

export default function Navigation() {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="fixed left-0 top-0 z-20 flex h-[55px] w-full items-center bg-background">
      <div className="ml-2 mr-10 flex items-center gap-2">
        <Link href="/">
          <div className="relative my-1 h-[40px] w-[40px]">
            <Image
              src={theme === "light" ? "/logo_only.svg" : "/logo_only_dark.svg"}
              fill
              alt="hiveminds_logo"
            />
          </div>
        </Link>
        <Link
          href="/"
          className={cn(
            "hidden text-xl font-bold uppercase md:block",
            koulen.className,
          )}
        >
          <span className="text-primary">hive</span>minds
        </Link>
      </div>
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="py-2">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Service</NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* Match the width and layout of the Company dropdown */}
                <ul className="grid w-[400px] grid-cols-3 gap-3 p-4 md:w-[500px] lg:w-[600px]">
                  {navigationItemsService.map((navigationItems) => (
                    <ListItem
                      key={navigationItems.title}
                      title={navigationItems.title}
                      href={navigationItems.href}
                    >
                      {navigationItems.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] grid-cols-3 gap-3 p-4 md:w-[500px] lg:w-[600px]">
                  {navigationItems.map((navigationItems) => (
                    <ListItem
                      key={navigationItems.title}
                      title={navigationItems.title}
                      href={navigationItems.href}
                    >
                      {navigationItems.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto lg:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
