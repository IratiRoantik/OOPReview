"use strict";
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var MobileLibrary_1 = require("./MobileLibrary");
var nokia3210 = new Mobile_1.Mobile("Nokia", "3210", "Nokia", "22.5mm", "grey", false, 0, 25);
var iphone3G = new Mobile_1.Mobile("iPhone", "3G", "Apple", "23mm", "white", false, 1, 350);
var galaxy10 = new Mobile_1.Mobile("Galaxy", "10", "Samsung", "22mm", "black", true, 3, 800);
var alcatel = new Mobile_1.Mobile("Alcatel", "Bilbao", "Alcatel", "30mm", "pink", true, 6, 325);
var telefonos = [nokia3210, iphone3G, galaxy10, alcatel];
var libreria = new MobileLibrary_1.MobileLibrary("Lapices", "Bilbao", telefonos);
console.log(libreria.getLocation());
// libreria.totalPriceCalculation()
console.log(libreria.getTotalPrice());
libreria.printLibrary();
