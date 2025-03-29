import express from "express";
import { configDotenv } from "dotenv";

configDotenv({
    path: "./.env",
})

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello World!",
    });
});

app.get("/api", (req, res) => {
    return res.status(200).json({
        message: "server working",
    });
});

app.listen(port, () => console.log(`Server is running on ${port}`));