import { moneyAssets } from "./asset";

export function calculatePortfolioValue(){
    let total = 0;
    moneyAssets.forEach(asset=>{total += asset.price * asset.quantity});
    return total;
}
export function getPortfolioAllocation(){
    let total = 0;
    moneyAssets.forEach(asset=>{total += asset.price * asset.quantity});
    return moneyAssets.forEach(asset=>(asset.price*asset.quantity)/total);
}
