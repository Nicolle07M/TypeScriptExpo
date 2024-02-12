// Class

class Person {
    public zone = 'Caribe'
    protected city = 'Bogota DC'
    private country = 'Colombia'
    constructor(){}

    greet(): void {
        console.log('Hello!!')
    }
}

class Employee extends Person{


    constructor(private id: number, private name: string, private dept: string) {

        super();
        this.showInfo();
    } 

    // Metodos
    private showInfo(): void {
        console.log(`${this.name} ${this.dept}`);
    }      
}

const emp = new Employee(1, 'Juan', 'Bogota')



