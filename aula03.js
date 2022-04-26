function selecionaParagrafos() {
    const textos = document.querySelectorAll("p");
    let listaImpressao = Array.from(textos);
    listaImpressao.map((p) => console.log(p.innerText));
    }

console.log(document.getElementsByTagName("h2"))