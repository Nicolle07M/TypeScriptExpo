"use strict";
// generics
// type dataType = Person | Product;
class DataCollection {
    constructor() {
        this.items = [];
        // getNames(): string[]{
        //   return this.items.map((items) => items.name)
        // }
        // getItemById(id: number): T | undefined{
        //   return this.items.find((item: T) => item.id === id)
        // }
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log('List of items', JSON.stringify(this.items));
    }
}
const productCollection = new DataCollection();
const newData2 = {
    id: 2,
    name: 'beer',
    price: 333
};
productCollection.addItem(newData2);
productCollection.getItems();
