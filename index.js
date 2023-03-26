
var randomNumber1 = Math.floor(Math.random()*6)+1;
var a="images/dice"+randomNumber1+".png";
var b=document.querySelectorAll("img")[0];
b.setAttribute("src",a);
    
    


var randomNumber2 =Math.floor(Math.random()*6+1);
var randomNumberSource2="images/dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomNumberSource2);

if(randomNumber1<randomNumber2){
    document.querySelector("h2").innerHTML="Player <strong>2nd</strong> win ";
}
if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML="Player <strong>1st</strong> win"
}
if(randomNumber1==randomNumber2){
    document.querySelector("h2").innerHTML="Draw!";
}