const express = require("express");
const app = express();
const cors = require("cors")
const { OK, ERR } = require("./utilities/response");


const PORT = 3002

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    const data = {
        isRunning: true,
        serverVersion: "1.0.0"
    }
    OK(res, 200, data, "Success getting server main endpoint")
})

// Melihat daftar favorit film
app.get("/my-movies", (req, res) => {
    const data = {
        id: 1,
        title: "Bullet Train",
        years: "2020"
    }
    OK(res, 200, data, "Success getting my-movies endpoint")
})

// Menambahkan Favorit Film
app.post("/my-movies", (req, res) => {
    console.log("Inserting new favorite Movies...")
    const data = req.body
    console.log({ data })
    res.status(201).json({ message: "Success" })
})

// Menghapus list Film
app.delete("/my-movies/:id/:token", (req, res) => {
    console.log("Delete favorite movies...")
    const { id, token } = req.params;
    console.log({ id, token });
    res.status(204).json({ message: "Success" })
})

// Menambahkan data user untuk verifikasi sistem
app.post("/token", (req, res) => {
    const data = req.body
    console.log({ data })
    res.status(201).json({ message: "Token created..." })
})

app.listen(PORT, () => {
    console.log(`Server API berjalan di port ${PORT}`)
})

