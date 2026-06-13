const booksByCategory = [
{
category: "Romance",
books: [
    {
    title: "O Sol Também é Uma Estrela",
    author: "Nicola Yoon",
    },
    {
    title: "O Noivo da Minha Melhor Amiga",
    author: "Emily Gin",
    },
    {
    title: "Orgulho e Preconceito", 
    author:"Jane Austen",
    },
    ],
}, {
category: "Fantasia",
books: [
{
title: "Harry Potter e a Pedra Filosofal",
author: "J.K. Rowling",
},
{
title: " O Hobbit ",
author: "J.R.R. Tolkien ",
},
{
title: "Eragon",
author: "Christopher Paolini",
},
{
title: "O Nome do Vento",
author: "Patrick Rothfuss",
},
],
}, {
category: "Suspense",
books: [
{
title: "A Garota no Trem",
author: "Paula Hawkins",
},
{
title: "O Silêncio dos Inocente s ",
author: "Thomas Harris",
},
],
}, {
category: "Ficção Científica",
books: [
{
title: "Duna",
author: "Frank Herbert",
},
{
title: "Neuromancer",
author: "William Gibson",
},
{
title: "Fundação",
author: "Isaac Asimov",
},
{
title: "1984",
author: "George Orwell",
},
{
title: "O Fim da Infância",
author: "Arthur C. Clarke",
},
],
},
]

/*
function countBooksInCategory(){
    const resultado = {};
    for(const item of booksByCategory){
        resultado[item.category] = item.books.length;
    }
    console.log(resultado);
}

countBooksInCategory();
*/


function authors(){
    let vetor = [];
    for(const category of booksByCategory){
        for(const livro of category.books){
            //console.log(livro)
            if (vetor.findIndex( x => x == livro.author ) === -1){
                vetor.push(livro.author);
                //console.log(vetor.findIndex( x => x == livro.autor))
            }
        }
    }
    console.log(vetor);

}

authors();