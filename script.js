//your JS code here. If required.

 document.addEventlistner("DOMContentLoded", () => {
	 document.getelementById("btn").addEventListner(("Click", (e) => {
		 e.preventDefault();
const firstName = document.getElementById("firstname").value;
const secondName =document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const phoneNumber = document.getElementById("phonenumber").value;
https://www.svgrepo.com/show/345221/three-dots.svg
		const message = (`FirstName:${firstName}\n LastName:${last} \n Email:${email}\n PhoneNumber:${number}`); 
	aleart(message);
	 });					  
