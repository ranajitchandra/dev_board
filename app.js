console.clear()

document.getElementById("rand-theme").addEventListener("click", function(e){
    const valueCode = "0123456789ABCDEF";
    let getColorCode = "#"
    for(i = 0; i<6; i=i+1){
        getColorCode = getColorCode + valueCode[Math.floor(Math.random() * 16)]
    }
    document.body.style.backgroundColor = getColorCode
})

const currentDate = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = days[currentDate.getDay()]
let date = currentDate.getDate().toString()
let month = months[currentDate.getMonth()]
let year = currentDate.getFullYear().toString()
document.getElementById("day-name").innerText = day
document.getElementById("date-view").innerText = `${date}-${month}-${year}`



let btn = document.querySelectorAll("#btn")
let totalTask = document.getElementById("total-task")
    totalTask.innerText = btn.length
    // console.log(totalTask.innerText = -1)
for(i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(e){
        e.target.classList.add("cursor-not-allowed", "bg-gray-200")
        e.target.classList.remove("hover:bg-blue-700")
        // console.log(e.target.parentNode.parentNode.childNodes[1].nextElementSibling.innerText)
        let h2Title = e.target.parentNode.parentNode.querySelector("h2").innerText
        // console.log( e.target.classList.length)
        for(j=0; j<e.target.classList.length; j++){
            // console.log(e.target.classList[j] === "bg-gray-200")
            if(e.target.classList[j] === "bg-gray-200"){
                totalTask.innerText =totalTask.innerText - 1
            }
        }
        
    })
}








