require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/songs");
const playListRoutes = require("./routes/playLists");
const searchRoutes = require("./routes/search");
const app = express();

connection();
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
 app.use(cors(corsOptions));
// app.use(cors({
//     origin: 'http://localhost:3000'
//   }));
app.use(express.json());

app.use("/api/users/", userRoutes);
app.use("/api/login/", authRoutes);
app.use("/api/songs/", songRoutes);
app.use("/api/playlists/", playListRoutes);
app.use("/api/", searchRoutes);

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
