
let add_task = document.querySelector(".add-task");
let task_input = document.querySelector(".task-input");
let tasks = [
    
];

// EVENT LISTENER FOR ADD TASKA ( FIRST STEP STARTS FROM HEAR )
add_task.addEventListener("click", () => {
    let data = task_input.value;
    if (data.trim() !== "") {  
        tasks.push(data);
    }
    display_task();
});

//TO DISPLAY ALL TASKS
function display_task() {
    let ul = document.querySelector(".footer ul");
    ul.innerHTML = "";

    if(tasks.length >= "1"){
        for (let i = 0; i <= tasks.length - 1; i++) {
            let li = document.createElement("li");
            let p = document.createElement("p");
           
            let idx_box = document.createElement("div");
            idx_box.classList.add("idx-box");
    
            let del_box = document.createElement("div");
            del_box.classList.add("del-box");
            del_box.setAttribute("onClick", `delete_task(${i})`);
            
            del_box.innerHTML = `<svg class="del-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" fill="#ffffff" viewBox="0 0 24 24">
                                <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                                </svg>`;
            
            idx_box.innerHTML = `${i+1}`;
            li.appendChild(idx_box);
            li.appendChild(del_box);
            p.innerText = tasks[i];
            li.appendChild(p);
    
            ul.appendChild(li);
            task_input.value = "";
            
        }
    }else{
        setTimeout(()=>{
            alert("NO TASK AVALABLE!");
        }, 100 )
    }

}

//TO DELETE APERTICULAR TASKS
function delete_task(I) {
    console.log("Deleting task at index:", I);

        if (I >= 0 && I < tasks.length) {
            tasks.splice(I, 1);
            display_task(); 
        } else {
            console.log("Index out of bounds.");
        }

}

// TO DELETE ALL TASKS
let delete_all = document.querySelector(".delete-all")
delete_all.addEventListener("click" , ()=>{
    if(confirm("Are you sure you want to do this?")){
        tasks = [];
        display_task();
    }
})