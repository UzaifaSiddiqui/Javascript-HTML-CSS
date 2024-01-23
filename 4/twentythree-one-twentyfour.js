/*  
EVENT OBJECTS :
->It is a special object that has details about the events like its type , its target (element like div , button etc).

->All the event handlers have access to the event object's properties and method.

*/

let button = document.createElement("button");

let div = document.createElement("div");

let body = document.querySelector("body");

body.prepend(div);
div.setAttribute("class","square");
button.innerText="Button";
button.style.color = "whitesmoke";
button.style.backgroundColor = "black";
button.style.padding = "0";
div.prepend(button);

let mode = "light";
button.addEventListener("click",()=>{
    if (mode === "light"){
        body.style.backgroundColor = "black";
        mode = "black";
    }
    else{
        body.style.backgroundColor = "white";
        mode = "light";
    }
});

// First using addEventListner(node,callback) allow us to apply multiple functions on a target .

//