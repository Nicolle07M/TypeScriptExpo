// variable 
const PI = 3.14;

//interface 
interface Person {
    id: number;
    name: string;
}

//fuction 
function generateRandomNumeber(): number {
    return Math.floor(Math.random() * 100);
}

export {PI, Person, generateRandomNumeber}