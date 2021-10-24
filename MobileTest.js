"use strict";
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var nokia3210 = new Mobile_1.Mobile("Nokia", "3210", "Nokia", "22.5mm", "grey", false, 0, 25);
var iphone3G = new Mobile_1.Mobile("iPhone", "3G", "Apple", "23mm", "white", false, 1, 350);
var galaxy10 = new Mobile_1.Mobile("Galaxy", "10", "Samsung", "22mm", "black", true, 3, 800);
nokia3210.is5G = true;
nokia3210.cameraNumber = 4;
console.log(nokia3210, iphone3G, galaxy10);
