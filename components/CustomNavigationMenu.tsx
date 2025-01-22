"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"

export function CustomNavigationMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                            <span className="text-base text-lovechemred-500">Anasayfa</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/hakkimizda" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                            <span className="text-base text-lovechemred-500">Hakkımızda</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent"><span className="text-base text-lovechemred-500">Kategori</span></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col gap-3 p-4 w-[500px]">
                            <ListItem href="/" title="Alt Kategori 1">
                                Açıklama
                            </ListItem>
                            <ListItem href="/" title="Alt Kategori 2">
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent"><span className="text-base text-lovechemred-500">Kategori</span></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col gap-3 p-4 w-[500px]">
                            <ListItem href="/" title="Alt Kategori 1">
                                Açıklama
                            </ListItem>
                            <ListItem href="/" title="Alt Kategori 2">
                                Açıklama
                            </ListItem>
                            <ListItem href="/" title="Alt Kategori 3">
                            </ListItem>
                            <ListItem href="/" title="Alt Kategori 4">
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/iletisim" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                            <p className="text-base text-lovechemred-500">İletişim</p>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <Button className="bg-lovechemred-500 border border-lovechemred-500 text-white hover:bg-white hover:text-lovechemred-500" asChild>
                    <Link href="/egitim-takvimi">
                        <span className="text-base">Takvim</span>
                    </Link>
                </Button>
            </NavigationMenuList>
        </NavigationMenu>
    )
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
                    <div className="text-sm font-medium leading-none text-lovechemred-500">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-lovechemred-500 opacity-75">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
