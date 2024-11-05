import { moneyAssets } from "./asset";
import { getAssetById } from "./asset";


export class Transaction {
    constructor(assetId,type,quantity){
        this.assetId=assetId;
        this.type=type;
        this.quantity=quantity;
    }
buyOrSell(){
    const asset = getAssetById(this.assetId)
    if(this.type==="sell"){
        if(asset.quantity>=this.quantity){
            asset.quantity -= this.quantity
        }
        else{
            console.log("You dont have that much to sell");
        }
    }
    else{
        asset.quantity += this.quantity;
    }
   console.log(asset.quantity);
}
}
