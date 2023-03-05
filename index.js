const Express = require("express");
const app = Express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORTNUMBER;
app.use(Express.json());
const userRoutes = require('./Routes/userRoutes.js');

app.use("/api/users",userRoutes);

app.listen(port, console.log(`server is Running on ${port}`));
