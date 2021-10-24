import { Mobile } from "./Mobile";
import { MobileLibrary } from "./MobileLibrary";

let nokia3210 = new Mobile ("Nokia", "3210", "Nokia", "22.5mm", "grey", false, 0 , 25 )
let iphone3G = new Mobile ("iPhone", "3G", "Apple", "23mm", "white", false, 1, 350)
let galaxy10 = new Mobile ("Galaxy", "10", "Samsung", "22mm", "black", true, 3, 800)
let alcatel = new Mobile ("Alcatel", "Bilbao","Alcatel","30mm", "pink", true, 6, 325)

let telefonos = [nokia3210,iphone3G,galaxy10,alcatel]

let libreria = new MobileLibrary("Lapices", "Bilbao", telefonos)

console.log(libreria.getLocation());
// libreria.totalPriceCalculation()
console.log(libreria.getTotalPrice())

libreria.printLibrary()
