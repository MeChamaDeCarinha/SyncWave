import { FileQuestion } from "lucide-react";
import Android from "../icons/android";
import Linux from "../icons/linux";
import Windows from "../icons/windows";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function InstallPage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-8">
            <p className="mt-32 text-4xl">Wich device are you using?</p>
            <div className=" flex items-center justify-center gap-x-8">
                <Card className="group w-72">
                    <CardHeader>
                        <CardTitle>Windows</CardTitle>
                        <CardDescription>Executable file</CardDescription>
                    </CardHeader>
                    <CardContent className="h-60 flex items-center justify-center">
                        <Windows className="w-24 h-24  group-hover:text-base duration-300"/>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button variant={"outline"}>Download</Button>
                    </CardFooter>
                </Card>
                <Card className="group w-72">
                    <CardHeader>
                        <CardTitle>Linux</CardTitle>
                        <CardDescription>A .deb file</CardDescription>
                    </CardHeader>
                    <CardContent className="h-60 flex items-center justify-center">
                        <Linux className="w-24 h-24  group-hover:text-base duration-300"/>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button variant={"outline"}>Download</Button>
                    </CardFooter>
                </Card>
                <Card className="group w-72">
                    <CardHeader>
                        <CardTitle>Android</CardTitle>
                        <CardDescription>Install the apk</CardDescription>
                    </CardHeader>
                    <CardContent className="h-60 flex items-center justify-center">
                        <Android className="w-24 h-24  group-hover:text-base duration-300"/>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button variant={"outline"}>Download</Button>
                    </CardFooter>
                </Card>
                <Card className="group w-72">
                    <CardHeader>
                        <CardTitle>Don't see your device?</CardTitle>
                        <CardDescription>We don't have a compatible version</CardDescription>
                    </CardHeader>
                    <CardContent className="h-60 flex items-center justify-center">
                        <FileQuestion className="w-24 h-24  group-hover:text-base duration-300"/>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button variant={"outline"} disabled>Download</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}