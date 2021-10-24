"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPriceCalculation();
    }
    // GETTERS
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    // SETTERS
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileLibrary.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    // METODOS
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var total = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            total += this.mobiles[i].getPrice();
        }
        this.setTotalPrice(total);
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("this are all my mobiles: ");
        for (var i = 0; i < this.mobiles.length; i++)
            console.log("the characteristics of the mobile " + this.mobiles[i].getMobileName() + " are:" + '\n' +
                " Name :" + this.mobiles[i].getMobileName() + '\n' +
                " Model :" + this.mobiles[i].getModel() + '\n' +
                " Trademark :" + this.mobiles[i].getTrademark() + '\n' +
                " adSize :" + this.mobiles[i].getAdSize() + '\n' +
                " Color :" + this.mobiles[i].getColor() + '\n' +
                " is5G? :" + this.mobiles[i].getIs5G() + '\n' +
                " Camera Number :" + this.mobiles[i].getCameraNumber() + '\n' +
                " Price :" + this.mobiles[i].getPrice() + '\n');
    };
    ;
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
