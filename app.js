const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const catRoutes = require("./routes/cat.routes");

app.use( cors() ); // All Cors are allowed
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/cats", catRoutes );

// Hanlde API not found error
app.use((req, res, next) => {
    throw res.status(404).json({message : "API endpoint not found"});
});

// Start the server with the port 
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running and listening to port ${PORT}`);
})