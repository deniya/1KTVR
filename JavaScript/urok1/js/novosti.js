'use strict';
//alert("Hello, World!");
function valid(){
	var title = document.getElementById("title");
	var theme = document.getElementById("theme");
	var author = document.getElementById("author");
	var content = document.getElementById("content");
	var date = document.getElementById("date");

	if(title.value == ""){
		alert("You have not entered the title line!");
		return false;
	}
	if(theme.value == ""){
		alert("You have not entered the theme line!");
		return false;
	}
	if(author.value == ""){
		alert("You have not entered the author line!");
		return false;
	}
	if(content.value == ""){
		alert("You have not entered the content line!");
		return false;
	}
		
	alert("Hurray, You have published it!");
	return true;

}
var d = new Date();
	//document.getElementById("date").innerHTML = d.toDateString();
	document.getElementById("date").innerHTML = d.getDate()+"."+d.getMonth()+"."+d.getFullYear()+" // "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

