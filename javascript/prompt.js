function hello(){
var name = prompt ("please enter your name");
if (name.length!=0){
document.getElementById("char").innerHTML="hello" + name + "how are you today";
}
else{
	alert("type your name");
}
}