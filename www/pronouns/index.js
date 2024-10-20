function update_time(){
    update_clock_time();
    update_age();
}

function update_clock_time(){
    const clock = document.getElementById("clock");
    const date = new Date();
    clock.innerText = date.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', second: '2-digit',  timeZone: "Europe/Stockholm"});
}

function update_age(){
    const born = new Date("2004-04-24T02:31:00");
    const display = document.getElementById("age");
    const now = new Date();
    let year = now.getFullYear() - born.getFullYear();
    let month = now.getMonth() - born.getMonth();
    let day = now.getDay() - born.getDay();
    let hour = now.getHours() - born.getHours();
    let minute = now.getMinutes() - born.getMinutes();
    let second = now.getSeconds() - born.getSeconds();

    // Adjust for negative values
    if (second < 0) {
        second += 60;
        minute--;
    }
    if (minute < 0) {
        minute += 60;
        hour--;
    }
    if (hour < 0) {
        hour += 24;
        day--;
    }
    if (day < 0) {
        // days in the previous month
        let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        day += prevMonth;
        month--;
    }
    if (month < 0) {
        month += 12;
        year--;
    }

    display.innerText = year + " years, " + month + " months, " + day + " days, " + hour + " hours, " + minute + " minutes and " + second + " seconds old";


    if (born.getDay() === now.getDay() && born.getMonth() === now.getMonth()) {
        document.getElementById("age_years").innerText = year.toString();
        document.getElementById("birthday_div").style.display = "block";
    }

}


setInterval(update_time, 1000);