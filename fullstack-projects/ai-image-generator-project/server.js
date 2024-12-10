const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"))
);

const invokeUrl =
  "https://ai.api.nvidia.com/v1/genai/stabilityai/stable-diffusion-xl";
const API_KEY = process.env.API_KEY;

app.post("/generate-our-image-brotha", async (req, res) => {
  try {
    const response = await fetch(invokeUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const responseBody = await response.json();
    res.json(responseBody);
  } catch (error) {
    res.status(500).send({ error: "API Request not successful" });
  }
});

const PORT = process.env.PORT || 1312;

app.listen(PORT, () => console.log("Server is running brotha..."));
