function input(){
	var input=document.getElementById("name").value;
	if(input.length==0){
		document.getElementById("para").innerHTML="hey type something";
	}
	else{
		document.getElementById("para").innerHTML= input;	
	}
	
	
	
}