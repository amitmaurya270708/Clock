let hour;
let min;
let sec;
let ampm;

setInterval(function () {
  const date = new Date();
  hour = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
  ampm = hour >= 12 ? 'PM':'AM';

  if(hour >= 12) hour = hour % 12 || 12;
  let formatHour = formatDate(hour);
  let formatMinute = formatDate(min);
  let formatSecond = formatDate(sec);

  document.getElementById("txthour").innerHTML = formatHour;
  // console.log("hiii");
  document.getElementById("txtmin").innerHTML = formatMinute;
  document.getElementById("txtsec").innerHTML = formatSecond;
  document.getElementById("cat").innerHTML = ampm;
}, 1000);

function formatDate(num){
    if(num < 10) return '0'+String(num);
    return num;
}