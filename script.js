// select everything that will be required!

const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".list");


// User intraction

const inputHandler = function (){

      const newTask= input.value;

      if(newTask.length==0){return;}
     
     const taskElem =  createElement(newTask);//create Element
     

      //append
      taskList.appendChild(taskElem);

      input.value = "";
       
      const deletebtn = taskElem.querySelector(".deletebtn");
       deletebtn.addEventListener("click",function (){
            taskElem.remove();
      });


      const editbtn = taskElem.querySelector(".editbtn");
      editbtn.addEventListener("click",function(){
            const newTask = prompt("Enter new task");
            taskElem.querySelector("li").innerText = newTask;
      })
      
}
button.addEventListener("click",inputHandler);

function createElement(newTask){

      const div = document.createElement("div");
      const list = document.createElement("li");
      const btn = document.createElement("button");
      const editBtn = document.createElement("button");

      btn.innerText="Delete";
      btn.classList.add("deletebtn");
      list.innerText=newTask;
      editBtn.innerText = "Edit";
      editBtn.classList.add("editbtn");

      div.appendChild(list);
      div.appendChild(editBtn);
      div.appendChild(btn);

      return div;

}
