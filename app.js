let dobirth = document.getElementById("dob");
let days = document.getElementById("days");
let months = document.getElementById("months");
let years = document.getElementById("years");
let error = document.getElementsByClassName("error");
days.innerHTML = 0;
years.innerHTML = 0;
months.innerHTML = 0;

//funtion to calculate age
function calculatingAge() {
    let tDay = new Date();
    let todayDate = tDay.toLocaleDateString('zh-Hans-CN');
    //spliting
    let dobirthSplit = dobirth.value.split("-");
    let todaySplit = todayDate.split("/");

    //converting both values to numbers
    let dob = dobirthSplit.map((str) => {
        return parseInt(str);
    })
    let today = todaySplit.map((str) => {
        return parseInt(str);
    })
    let day ;
    let month ;
    let year ;
    if (today[2] < dob[2]) {
        if (today[1] == 1 || today[1] == 3 || today[1] == 5 || today[1] == 7 || today[1] == 8 || today[1] == 10 || today[1] == 12) {
            let todayAdd = today[1] + 31;
            day = todayAdd - dob[2];
            let monthValue = today[1] - 1;
            if (monthValue < dob[2]) {
                let monthAdd = monthValue + 12;
                month = monthAdd - dob[1];
                let yearValue = today[0] - 1;
                year = yearValue - dob[0];
            }
            else {
                month = today[1] - dob[1];
                year = today[2] - dob[2];
            }
        }
        else if (today[1] == 2) {
            let todayAdd = today[1] + 28;
            day = todayAdd - dob[2];
            let monthValue = today[1] - 1;
            if (monthValue < dob[2]) {
                let monthAdd = monthValue + 12;
                month = monthAdd - dob[1];
                let yearValue = today[0] - 1;
                year = yearValue - dob[0];
            }
            else {
                month = today[1] - dob[1];
                year = today[2] - dob[2];
            }
        }
        else {
            let todayAdd = today[1] + 31;
            day = todayAdd - dob[2];
            let monthValue = today[1] - 1;
            if (monthValue < dob[2]) {
                let monthAdd = monthValue + 12;
                month = monthAdd - dob[1];
                let yearValue = today[0] - 1;
                year = yearValue - dob[0];
            }
            else {
                month = today[1] - dob[1];
                year = today[2] - dob[2];
            }
        }
    }
    else {
        day = today[2] - dob[2];
        month = today[1] - dob[1];
        year = today[0] - dob[0];
    }
    if (year < 0 ) {
        error[0].style.display = "block";
        years.innerHTML = 0;
        months.innerHTML = 0;
        days.innerHTML = 0;
    }
    else if(year >= 0) {
        years.innerHTML = year;
        months.innerHTML = month;
        days.innerHTML = day;
        error[0].style.display = "none";

    }
    else{
        years.innerHTML = 0;
        months.innerHTML = 0;
        days.innerHTML = 0;
        error[0].style.display = "none";
    }
    
}

dobirth.addEventListener('change', () => {
    calculatingAge();
})