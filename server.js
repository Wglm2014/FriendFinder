const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;



const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function () {
    console.log(`server friend finder listening on port ${PORT}`);
});