var hour = document.querySelector(".hour");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var deg = 6;
setInterval(()=>{
    let day = new Date();
    let hr = day.getHours()*30;
    let mins = day.getMinutes()*deg;
    let secs = day.getSeconds()*deg; 

    hour.style.transform = `rotateZ(${(hr)+(mins/12)}deg)`;
    minutes.style.transform = `rotateZ(${mins}deg)`;
    seconds.style.transform = `rotateZ(${secs}deg)`;
})
