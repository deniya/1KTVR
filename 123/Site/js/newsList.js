'use strict';

	var arTitle = new Array();
	var arTheme = new Array();
	var arAuthor = new Array();
	var arContent = new Array();
	var arDate = new Array();

	var Table = "<div><table id='arTable'><th>Header</th>;  //to4no li snaruzhi dolzno bqt'?
	for (var i =0; i < ar.length; i++){
		Table+= "<tr>";
		Table+= "<td>"+arTitle[i];
		Table+= "</td>";
		Table+= "<th>Theme</th>";
		Table+= "<td>"+arTheme[i];
		Table+= "</td>";
		Table+= "</tr>";
		Table+= "<tr>";
		Table+= "<th>Date</th>";
		Table+= "<td>"+arDate[i];
		Table+= "</td>";
		Table+= "<th>Author</th>";
		Table+= "<td>"+arAuthor[i];
		Table+= "</td>";
		Table+= "</tr>";
	}
	Table+= "</table>";

	var Table = "<table class='tableContent' frame:'below'>";
	for (var i =0; i < ar.length; i++){
		Table+= "<tr class='contentFull'>";
		Table+= "<th class='contentHead'>";
		Table+= "</th>";
		Table+= "<td>"+arContent[i];
		Table+= "</td>";
		Table+= "</tr>";

	Table+= "</table>";
	Table+= "</div>";


	var Table=getElementById('Table');
		Table.innerHTML=Table;

/*
	var str = '<table>';
	for (var i=0; i<ar.length;i++){
		str+='<tr>';
		str+='<td>'+mos1[i]+'</td>';
		str+='<td>'+mos2[i]+'</td>';
		str+='<tr><td>'+mos3[i]+'</td>';
		str+='<td>'+mos4[i]+'</td></tr>';
	}
		str+='</table>';
*/