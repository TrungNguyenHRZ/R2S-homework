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

const sortAscendingValue = sortInventory(inventory2)
console.log(sortAscendingValue);

//Bài 4
const inventory3 = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
  ]

const sortDInventory = (array) => {
    let newArray = [];
    array.sort((a, b) => b.value - a.value)
    newArray.push(array);
    return newArray;
}

const sortDescendingValue = sortDInventory(inventory3)
console.log(sortDescendingValue);

//Bài 5
function go(options) {
    let {speed = 4,
         enable: {hyperdrive = false,
                  frobnifier = true}} = options
    console.log("speed=", speed,
                "hyperdrive:", hyperdrive,
                "frobnifier:", frobnifier)
  }
  const optionsParam = {
    enable: {
        hyperdrive: false,
        frobnifier: false
    }
  };
  go(optionsParam)

  //Bài 6
  const users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
  const displayAdmin = (users) => {
    users.filter((user) => {
        if(user.admin === true) {
            console.log(user.id);
            return true;
        }
        return false;
    });
  }

  displayAdmin(users)
  
  //Bài 8
  function sum(a = 0, b = 0) {
    return a + b;
  }
  console.log(sum());
