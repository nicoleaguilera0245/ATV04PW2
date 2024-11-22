const titulosLivros = ["O Senhor dos Anéis", "O Planeta dos Macacos", "Jantar Secreto", "Tripulação de Esqueletos"];

const livrosAutores = new Map([
    ["O Senhor dos Anéis", "J.R.R. Tolkien"],
    ["O Planeta dos Macacos", "Pierre Boulle"],
    ["Jantar Secreto", "Raphael Montes"],
    ["Tripulação de Esqueletos", "Stephen King"]
]);

const generosLivros = new Set(["Fantasia", "Ficção científica", "Thriller e Suspense", "Horror"]);

function adicionarLivro(titulo, genero, autor) {
    console.log(titulosLivros.push(titulo));
    console.log(livrosAutores.set(titulo, autor));
    console.log(generosLivros.add(genero));
};

function removerLivro(titulo) {
    console.log(livrosAutores.delete(titulo));
    return console.log(livrosAutores);
};

function listarLivros() {
    return console.log(titulosLivros);
};

function verificarDisponibilidade(titulo) {
    console.log(titulosLivros.includes(titulo));
    if (titulosLivros.includes(titulo)) {
        return console.log("O livro", titulo, "está na lista.");
    } else {
        return console.log("O livro", titulo, "não está na lista.");
    };
};