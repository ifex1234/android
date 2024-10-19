"use client";
import { FaArrowRight } from "react-icons/fa";
import * as React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Dropdown } from "./dropdown";
import { Button } from "./ui/button";
import android from "@/app/images/android.jpeg";
import Image from "next/image";

export function NavMenu() {
  return (
    <NavigationMenu className=" list-none gap-5 h-32 min-w-[100vw] flex flex-row rounded-b-lg justify-between px-16">
      <div className="w-2/5 text-4xl">
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={`navigationMenuTriggerStyle() text-4xl`}
            >
              <Image src={android} alt="" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </div>
      <div className=" flex flex-row gap-4 min-w-1/4">
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
      <div className="w-1/4 flex flex-row items-center justify-around gap-5">
        <FaSearch size={25} />
        <Button className="w-56 h-14 text-xl font-semibold rounded-3xl gap-5">
          Shop Phone <FaArrowRight color="#63a105" size={30} />
        </Button>
      </div>
    </NavigationMenu>
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
            className
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
