
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-Container");
function addNote() {
    if (inputBox.value.trim() === "") {  
        alert("The Box should not be empty");
        return;
    } 

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");  
    span.innerHTML = "\u00d7"; 
    li.appendChild(span);

    inputBox.value = ""; 
    saveData();
}

// Add event listener for "Enter" key
inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // Check if Enter key is pressed
        addNote();
    }
});

// Click event for checking and deleting tasks
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Function to save data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load tasks from localStorage on page load
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
