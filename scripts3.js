console.log('#                #');
console.log('# Buscando e encontrando dados em Array #');

/*
 Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em função que irá receber o nome do autor e
    devolver os livros desse autor.

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                titles: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }

        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                titles: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }

        ],
    }
];

const totalCategoria = booksByCategory.length;
console.log('Total de categoria:', totalCategoria);

for (let categoria of booksByCategory) {
    console.log('Na categoria:', categoria.category, ', a quantidade de livros é: ', categoria.books.length)
}

function countAuthors() {
    let autores = [];

    for (let categoria of booksByCategory) {

        for (let book of categoria.books) {

            if (autores.indexOf(book.author) == -1) {
                autores.push(book.author)
            }
        }
    }

    console.log("Total de autores:", autores.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for (let categoria of booksByCategory) {

        for (let book of categoria.books) {

            if (book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}:\n    * ${books.join("\n    * ")}`)
}

booksOfAuthor("Augusto Cury");
