let filmes = [];
function adicionarFilme() {
    let filme =
        document.getElementById("filme").value;
    let genero =
        document.getElementById("genero").value;
    let status =
        document.getElementById("status").value;
    if (filme == "") {
        alert("Digite o nome do filme.");
        return;
    }
    if (genero == "") {
        alert("Selecione um gênero.");
        return;
    }
    if (status == "") {
        alert("Selecione o status do filme.");
        return;
    }
    filmes.push(
        filme + " - " + genero + " - " + status
    );
    document.getElementById("totalFilmes").textContent =
        filmes.length;
    mostrarFilmes();
    document.getElementById("filme").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("status").value = "";
}
function mostrarFilmes() {
    let lista =
        document.getElementById("listaFilmes");
    lista.innerHTML = "";
    for (
        let i = 0;
        i < filmes.length;
        i++
    ) {
        lista.innerHTML +=
            "<li>" + filmes[i] + "</li>";
    }
}
function removerUltimo() {
    if (filmes.length == 0) {
        alert("A lista já está vazia.");
        return;
    }
    filmes.pop();
    document.getElementById("totalFilmes").textContent =
        filmes.length;
    mostrarFilmes();
}


