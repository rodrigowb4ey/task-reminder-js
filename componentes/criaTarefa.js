import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";
import { carregaTarefa } from "./carregaTarefa.js";

export const handleNovoItem = (evento) => {
    evento.preventDefault();
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    const calendario = document.querySelector("[data-form-date]");
    const data = moment(calendario.value);
    const horario = data.format("HH:mm");
    const dataFormatada = data.format("DD/MM/YYYY");
    const concluida = false;

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }
    
    

    const tarefasAtualizadas = [...tarefas, dados];
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));
    
    input.value = "";
    
    carregaTarefa();
}

export const Tarefa = function ({valor, horario, concluida}, id) {
    
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = `${horario} * ${valor}`;
    p.classList.add("content");
    li.appendChild(p);
    li.appendChild(BotaoConclui(carregaTarefa, id));
    li.appendChild(BotaoDeleta(carregaTarefa, id));
    li.classList.add("task");
    if (concluida) {
        li.classList.add("done");
    }
    

    return li;
}
