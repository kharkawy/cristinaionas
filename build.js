//File System module for Node.js
const fs = require("fs");

//Copying files from node modules location to web location
fs.copyFile(
  "./node_modules/bootstrap/dist/js/bootstrap.min.js",
  "./web/assets/scripts/boostrap.js",
  (err) => {
    if (err) throw err;
    console.log("Copied correctly");
  }
);

fs.copyFile(
  "./node_modules/jquery/dist/jquery.slim.min.js",
  "./web/assets/scripts/jquery.js",
  (err) => {
    if (err) throw err;
    console.log("Copied correctly");
  }
);

fs.copyFile(
  "./node_modules/@popperjs/core/dist/umd/popper.min.js",
  "./web/assets/scripts/popper.js",
  (err) => {
    if (err) throw err;
    console.log("Copied correctly");
  }
);
