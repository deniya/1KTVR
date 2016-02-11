'use strict';


function getTable(data){
	var strTable='<table class="table1">';	//function for table creation with data

		strTable+="<tr class = 'trTable'>";
		strTable+='<th class = "tdId">ID';
		strTable+='</th><th class = "tdName">name';
		strTable+='</th><th class = "tdFamily">family';
		strTable+='</th><th class = "tdAge">age';
		strTable+='</th><tr>'

	for (var i =0; i<data.person.length; i++){
		strTable+="<tr class = 'trTable'>";
		strTable+='<td class = "tdId">'+data.person[i].id;
		strTable+='</td><td class = "tdName">'+data.person[i].name;
		strTable+='</td><td class = "tdFamily">'+data.person[i].family;
		strTable+='</td><td class = "tdAge">'+data.person[i].age;
		strTable+='</td><tr>'
	}
	strTable+='</table>';
	return strTable;
}


var xhr = new XMLHttpRequest();	//object for reference to outer resources
xhr.onload = function(){
	console.log(xhr.responseText);		//xhr.responseText -answer to the request is placed in here
	var data = JSON.parse(xhr.responseText);		//writing down the file's data into 'data'
	document.getElementById("json").innerHTML=getTable(data);	//showing table
};
xhr.open("GET","text.txt",true);	//method, resource, asynchronous/synchronous
xhr.send();					//sending request to mentioned resource



