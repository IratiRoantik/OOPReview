import { Mobile } from "./Mobile";
let nokia3210 = new Mobile ("Nokia", "3210", "Nokia", "22.5mm", "grey", false, 0 , 25 )
let iphone3G = new Mobile ("iPhone", "3G", "Apple", "23mm", "white", false, 1, 350)
let galaxy10 = new Mobile ("Galaxy", "10", "Samsung", "22mm", "black", true, 3, 800)

nokia3210.is5G = true
nokia3210.cameraNumber = 4
console.log(nokia3210,iphone3G,galaxy10);