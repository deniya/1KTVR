'use strict';

//var primaryHeadings = document.getElementsByTag('h1');
//var ou812 = document.getElementById('eddie');
var objSel = document.getElementById("mySelectId");

var objSel = document.getElementById("mySelect");

//Создаем новый объект Option и заносим его в коллекцию options
objSel.options[0] = new Option("Строка списка 0", "str0");
objSel.options[1] = new Option("Строка списка 1", "str1");
objSel.options[2] = new Option("Строка списка 2", "str2");

objSel.options[objSel.options.length] = new Option("текст", "значение");

objSel.options.length=1; //добавляем в конец списка пустой элемент
objSel.options[0].text = "Строка списка 0";
objSel.options[0].value = "str0";

var newOpt = new Option("text", "value", isDefaultSelected, isSelected);

function addOption (oListbox, text, value, isDefaultSelected, isSelected)
{
  var oOption = document.createElement("option");
  oOption.appendChild(document.createTextNode(text));
  oOption.setAttribute("value", value);

  if (isDefaultSelected) oOption.defaultSelected = true;
  else if (isSelected) oOption.selected = true;

  oListbox.appendChild(oOption);
}

var objSel = document.getElementById("mySelect");
addOption(objSel, "текст", "значение", true);

var text  = objSel.options[2].text;
var value = objSel.options[2].value;

objSel.options[1].text = "Новый текст";
objSel.options[1].value = "новое значение";

objSel.options[2] = new Option("Новый текст", "новое значение");//полная замена элемента на новый

if ( objSel.selectedIndex != -1)
{
  //Если есть выбранный элемент, отобразить его значение (свойство value)
  alert(objSel.options[objSel.selectedIndex].value);
}

function getSelectedIndexes (oListbox)
{
  var arrIndexes = new Array;
  for (var i=0; i < oListbox.options.length; i++)
  {
      if (oListbox.options[i].selected) arrIndexes.push(i);
  }
  return arrIndexes;
};

