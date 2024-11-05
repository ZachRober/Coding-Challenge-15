export const moneyAssets = [{id:10,name:"Disney",type:"stock",price:90,quantity:250},
    {id:11,name:"Apple",type:"stock",price:200,quantity:100},{id:12,name:"Comcast",type:"bond",price:200,quantity:25}];

export function getAssetById(id){
let indexNum = moneyAssets.findIndex(num=>num.id===id);
return indexNum;
}
console.log(getAssetById(10));


