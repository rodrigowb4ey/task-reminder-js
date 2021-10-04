import { ordenaDatas, removeDatasRepetidas } from "../services/data.js";
import { criaData } from "./criaData.js";
import { Tarefa } from "./criaTarefa.js";

export const carregaTarefa = () => {
    const lista = document.querySelector("[data-list]");
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || [];

    lista.innerHTML = " ";
    const datasUnicas = removeDatasRepetidas(tarefasCadastradas);
    ordenaDatas(datasUnicas);
    datasUnicas.forEach((tarefa) => {
        lista.appendChild(criaData(tarefa));        
    })

}