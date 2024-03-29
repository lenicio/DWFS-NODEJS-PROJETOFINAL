require("dotenv").config({ path: "./.env" });

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.set("view engine", "ejs");
app.use(express.static("public"));

const port = process.env.PORT || 3000;
const apiProductsRoutes = require("./routes/api/v1/productsRoutes");
const apiUsersRoutes = require("./routes/api/v1/usersRoutes");
const appRoutes = require("./routes/app/appRoutes");

app.use(express.json());

app.use("/", appRoutes);
app.use("/api/v1/products", apiProductsRoutes);
app.use("/api/v1/users", apiUsersRoutes);

app.listen(port);
