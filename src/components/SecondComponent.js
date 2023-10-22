import React from 'react'
const books = [
    {
        "title": "The Garden of Words",
        "author": "Makoto Shinkai",
        "genre": "Drama",
        "publication_year": 2011
    },
    {
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel García Márquez",
        "genre": "Magical Realism",
        "publication_year": 1967
    },
    {
        "title": "Neuromancer",
        "author": "William Gibson",
        "genre": "Science Fiction",
        "publication_year": 1984
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Classic",
        "publication_year": 1813
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "genre": "Dystopia",
        "publication_year": 1949
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "publication_year": 1937
    }
];
export const SecondComponent = () => {
    return (
        <div>
            <h2>List of books</h2>
            {books.length > 0 ?
                (<ul>
                    {
                        books.map((book, index) => {
                            return <li key={index}>{book.title}</li>;
                        })
                    }
                </ul>): 
            (<span>There is no book</span>)
            }
        </div>
    )
}
