const concluirTarefa = function (atualiza, id) {
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;
    localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));
    
    atualiza();
}

const BotaoConclui = function (atualiza, id) {
    const botaoConclui = document.createElement("button");
    botaoConclui.addEventListener("click", () => concluirTarefa(atualiza, id));
    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "Concluir";

    return botaoConclui;
}



export default BotaoConclui;