import { Moon, Sun, Wrench } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "../ui/dropdown-menu.js"
import { Button } from "../ui/button.js"
import { useTheme } from "../providers/theme-provider.js"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup value={ theme } onValueChange={(value ) => setTheme(value as "dark" | "light" | "system") }>
                    <DropdownMenuRadioItem value="light" className="gap-x-2">Light<Sun className="w-5 h-5" /></DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="dark" className="gap-x-2">Dark<Moon className="w-5 h-5" /></DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="system" className="gap-x-2">System<Wrench className="w-5 h-5" /></DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
