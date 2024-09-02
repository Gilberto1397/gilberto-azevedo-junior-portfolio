// função para adicionar a tarefa
function addtask() {
    //titulo da tarefa
    const tasktitle = document.querySelector("#task-title").value; // aqui estamos pegando o valor que é posto no input <=======

    if(tasktitle) {
        //Clona o template
        const template = document.querySelector(".template");
        
        const newTask = template.cloneNode(true);

        //adiciona o titulo
        newTask.querySelector(".task-title").textContent = tasktitle;

        //Remover as classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adiciona a tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this); // aqui o this foi bem usado para de fato referênciar o botao
        })

        // adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this)
        })

        //limpando o texto
        document.querySelector("#task-title").value = "";
    }
}


//função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true); 
}

//Função de completar a tarefa
function completeTask(task) {
const taskComplete = task.parentNode;

taskComplete.classList.toggle("done");  // aqui o toggle está verificando se está com a classe, se não tiver ele coloca e se tiver ele tira

}

//Evento de adicionar tarefa
const addbtn = document.querySelector("#add-btn");

addbtn.addEventListener("click", function(e) {

    e.preventDefault(); //fará com que o formulário não seja submit e use a resposta numa ação de JS

    addtask();
});