

document.getElementById("submit").onclick = function() {myFunction()};
function myFunction() {

var firstName = document.getElementById("fname").value;
var lastName = document.getElementById("lname").value;
var email=document.getElementById("email").value;
var re = /\S+@\S+\.\S+/;
var password=document.getElementById("pswd").value;
var mob=document.getElementById("ph_no").value;
var letters = /^[789]\d{9}$/;
var dob=document.getElementById("dob").value;
var gender=document.getElementById("gender");
var strGen=gender.options[gender.selectedIndex].value;
var city=document.getElementById("city");
var strCity=city.options[city.selectedIndex].value;
var pin=document.getElementById("pin").value;
var pattern= /^([0-9](6,6))+$/;
var aadhar=document.getElementById("aadhar").value;
																																																																																																		
if  (firstName == ''){
	
		document.getElementById("status1").innerHTML="Plase enter Your first Name..!"; 
	
		return; 	
	
	}else {
	
		document.getElementById("status1").innerHTML=""; 
	
	}
	
	if(/\d/.test(firstName)){
	
		document.getElementById("status1").innerHTML="Please Enter Characters Only!";
		return; 		
	}
	
	if(lastName==""){
		document.getElementById("status11").innerHTML="Please enter your last name..!";
		return;
		}else{
		document.getElementById("status11").innerHTML="";
		}


	
	if(email==""){	
	document.getElementById("status2").innerHTML="Please Enter Email-id!";
	return;
	}
	
	if(!/\S+@\S+\.\S+/.test(email)){
	document.getElementById("status2").innerHTML="Please Enter valid E-mail id!";
	return;
	}else{
	document.getElementById("status2").innerHTML="";
	}
	
	if(password==""){
	document.getElementById("status3").innerHTML="Please Enter Password!";
	return;
	}else if(password.length<=5){
		document.getElementById("status3").innerHTML="Password-min 6  Characters!";
	return;
	}else{
	document.getElementById("status3").innerHTML="";
	}
	
	if(mob==""){
	document.getElementById("status4").innerHTML="Please enter Min 10-digit mobile number!";
	return;
	}else if(!letters.test(mob)){
		document.getElementById("status4").innerHTML="Please enter valid mobile number!";
		return;
	}else{
	document.getElementById("status4").innerHTML="";
	}
	
	if(dob==""){
	document.getElementById("status5").innerHTML="Please select Date of Birth..!";
	return;
	}else{
	document.getElementById("status5").innerHTML="";
	}
	if(strGen==0){
	document.getElementById("status6").innerHTML="Please Select Gender..!";
		return; 
	}else{document.getElementById("status6").innerHTML="";}
	
	
	
	if(strCity==0){
	document.getElementById("status7").innerHTML="Please Select your City..!";
		return; 
	}else{
	document.getElementById("status7").innerHTML="";
	}
	
	
	if(pin==""){
	document.getElementById("status8").innerHTML="Please enter pincode..!";
	return; 		
	}else{
	document.getElementById("status8").innerHTML="";	
	}
	
	if(aadhar==""){
	document.getElementById("status9").innerHTML="Please enter your Aadhar Number..!";
	return; 		
	}else if(aadhar.length<=11){
		document.getElementById("status9").innerHTML="Please enter 12 digit Aadhar Number..!";
		return;
	}else{
	document.getElementById("status9").innerHTML="";
	}
	
	alert("FIRST NAME: "+firstName+"     "+"\n"+"LAST NAME: "+lastName+"     "+"\n"+"Email: "+email+"                  "+"\n"+"PASSWORD: "+"*******"+"     "+"\n"+"MOBILE NO: "+mob+"         "+"\n"+"DATE OF BIRTH: "+dob+"        "+"\n"+"GENDER: "+strGen+"      "+"\n"+"CITY: "+strCity+"         "+"\n"+"PINCODE: "+pin+"        "+"\n"+"AADHAR NO: "+aadhar+"                     ");
}
	

