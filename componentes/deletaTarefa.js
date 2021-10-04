const removerTarefa = function (atualiza, id) {
    const index = id;
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));
    tarefasCadastradas.splice(index, 1);
    localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));
    atualiza();
}

const BotaoDeleta = function (atualiza, id) {
    const botaoDeleta = document.createElement("button");
    botaoDeleta.addEventListener("click", () => removerTarefa(atualiza, id));
    botaoDeleta.classList.add("remove-button");
    botaoDeleta.innerText = "Remover";

    return botaoDeleta;
}

export default BotaoDeleta;