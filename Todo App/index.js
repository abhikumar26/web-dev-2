let todoArr = JSON.parse(localStorage.getItem("todo")) || []
let favArr = JSON.parse(localStorage.getItem("fav")) || []
document.querySelector("form").addEventListener("submit", getData)
displayTable(todoArr)

function getData(e) {
    e.preventDefault();
    const taskName = document.querySelector("#task").value
    const taskPriority = document.querySelector("#priority").value

    let taskObj = {
        taskName,
        taskPriority,
    }

    todoArr.push(taskObj);
    localStorage.setItem("todo", JSON.stringify(todoArr))
    displayTable(todoArr);
}
function displayTable(arr) {
    document.querySelector("tbody").innerText = ""
    arr.forEach((el, index) => {
        let row = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerText = el.taskName

        let td2 = document.createElement("td")
        td2.innerText = el.taskPriority

        let td3 = document.createElement("td")
        td3.innerText = "Add"
        td3.addEventListener("click", saveInLocal)
        if (el.taskPriority == "High") {
            td2.style.color = "red"
        } else {
            td2.style.color = "green"
        }
        let td4 = document.createElement("button")
        td4.innerText = "Delete"
        td4.addEventListener("click", clearData)
        
        function saveInLocal() {
            favArr.push(el)
            localStorage.setItem("fav", JSON.stringify(favArr))
            alert("Your task has been added to favourate!")
        }

        function clearData(){
            todoArr.splice(index, 1)
            localStorage.setItem("todo", JSON.stringify(todoArr))
            displayTable(todoArr)
        }

        row.append(td1, td2, td3, td4)
        document.querySelector("tbody").append(row)

    });
}