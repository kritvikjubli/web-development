function check(){
var input=document.getElementById("space1").value;
if(input.length<5){
	document.getElementById("msg1").innerHTML="too short";
}
else{
	document.getElementById("msg1").innerHTML= input + "thats enough";
}
}