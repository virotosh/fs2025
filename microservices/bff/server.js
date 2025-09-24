const express = require("express");
const cors = require("cors");
const communicator = require('./communicator');


const app = express();
app.use(express.json());
app.use(
  cors({
      origin: "http://localhost:5173",
      methods: ["GET", "PUT", "POST", "DELETE"],
      credentials: true,
  })
);


app.get('/', communicator.userService);
app.post('/api/users/login', communicator.userService);
app.post('/api/users/logout', communicator.userService);
app.post('/api/users/profile', communicator.userService);
app.post('/api/users/register', communicator.userService);


app.get('/api/items', communicator.itemService);
app.post('/api/items', communicator.itemService);
app.get('/api/items/:id', communicator.itemService);
app.delete('/api/items/:id', communicator.itemService);

app.listen(5000, () => console.log(`Server running on port 5000`));
