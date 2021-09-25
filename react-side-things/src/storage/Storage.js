//reduce 
const numbs= [34, 56, 78, 92];
let sum = 0;
for(const num of numbs){
    sum = sum + num;
}


const reducer = (previous, current) => previous +current;
numbs.reduce (reducer, 0);

const jinis = [
    {
        id:1,
        name:'alta',
        price: 25
    },
    {
        id:2,
        name:'nail polish',
        price: 500
    },
    {
        id:3,
        name:'face mask',
        price: 255
    },
    {
        id:1,
        name:'maskara',
        price: 590
    }
    
]

let  total = 0;
for(const jini of jinis){
    total = total + jini.price;
}


const jinisReducer = (previous, current) => previous+ current.price;
const jinisTotal = jinis.reduce(jinisReducer, 0);