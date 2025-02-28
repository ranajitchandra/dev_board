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











