const time=document.getElementById("time");
const greeting=document.getElementById("greeting");
const name=document.getElementById("name");
const date=document.getElementById("date");
const backimage=document.getElementById("image");



function showtime(){
let today=new Date();
let hour=today.getHours();
let min=today.getMinutes();
let sec =today.getSeconds();
let todaydate=today.toDateString();
const wish=hour<12 ?(hour<5 ? 'Good Night' : 'Good Morning') : (hour<20 ? (hour<17 ? 'Good Afternoon' : "Good Evening") : 'Good Night');
greeting.innerHTML=wish;
//document.body.style.backgroundImage="url('images.jpg')";
document.body.style.backgroundImage=(wish=='Good Night'?"url('Night.jpg')" : wish=='Good Morning'? "url('morning.jpg')" : wish=='Good Afternoon' ? "url('Afternoon.jpg')" : "url('Evening.jpg')")



/*var img=document.createElement("img");
img.src="images.jpg";
var src = document.getElementById("image");
src.appendChild(img);*/
const amPm=hour>12 ? 'PM' : 'AM';
hour=hour%12 || 12;
time.innerHTML=`${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`
date.innerHTML=todaydate;

setTimeout(showtime,1000);

}

function addZero(n){
    return ((parseInt(n,10)<10 ?'0' : '')+n);
}
showtime();