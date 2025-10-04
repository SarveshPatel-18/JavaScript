/* Qs.2 For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer. */

let itemsPrices = [250,645,300,900,50];
// let idx = 0;

// for (let Value of itemsPrices) {
//     console.log(`Value at index ${idx} = ${Value}`);

//     let offer = Value / 10;
//     itemsPrices[idx] = itemsPrices[idx] - offer;

//     console.log(`The value of items after applying offer is ${itemsPrices[idx]}`)

//     idx++;
// }

for (let i=0; i < itemsPrices.length; i++) { 
    let offer = itemsPrices[i] / 10;

    itemsPrices[i] -= offer;
}

console.log(itemsPrices);
