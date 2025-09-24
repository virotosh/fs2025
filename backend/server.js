const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const router = express.Router();


dotenv.config();


const app = express();

app.use(
    cors({
        origin: process.env.ORIGIN,
        methods: ["GET", "PUT", "POST", "DELETE"],
        credentials: true,
    })
 );
 

app.get('/', (req, res) => {
   res.send('Hello World from Express!');
});

app.use(router);
app.use("/api/users", require("./routes/userRoutes"));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
