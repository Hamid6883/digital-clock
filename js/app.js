function dicplayTime() {
    let deteTime = new Date();
    let hrs = deteTime.getHours();
    let min = deteTime.getMinutes();
    let sec = deteTime.getSeconds();
    let munts = deteTime.getMonth();
    let day = deteTime.getDay();
    let years = deteTime.getFullYear();

    let section = document.getElementById('sesion');
    if (hrs >= 12) {
        section.innerHTML = "Pm";
    }else{
        section.innerHTML = "Am"
    }
    
    if (hrs>10) {
        hrs = hrs - 12;
    }
    

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('munth').innerHTML=munts;
    document.getElementById('day').innerHTML=day;
    document.getElementById('years').innerHTML=years;
}
setInterval(dicplayTime,10,3);