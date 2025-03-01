console.clear();
// Random Theme
document.getElementById("rand-theme").addEventListener("click", function(e){
    const valueCode = "0123456789ABCDEF";
    let getColorCode = "#"
    for(i = 0; i<6; i=i+1){
        getColorCode = getColorCode + valueCode[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = getColorCode;
})
// date setup
const currentDate = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = days[currentDate.getDay()];
let date = currentDate.getDate().toString();
let month = months[currentDate.getMonth()];
let year = currentDate.getFullYear().toString();
document.getElementById("day-name").innerText = day;
document.getElementById("date-view").innerText = `${date}-${month}-${year}`;

// complete button action
let btn = document.querySelectorAll("#btn");
let totalTask = document.getElementById("total-task");
    totalTask.innerText = btn.length;
    
for(i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(e){
        const currentDate = new Date();
        let hour = currentDate.getHours().toString();
            hour = hour % 12;
        let amPM = hour >= 12 ? "PM" : "AM";
        let minute = currentDate.getMinutes().toString();
        let second = currentDate.getSeconds().toString();
        let time = `${hour}:${minute}:${second} ${amPM}`;
        e.target.classList.add("cursor-not-allowed", "bg-gray-200");
        e.target.classList.remove("hover:bg-blue-700");
        //_______________________________________
        e.target.setAttribute("disabled", true);
        // e.target.disabled = true
        //_______________________________________
        alert("Board Updated Successfully")

        // console.log(e.target.parentNode.parentNode.childNodes[1].nextElementSibling.innerText)
        let h2Title = e.target.parentNode.parentNode.querySelector("h2").innerText;
        for(j=0; j<e.target.classList.length; j++){
            if(e.target.classList[j] === "bg-gray-200"){
                totalTask.innerText = totalTask.innerText - 1;
                if(parseInt(totalTask.innerText) === 0){
                    alert("Congrats ! You have completed all the current task");
                }
                let = doneTaskList = parseInt(document.getElementById("done-task-list").innerText);
                document.getElementById("done-task-list").innerText = doneTaskList + 1;
                document.getElementById("parent-box").innerHTML += `
                <p class="bg-blue-50 p-3 my-2 rounded-md">You have completed the task
                    <span class="font-medium">${h2Title}</span> at <br> ${time}
                </p>
                `;
            }
        }
    })
}

document.getElementById("clean-history").addEventListener("click", function(){
    document.getElementById("parent-box").innerHTML = ""
})

document.getElementById("new-page").addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "./qs.html";
})



