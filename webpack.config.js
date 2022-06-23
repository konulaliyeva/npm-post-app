const path =require("path");

module.exports= {
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve("public"),
        filename: "bundle.js",
    }
};