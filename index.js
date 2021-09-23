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

function validateForm() {
    var gender = document.getElementsByName("gender");
    var date = document.getElementById("date");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var formValid = false;
    var i = 0;
    document.getElementById("result").innerHTML = "";
    if (date.value == "" || date.value == null) {

        document.getElementById("result").innerHTML += "Date can't be blank!";
        document.getElementById("result").style.color = 'red';

        date.style.border = "2px solid red";
        return false;
    } else {
        date.style.border = "";
        if (!isNaN(date.value)) {
            if (date.value <= 0 || date.value > 31) {
                document.getElementById("result").innerHTML += "Invalid Date";
                document.getElementById("result").style.color = 'red';

                date.style.border = "2px solid red";
                return false;
            }
        } else {
            document.getElementById("result").innerHTML += "Day must be a number";
            document.getElementById("result").style.color = 'red';

            date.style.border = "2px solid red";
            return false;
        }
    } else {
            document.getElementById("result").innerHTML += "Date must be a number";
            document.getElementById("result").style.color = 'red';

            mdate.style.border = "2px solid red";
            return false;
        }
    }
    if (month.value == "" || month.value == null) {
        document.getElementById("result").innerHTML += "Month is can't be blank";
        document.getElementById("result").style.color = 'red';
        month.style.border = "2px solid red";
        return false;
    } else {
        month.style.border = "";
        if (!isNaN(month.value)) {
            if (month.value <= 0 || month.value > 12) {
                document.getElementById("result").innerHTML += "Invalid Month";
                document.getElementById("result").style.color = 'red';

                month.style.border = "2px solid red";
                return false;
            }
        } else {
            document.getElementById("result").innerHTML += "Month must be a number";
            document.getElementById("result").style.color = 'red';

            mmonth.style.border = "2px solid red";
            return false;
        }
    }
    if (year.value == "" || year.value == null) {
        document.getElementById("result").innerHTML += "Year is Required";
        document.getElementById("result").style.color = 'red';
        year.style.border = "2px solid red";
        return false;
    } else {
        year.style.border = "";
        if (!isNaN(year.value)) {
            if (year.value.length != 4) {
                document.getElementById("result").innerHTML += "Invalid Year";
                document.getElementById("result").style.color = 'red';

                year.style.border = "2px solid red";
                return false;
            }
        } else {
            document.getElementById("result").innerHTML += "Year must be a number";
            document.getElementById("result").style.color = 'red';

            year.style.border = "2px solid red";
            return false;
        }
    }
    while (!formValid && i < gender.length) {
        if (gender[i].checked)
            formValid = true;
        i++;
    }
    if (!formValid) {
        document.getElementById("the-gender").style.color = 'red';
        return false;
    }


    return formValid;
}

function getUserDetails() {
    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var gender = document.getElementsByName("gender");

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            var GenderValue = gender[i].value;
    }

    var userDetails = {
        date: date,
        month: month,
        year: year,
        myGenderValue: GenderValue,

    }

    return userDetails;
}

    function aggregateFunctions() {
        var formValid = validateForm();
    
        if (!formValid) {
            validateForm();
            return false;
        } {
            getUserDetails();
            verifyUserBirthday();
            findUserAkanName();
            printUserAkanName();
            return false;
    
        }
    }
    
        function verifyUserBirthday() {
        var userDetailsObject = getUserDetails();
        date = userDetailsObject.date;
        month = userDetailsObject.month;
        year = userDetailsObject.year;
    
        var a = Math.floor((14 - month) / 12);
        var y = year - a;
        var m = month + 12 * a - 2;
        dayOfWeek = (date + y + Math.floor(y / 4) - Math.floor(y / 100) +
            Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
    
        return dayOfWeek;
    
    }
    
    function findUserAkanName() {
        var userDetailsObject = getUserDetails();
        mGender = userDetailsObject.myGenderValue;
        userWeekDayIndex = verifyUserBirthday();
    
    
        var dayOfTheWeek = weekDayArray[userWeekDayIndex];
        // alert(dayOfTheWeek);
    
        if (mGender === "male") {
    
            var akanGenderObject = akanGender[0];
    
            for (var key in akanGenderObject) {
                if (akanGenderObject.hasOwnProperty(key)) {
                    if (key === dayOfTheWeek) {
                        akanName = akanGenderObject[key];
                    }
                }
            }
            // alert(akanName);
        } else if (Gender === "female") {
            var akanGenderObject = akanGender[1];
    
            for (var key in akanGenderObject) {
                if (akanGenderObject.hasOwnProperty(key)) {
                    if (key === dayOfTheWeek) {
                        akanName = akanGenderObject[key];
                    }
                }
            }
        } else {
            alert("Error occured!");
        }
    
        var importantDetails = {
            akanName: akanName,
            dayOfTheWeek: dayOfTheWeek,
            mGender: mGender
    
    
        }
        return importantDetails;
    
    }
    function printUserAkanName() {
        // clearInterval(changeBackgroundColor);
        var akanDetails = findUserAkanName();
        akanName = akanDetails.akanName;
        dayOfTheWeek = akanDetails.dayOfTheWeek;
        mGender = akanDetails.mGender;
    
        var doc = document.getElementsByTagName("BODY")[0];
        doc.style.backgroundImage = "url('https://codemyui.com/wp-content/uploads/2016/07/flying-birds-animation-using-three_js-1.gif')";
        doc.style.backgroundColor = "#f08a2d";
        doc.style.backgroundRepeat = "no-repeat";
        doc.style.backgroundSize = "cover";
    
    
        document.getElementById("mheading").innerHTML = "Congratulations!";
        document.getElementById("myAkan").innerHTML = "Hurray! We found it.Your Akan name is  " + akanName;
        document.getElementById("reason").innerHTML = 'Since, You are a ' + mGender + ' born on ' + dayOfTheWeek;
        document.getElementById("myAkan").style.textDecoration = "underline overline";
        document.getElementById("myAkan").style.color = '#6e2c00';
        document.getElementById("myAkan").style.fontSize = '45px';
    
    
    }
    
    function clearInput() {
        window.location.reload();
    }