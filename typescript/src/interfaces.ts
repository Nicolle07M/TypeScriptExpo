interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string;
    isLoan?: (id: number) => void
}


const book: Book = {
    id: 1,
    title: 'Satanas',
    author: 'Mario Mendoza'
};

function getBook(): Book {
    return {id: 1, title: 'Satanas',  author:'Mario Mendoza'};
}


function createBook(book:Book):Book {
    return book;
}

const newBook: Book = {
    id: 1,
    title: 'Satanas',  
    author:'Mario Mendoza'   
}
createBook(newBook);

