const daysEle = document.getElementById('days');
const hoursEle = document.getElementById('hours');
const minEle = document.getElementById('mins');
const secEle = document.getElementById('seconds');
const monthEle = document.getElementById('months')


const newYear='8 Jul 2022';

function countdown(){
    const newYearsDate=new Date(newYear);
    const cur_date=new Date();

    const total_seconds=Math.floor((newYearsDate-cur_date)/1000);

    const seconds=Math.floor(total_seconds)%60;
    const mins=Math.floor(total_seconds/60)%60;
    const hours=Math.floor(total_seconds/3600)%24;
    const days=Math.floor(total_seconds/(3600*24));
    const months=Math.floor((total_seconds)/(3600*24))%30;
    
    daysEle.innerHTML=days;
    hoursEle.innerHTML=hours;
    minEle.innerHTML=mins;
    secEle.innerHTML=seconds;
    monthEle.innerHTML=months;



    // console.log(days,hours,mins,seconds);

}


countdown();

setInterval(countdown,1000);