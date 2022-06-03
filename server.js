const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://JITHINRAJ:Jithin77@cluster0.zwj8d.mongodb.net/intotDB")

app.use("/", require("./routes/userRoute"));

app.listen(3001, function() {
  console.log("express server is running on port 3001");
})
