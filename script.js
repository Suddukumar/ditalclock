function clock(){
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let second = document.getElementById('second');
    let period = document.getElementById('period');

    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();


    let ampm=h >=12 ? "PM":"AM";


    hours.innerHTML = h;
    minutes.innerHTML = m;
    second.innerHTML = s;
    period.innerHTML = ampm;










};
setInterval(clock,1000);