import express from "express"
import ViteExpress from "vite-express"

const app = express()
const port = 80

app.get("/api", (_, res) => {
    res.send("Hello World!")
})

ViteExpress.listen(app, 80, () => console.log("Server started: http://localhost:" + port))
