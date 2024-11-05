import { calculatePortfolioValue } from "./portfolio";
import { getPortfolioAllocation } from "./portfolio";
import { Transaction } from "./transaction";

console.log(calculatePortfolioValue());
console.log(getPortfolioAllocation());
const Disney = new Transaction(10,"sell",20);
Disney.buyOrSell();