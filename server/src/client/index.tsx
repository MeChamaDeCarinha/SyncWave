import React from "react"
import ReactDOM from "react-dom/client"
import "./globals.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Providers from "./components/providers"
import LandingPage from "./components/landing-page/page"
import LandingPageLayout from "./components/layout/landing-page-layout"
import InstallPage from "./components/install/page"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Providers>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPageLayout />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/install" element={<InstallPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Providers>
    </React.StrictMode>
)
