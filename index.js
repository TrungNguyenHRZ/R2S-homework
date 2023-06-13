//Bài 1
let callbacks = []
for (let i = 0; i < 10; i++) {
callbacks.push(function() { console.log(i) });
}	
callbacks[2]();


//Bài 2
const inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
  ]

const countMachineValue = (array) => {
    let totalValue = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i].type === "machine") {
            totalValue += array[i].value;
        }
    }
    return totalValue;
}

const totalValueMachine = countMachineValue(inventory);
console.log(totalValueMachine);

//Bài 3
const inventory2 = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
  ]

const sortInventory = (array) => {
    let newArray = [];
    array.sort((a, b) => a.value - b.value)
    newArray.push(array);
    return newArray;
}
const vvvv = sortInventory(inventory2)
console.log(vvvv);