function clock(){
const fullDate = new Date()
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();
if(hour < 10){
    hours = '0'+ hours
}

if(mins < 10){
    mins = '0'+ mins
}

if(secs < 10){
    secs = '0'+ secs
}

document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ':'+ mins;
document.getElementById('second').innerHTML = ':'+ secs;

}
setInterval(clock, 100)


function date(){
    const fullDate = new Date();
    var day = fullDate.getDate();
    var month = fullDate.getMonth();
    var year = fullDate.getFullYear();

    if(month <= 10){
        month = 11
    }else {
        month = 12
    }
    

    document.getElementById('day').innerHTML =  day;
    document.getElementById('month').innerHTML = ':'+ month;
    document.getElementById('year').innerHTML = ':'+ year;
    
}
setInterval(date)

