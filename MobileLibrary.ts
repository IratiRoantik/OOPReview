import { Mobile } from "./Mobile";


class MobileLibrary{
    private name: string;
    private location : string;
    private mobiles : Mobile [];
    private totalPrice : number;


    constructor(name:string, location: string, mobiles: Mobile[]){
            this.name = name;
            this.location = location;
            this.mobiles = mobiles ;
            this.totalPriceCalculation();
    }

// GETTERS
public getName():string{
    return this.name
}
public getLocation():string{
    return this.location
}
public getMobiles():Mobile[]{
    return this.mobiles
}
public getTotalPrice():number{
    return this.totalPrice
}

// SETTERS
public setName(name:string){
    this.name = name;
    }
public setLocation(location:string){
    this.location = location;
}
public setMobiles(mobiles:Mobile[]){
    this.mobiles = mobiles;
}
public setTotalPrice(totalPrice:number){
    this.totalPrice = totalPrice;
}

// METODOS

private totalPriceCalculation(){
    let total = 0
    for(let i = 0; i< this.mobiles.length; i++){
     total += this.mobiles[i].getPrice()
    }
    this.setTotalPrice(total)
    }  

    printLibrary(){
        console.log("this are all my mobiles: ");
        
        for(let i = 0 ; i < this.mobiles.length ; i++)
        console.log( "the characteristics of the mobile " + this.mobiles[i].getMobileName() + " are:" + '\n' +
        " Name :" + this.mobiles[i].getMobileName() + '\n' +
        " Model :" + this.mobiles[i].getModel() + '\n' +
        " Trademark :" + this.mobiles[i].getTrademark() + '\n' +
        " adSize :" + this.mobiles[i].getAdSize() + '\n' +
        " Color :" + this.mobiles[i].getColor() + '\n' +
        " is5G? :" + this.mobiles[i].getIs5G() + '\n' +
        " Camera Number :" + this.mobiles[i].getCameraNumber() + '\n' +
        " Price :" + this.mobiles[i].getPrice() + '\n'
                    )

    };
        
    }


export {MobileLibrary}