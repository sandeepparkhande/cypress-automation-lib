const cucumber = require("cypress-cucumber-preprocessor").default;
const resolve = require("resolve");

module.exports = (on, config) => {
    const options = {
        typescript: resolve.sync("typescript", { baseDir: config.projectRoot }),
    };

    on("file:preprocessor", cucumber(options));
};