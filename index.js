var n1 =Math.floor(Math.random() *6) +1;
var add= "dice"+n1+ ".png";
document.querySelectorAll("img")[0].setAttribute("src" , add);

var n2= Math.floor(Math.random()*6) +1;
var a2="dice"+n2+".png";
document.querySelectorAll("img")[1].setAttribute("src", a2);

if(n1>n2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}

else if(n2>n1)
{
    document.querySelector("h1").innerHTML="Player 2 wins";
}  
else{
    document.querySelector("h1").innerHTML="Its a Draw!";
}
