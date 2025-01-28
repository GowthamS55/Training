const inputBox = document.getElementById('input-box'); 
const listContainer = document.getElementById('list-container');
function addValue() {
    if (inputBox.value === '') {
        alert("Write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value='';
       

        let button = document.createElement("button")
        button.innerHTML="Remove";
        button.onclick = function() {
            listContainer.removeChild(li);
        };
        li.appendChild(button);
    }
}
