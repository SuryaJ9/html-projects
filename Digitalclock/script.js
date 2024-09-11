const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampEl = document.getElementById("am");

function updateClock()
{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12)
    {
        h = h - 12;
        ampm = "pm";
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampEl, (innerText = ampm);

setTimeout(()=>
    {
    updateClock();
},1000);
}
updateClock();