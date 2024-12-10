const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./router/userRoutes");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://almayo:7Io7qZCy4UCs4jpj@cluster0.26zhx4l.mongodb.net/users-portfolio"
  )
  .then(() => console.log("mongoose.connected thats dope!!!"))
  .catch((error) => {
    console.log(error.message);
  });

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
