import express from "express";
import connectDb from "./config/db.config.js";
import userRoutes from "./routes/user.routes.js";
import path from "path";
import "dotenv/config";

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.use("/", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
