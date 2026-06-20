<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sorry Sarkar ❤️</title>

<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Poppins',sans-serif;
height:100vh;
overflow:hidden;
background:linear-gradient(-45deg,#ff9a9e,#fad0c4,#ffd1ff,#ffc3a0);
background-size:400% 400%;
animation:bg 10s ease infinite;
display:flex;
justify-content:center;
align-items:center;
}

@keyframes bg{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}

.card{
width:90%;
max-width:450px;
padding:30px;
border-radius:25px;
background:rgba(255,255,255,.15);
backdrop-filter:blur(15px);
box-shadow:0 8px 32px rgba(0,0,0,.2);
text-align:center;
color:white;
}

h1{
font-family:'Great Vibes',cursive;
font-size:55px;
margin-bottom:15px;
text-shadow:0 0 15px #ff4d6d;
}

p{
font-size:22px;
font-weight:600;
}

button{
border:none;
padding:14px 35px;
margin:10px;
font-size:18px;
font-weight:bold;
border-radius:50px;
cursor:pointer;
transition:.3s;
}

#yesBtn{
background:#00c853;
color:white;
}

#noBtn{
background:#ff1744;
color:white;
}

#yesBtn:hover,
#noBtn:hover{
transform:scale(1.1);
}

.heart{
position:absolute;
color:red;
font-size:25px;
animation:float 6s linear forwards;
}

@keyframes float{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(-110vh);
opacity:0;
}
}

.balloon{
position:absolute;
bottom:-100px;
font-size:30px;
animation:balloon 8s linear forwards;
}

@keyframes balloon{
100%{
transform:translateY(-120vh);
opacity:0;
}
}

</style>
</head>
<body>

<div class="card" id="page1">

<h1>Assalamualaikum ❤️</h1>

<p>Click Below 👇</p>

<br>

<button onclick="startWebsite()">
Walikumassalam
</button>

</div>

<div class="card" id="page2" style="display:none;">

<h1>Sorry Sarkar ❤️</h1>

<p>Will You Accept My Sorry?</p>

<br>

<button id="yesBtn" onclick="thankYou()">
Yes ❤️
</button>

<button id="noBtn" onclick="growButton()">
No 😒
</button>

</div>

<div class="card" id="page3" style="display:none;">

<h1 style="font-size:65px;">
Thank You Sarkar ❤️
</h1>

<p>
You Made My Day 💖
</p>

</div>

<script>

function startWebsite(){

document.getElementById("page1").style.display="none";
document.getElementById("page2").style.display="block";

for(let i=0;i<25;i++){

let b=document.createElement("div");

b.className="balloon";

b.innerHTML="🎈";

b.style.left=Math.random()*100+"vw";

b.style.animationDuration=
(Math.random()*4+5)+"s";

document.body.appendChild(b);

}

}

let size=18;

function growButton(){

size+=10;

document.getElementById("yesBtn").style.fontSize=size+"px";

document.getElementById("yesBtn").style.padding=
(size/2)+"px "+size+"px";

}

function thankYou(){

document.getElementById("page2").style.display="none";

document.getElementById("page3").style.display="block";

}

setInterval(()=>{

let h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.bottom="0px";

document.body.appendChild(h);

setTimeout(()=>{
h.remove();
},6000);

},400);

</script>

</body>
</html>
