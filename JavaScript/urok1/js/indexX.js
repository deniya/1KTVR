'use strict';

//

function valid(){
	//alert ('hello');
	var login = document.getElementById("login");
	var pass = document.getElementById("pwd");
	if(login.value ==""){
		alert("You have not entered the login!");
		return false;
	}
	if(pass.value == ""){
		alert("You have not entered the password!");
		return false;
	}
	alert("Hurray, You can be authorized!");
	return true;

}

//var result = promt("test","Test");
//alert("Peremennaja result imeet zna4enie: "+result);
//var isAdmin = confirm ("Vq-admin?");
//alert(isAdmin);


//var a=1,b=1,c,d;
//c=++a; alert(c);	//2		++x[uveli4it na edinicu]
//d=b++; alert(d);	//1		x++[b kladetsja v d, potom pribavka edinicq]
//c=(2+ ++a); alert(c);	//5
//d=(2+ b++);alert(d)  //4

//var admin;
//var name;
//name = "Vasiliy";
//name = admin;
//admin = name;
//alert (admin); //->Vasiliy

//var num1=1;
//var num2="2";
//alert(num1 + +num2); //3

//var person{
//	name="Vasiliy",
//	surname="Abre",
//	age=25,
//	email=kadaver@gmail.com}
//alert(person.name +person.age +person.surname +person.email)
//alert(person.name);
//alert(person.surname);
//alert(person.email);
/*
var Persons[
	{name:"Vasiliy",
	family:"Petrov";
	adress1:{
		city:"J6hvi",
		street:"kooli",
		house:34}}
	{name:"Nikolay",
	family:"Sidorov",
	adress:{
		city:"Narva",
		street:"Pargi",
		house:23}}
]*/