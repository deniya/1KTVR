/*if email="":
	alert("Vvedite email!");

if pwd="";
	alert("Vvedite parol!");*/

'use strict';



function valid(){
	var title = document.getElementById("title");
	var theme = document.getElementById("theme");
	var author = document.getElementById("author");
	var content = document.getElementById("content");
	var date = document.getElementById("date");

	if(title.value ==""){
		alert("You have not entered the title!");
		return false;
	}
	if(theme.value == ""){
		alert("You have not entered the theme!");
		return false;
	}
	if(author.value == ""){
		alert("You have not entered the author!");
		return false;
	}
	if(content.value == ""){
		alert("You have not entered the content!");
		return false;
	}
	if(date.value == ""){
		alert("You have not entered the date!");
		return false;
	}
	var d = new Date();
	//document.getElementById("demo").innerHTML = d.toDateString();
	document.getElementById("date").innerHTML = d.getDate()+"."+d.getMonth()+d.getFullYear()+" / "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();


	alert("Hurray, You have published it!");
	return true;

}