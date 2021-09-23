var akanGender = [
    {
        "Sunday": "Kwasi",
        "Monday": "Kwadwo",
        "Tuesday": "Kwabena",
        "Wednesday": "Kwaku",
        "Thurday": "Yaw",
        "Friday": "Kofi",
        "Saturday": "Kwame"
    },
    {
        "Sunday": "Akosua",
        "Monday": "Adwoa",
        "Tuesday": "Abenaa",
        "Wednesday": "Akua",
        "Thurday": "Yaa",
        "Friday": "Afua",
        "Saturday": "Ama"

    }
]

var weekDayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
var colorIndex = 0;

function changeBackgroundColor() {
    var doc = document.getElementsByTagName("BODY")[0];
    var color = ["#49599a", "#883997", "#0069c0", "#75a478", "#00867d", "#087f23"];
    doc.style.backgroundColor = color[colorIndex];
    colorIndex = (colorIndex + 1) % color.length;

}
setInterval(changeBackgroundColor, 2000);

