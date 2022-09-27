"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1();
var port = 5000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () { return console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 \u043F\u043E\u0440\u0442\u0443 ".concat(port)); });
