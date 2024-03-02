import { Link } from "react-router-dom"
import Linux from "../icons/linux"
import Windows from "../icons/windows"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Android from "../icons/android"
import { ArrowDownToLine, ArrowLeftRight, ArrowRight, Headphones, Search } from "lucide-react"

export default function LandingPage() {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="h-[100dvh] pb-28 flex flex-col items-center justify-center gap-y-2 shrink-0">
                <img src="/LogoWide.png" className="w-[640px] h-40" />
                <p className="text-4xl">Your musics everywhere.</p>
                <Button variant={"outline"} size={"lg"} className="mt-4" asChild>
                    <Link to={"/install"}>Download</Link>
                </Button>
            </div>
            <div className="mb-28 flex items-center justify-center shrink-0">
                <div className="w-1/2 px-4 flex flex-col justify-center gap-y-14">
                    <div>
                        <p className="text-5xl">Sync between your devices</p>
                        <p className="text-xl text-neutral-400">Playlists, musics and more</p>
                    </div>
                    <div className="h-60 mx-4 flex items-center justify-center gap-10">
                        <div className="group flex flex-col items-center justify-center gap-y-2">
                            <Windows className="w-36 h-36 group-hover:text-base-default duration-300" />
                            <p className="text-xl group-hover:text-base-default duration-300">Windows</p>
                        </div>
                        <ArrowLeftRight className="w-20 h-20 animate-pulse" />
                        <div className="group flex flex-col items-center justify-center gap-y-2">
                            <Linux className="w-36 h-36 group-hover:text-base-default duration-300" />
                            <p className="text-xl group-hover:text-base-default duration-300">Linux</p>
                        </div>
                        <ArrowLeftRight className="w-20 h-20 animate-pulse delay-1000" />
                        <div className="group flex flex-col items-center justify-center gap-y-2">
                            <Android className="w-36 h-36 group-hover:text-base-default duration-300" />
                            <p className="text-xl group-hover:text-base-default duration-300">Android</p>
                        </div>
                    </div>
                    <p className="text-center">Only avaiable on Windows, Linux and Android</p>
                </div>
            </div>
            <div className="mt-28 mb-56 flex items-center justify-center shrink-0">
                <div className="w-1/2 px-4 flex flex-col justify-center gap-y-14">
                    <div>
                        <p className="text-5xl">Hear offline</p>
                        <p className="text-xl text-neutral-400">Download the music in your device, listen everywhere</p>
                    </div>
                    <div className="h-60 mx-4 flex items-center justify-center gap-10">
                        <div className="group flex flex-col items-center justify-center gap-y-2">
                            <Search className="w-36 h-36 group-hover:text-base-default duration-300" />
                            <p className="text-xl group-hover:text-base-default duration-300">Find</p>
                        </div>
                        <ArrowRight className="w-20 h-20 animate-pulse" />
                        <div className="group flex flex-col items-center justify-center gap-y-2">
                            <ArrowDownToLine className="w-36 h-36 group-hover:text-base-default duration-300" />
                            <p className="text-xl group-hover:text-base-default duration-300">Download</p>
                        </div>
                        <ArrowRight className="w-20 h-20 animate-pulse delay-1000" />
                        <div className="group flex flex-col items-center justify-center gap-y-2">
                            <Headphones className="w-36 h-36 group-hover:text-base-default duration-300" />
                            <p className="text-xl group-hover:text-base-default duration-300">Hear</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
