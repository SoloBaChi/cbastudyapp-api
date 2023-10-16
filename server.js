
const express = require("express"),
      dotenv = require("dotenv"),
      cors = require("cors")



const app = express();
dotenv.config({path:".env"});

let PORT = process.env.PORT || 4000;

const start = async() => {
app.listen(PORT,()=>{
console.log(`app listening to localhost:${PORT}`)
})
}
module.exports = start;