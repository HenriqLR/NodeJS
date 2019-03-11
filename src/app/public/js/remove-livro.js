let tabelaLivros = document.querySelector('#livros');
tabelaLivros.addEventListener('click', (evento) =>{
    let elementoClicado = evento.target;

    if(elementoClicado.dataset.type == 'remocao') {
        let livroid = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/livros/${livroid}`, { method: 'DELETE'})
        .then(resposta => {

            let tr = elementoClicado.closest(`#livro_${livroid}`);
            tr.remove();
        })
        .catch(erro => console.log(erro));
    }

})