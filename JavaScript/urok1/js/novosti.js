'use strict';
//alert("Hello, World!");


var divs = document.getElementsByTagName("div");
	document.getElementById('count').innerHTML='In the document there are '+divs.length+' tags \"div\"'
var n = 0;
for (var i=0; i<divs.length;i++){
	if(divs[i].hasAttribute('class')) n++;
}
document.getElementById('countAttr').innerHTML='From which the class has '+n;

function valid(){
	console.log("Function valid's on");
	var title = document.getElementById("title");
	var theme = document.getElementById("theme");
	var author = document.getElementById("author");
	var content = document.getElementById("content");
	var date = document.getElementById("date");
	var invalidTitle = document.getElementById("invalidTitle");
	var invalidTheme = document.getElementById("invalidTheme");
	var invalidAuthor = document.getElementById("invalidAuthor");
	var invalidContent = document.getElementById("invalidContent");
	var invalidDate = document.getElementById("invalidDate");
	var valid = true;

	if(title.value == ""){
		title.className+=" invalid";
		invalidTitle.className = "invalidP";
		valid = false;
	}else{
		title.className="form-control";
		invalidTitle.className = "none-invalid";
	}

	if(theme.value == ""){
		theme.className+=" invalid";
		invalidTheme.className = "invalidP";
		valid = false;
	}else{
		title.className="form-control";
		invalidTitle.className = "none-invalid";
	}

	if(author.value == ""){
		author.className+=" invalid";
		invalidAuthor.className = "invalidP";
		valid = false;
		//if (author.className==" invalid"){
		//	document.getElementById("invalidP").style.visibility='visible';
	}else{
		title.className="form-control";
		invalidTitle.className = "none-invalid";
	}

	if(content.value == ""){
		content.className+=" invalid";
		invalidContent.className = "invalidP";
		valid = false;
	}else{
		title.className="form-control";
		invalidTitle.className = "none-invalid";
	}


	if(genderP.value == " --your gender-- "){
		genderP.className+=" invalid";
		valid = false;
	}else{
		title.className="form-control";
		invalidTitle.className = "none-invalid";
	}



	alert("Hurray, You have published it!");
	return valid;

}
//function valid(){
	//if(title.class = "invalid")

var d = new Date();
	var date = document.getElementById("date");
		date.value = ("0" + d.getDate()).slice(-2)+"."+("0" + (d.getMonth() + 1)).slice(-2)+"."+d.getFullYear()+" -//- "+d.getHours()+":"+d.getMinutes()+":"+("0" + (d.getSeconds() + 1)).slice(-2);
//console.log(d);
//console.log(divs);

// var gender = new Array('male', 'female', 'Wish to be');
// var sel=document.getElementById('gender');
// for (var i=0; i <= gender.length; i++){
// 	if (0==i)sel.options[i]=new Option('','',true,false);  //
// 	sel.options[i]=new Option(gender[i-1],i-1,false,false);
// }

//	document.getElementById("date").innerHTML = d.getDate()+"."+d.getMonth()+"."+d.getFullYear()+" // "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

/*
valid(){
	var title=document.forms["My-Form"]['title'].value;
	if(title == null || title = ""){
		console.log("Empty title")
	}
}
*/
