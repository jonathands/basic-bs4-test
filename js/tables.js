(function()
{
    adicionaContatoTabela('Maria', 12);
    adicionaContatoTabela('João', 1);
})();

document.querySelector("#btnAdicionaContatoTabela").addEventListener("click", adicionaContatoTabelaForm);


function adicionaContatoTabelaForm(e)
{
    e.preventDefault();
    const codigo = document.querySelector("#codigo").value;
    const nome = document.querySelector("#nome").value;

    adicionaContatoTabela(nome,codigo);
}

function adicionaContatoTabela(nome,codigo)
{
    
    const lista = document.querySelector("#lista-contatos");
    
    let newTr = document.createElement("tr");
    
    let tdCodigo = document.createElement("td");
    tdCodigo.innerText = codigo;

    let tdNome = document.createElement("td");
    tdNome.innerText = nome;

    let tdRem = document.createElement("td");
    let aRem = document.createElement("a");
    
    aRem.classList.add("fa","fa-times");
    aRem.addEventListener("click",removerContatoTabela);

    tdRem.appendChild(aRem);


    newTr.appendChild(tdCodigo);
    newTr.appendChild(tdNome);
    newTr.appendChild(tdRem);

    lista.appendChild(newTr);
}

function removerContatoTabela(e)
{
    e.preventDefault();
    if(confirm("esta certo disso?"))
    {
        e.target.closest("tr").remove();    
    } 
}