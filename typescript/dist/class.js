"use strict";
// Class
class Employee {
    // Atributos
    /* private id: number;
    private name: string;
    private dept: string; */
    constructor(id, name, dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        /* this.id = id;
        this.name = name;
        this.dept = dept; */
        this.showInfo();
    }
    // Metodos
    showInfo() {
        console.log(`${this.name} ${this.dept}`);
    }
}
const emp = new Employee(1, 'Juan', 'Bogota');
