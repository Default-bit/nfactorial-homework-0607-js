let DalidaTeaShop = [ 
    {
    "teaType": "black" ,
    "teaTaste": "sweet" ,
    "teaAvailable": 100, 
    "teaHot": null ,     // usually served as Hot (true) or Cold (false)
    "teaIngredients": ["Black tea", "Sugar"]
    }, 
    {
    "teaType": "green" ,
    "teaTaste": "sweet" ,
    "teaAvailable": 28, 
    "teaHot": true ,     // usually served as Hot (true) or Cold (false)
    "teaIngredients": ["Green tea", "Mint"]
    }
];

console.log("You are in the Tea Shop. You can either order or see tea database.");
console.log(`For example, the first tea in a database is ${DalidaTeaShop[0].teaType}`);

DalidaTeaShop[0].teaTaste = "tasteless";
DalidaTeaShop[0][teaExpirationDays] = 300;
DalidaTeaShop[0][testProperty] = "testText";
delete DalidaTeaShop[0].testProperty;
DalidaTeaShop[0][testProperty2] = "testText2";
delete DalidaTeaShop[0][testProperty2];

function showTeaTypeTaste(DalidaTeaShop) {
    console.log(`The tea type is ${DalidaTeaShop.teaType} and the Taste is ${DalidaTeaShop.teaTaste}`);
}

showTeaTypeTaste(DalidaTeaShop[0]);

const teaBasicIngredients = [ "Water", "Teacup", "Spoon", "Cake" ];
console.log(teaBasicIngredients.map(material => material));
const [first, second] = teaBasicIngredients;
console.log(`The first basic ingredient is ${first}`);
console.log(`The second basic ingredient is ${second}`);


function dateChecker(DalidaTeaShop) {
  return teaExpirationDays >= 10;
}
const sortedDates = undefined;
sortedDates = DalidaTeaShop.filter(dateChecker);
console.log(`The tea types that have experation dates of more than 10 days: ${sortedDates}`);

if(DalidaTeaShop[0].teaAvailable > 7){
    console.log(`The Black Tea is capable of serving more than 7 people.`);
}

const blackTeaTaste = 56;
String(blackTeaTaste);
blackTeaTaste = "tasteless"
DalidaTeaShop[0].teaHot = null ?? blackTeaTaste;

switch (blackTeaTaste) {
    case "sweet":
      console.log(`The black tea is sweet!`);
      break;
    case "tasteless":
        console.log(`The black tea is not sweet!`);
      break;
}

function clientTeaShopRest(day, name, ...other) { 
    return other;
}

clientTeaShopRest("07.06.22", "Aiko", "green", "1800");

function clientTeaShopSpread(date, name, teaType) { 
    return `${date} ${name} runs ${teaType}`;
}

clientTeaShopSpread(...["07.06.22", "Aiko", "green"]);

const spoonSizes = ["very little", "little", "golden middle", "large", "very large"];
const spoonSizesBig = spoonSizes.slice(3, 5);

let listTeaTypes;
for (let i = 0; i < DalidaTeaShop.length; i++) { 
    listTeaTypes += DalidaTeaShop[i] + "<br>";
}

let clientOrders = {client: "", order: ""};
let i=0;
while (i < 5) {
    clientOrders.client = String(i);
    clientOrders.order = DalidaTeaShop[i];
    i++;
}

do{
    console.log(spoonSizes.map(material => material));
}while(spoonSizes);

let j = 0;
let spoonSizesLength = spoonSizes.length;
do {
  console.log(spoonSizes[j]);
  j++;
} while (j < spoonSizesLength);

// export default function bannerDefault() {
// 	console.log('Good Day! Welcome to the Tea Shop full of exotic tea types!');
// }
// import greeting from './bannerDefault';
// bannerDefault();

// export function bannerNamed() {
// 	console.log('Welcome to the Tea Shop!');
// }
// export const placeTeaShop = 'nFactorial Incubator';
// import { bannerNamed, placeTeaShop } from './bannerNamed';
// bannerNamed();
// console.log(placeTeaShop);

// import * as say from './thefile.js';

// thefile.hello(clientName); 
// thefile.bye(clientName);
 




