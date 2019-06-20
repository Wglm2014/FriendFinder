const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log(`server friend finder listenin on port ${PORT}`);
});