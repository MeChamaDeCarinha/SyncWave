import { HardDriveDownload } from "lucide-react"

import { Link, Outlet } from "react-router-dom"
import { Menubar, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../ui/menubar"
import Windows from "../icons/windows"
import Linux from "../icons/linux"
import { Separator } from "../ui/separator"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { ThemeToggle } from "../providers/theme-toggle"
import Android from "../icons/android"

export default function LandingPageLayout() {
    return (
        <div className="w-screen h-[100dvh] overflow-hidden flex flex-col">
            <div className="w-screen h-14 p-2 px-4 flex items-center shr">
                <Link to={"/"}><img src="/LogoWide.png" width={400} height={100} className="w-40 h-10" /></Link>
                <Menubar className="ml-4">
                    <MenubarMenu>
                        <MenubarTrigger>Downloads</MenubarTrigger>
                        <MenubarContent>
                            <MenubarLabel className="flex items-center gap-x-2">
                                <Windows className="w-4 h-4" />
                                Windows
                            </MenubarLabel>
                            <MenubarItem>
                                Installer (.exe)
                                <MenubarShortcut>
                                    <HardDriveDownload className="w-5 h-5" />
                                </MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarLabel className="flex items-center gap-x-2">
                                <Linux className="w-4 h-4" />
                                Linux
                            </MenubarLabel>
                            <MenubarItem>
                                Installer (.deb)
                                <MenubarShortcut>
                                    <HardDriveDownload className="w-5 h-5" />
                                </MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarLabel className="flex items-center gap-x-2">
                                <Android className="w-4 h-4" />
                                Android
                            </MenubarLabel>
                            <MenubarItem>
                                Installer (.apk)
                                <MenubarShortcut>
                                    <HardDriveDownload className="w-5 h-5" />
                                </MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
                <div className="ml-auto">
                    <ThemeToggle />
                </div>
            </div>
            <Separator orientation="horizontal" />
            <ScrollArea>
                <Outlet />
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
    )
}
