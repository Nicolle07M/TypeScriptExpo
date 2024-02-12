"use strict";
const book = {
    id: 1,
    title: 'Satanas',
    author: 'Mario Mendoza'
};
function getBook() {
    return { id: 1, title: 'Satanas', author: 'Mario Mendoza' };
}
function createBook(book) {
    return book;
}
const newBook = {
    id: 1,
    title: 'Satanas',
    author: 'Mario Mendoza'
};
createBook(newBook);
