"use strict";
const input = document.getElementById("input");
const addbtn = document.getElementById("addbtn");
const list = document.getElementById("list");
addbtn.addEventListener("click", function(){
    const newtask = input.value.trim();
    if (newtask == "") return;
    const li = document.createElement("li");
    li.className = "todorow";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "todobox";
    const span = document.createElement("span");
    span.className = "todotext";
    span.textContent = newtask;
    const del = document.createElement("button");
    del.type = "button";
    del.textContent = "Delete";
    del.innerHTML = "❌";
    check.addEventListener("change", function(){
        li.classList.toggle("done", check.checked);
    });
    del.addEventListener("click", function(){
        list.removeChild(li);
    });
    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(del);
    list.appendChild(li);
    input.value = "";
    input.focus();
});

