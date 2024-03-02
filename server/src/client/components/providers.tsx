import { ThemeProvider } from "./providers/theme-provider"

export default function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">{children}</ThemeProvider>
}
