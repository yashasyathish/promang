//var path = require('path');
//var session = require('./usersession');
var itemIndex=2;
/*
 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      itemIndex = this.responseText;
	  window.alert(itemIndex);
    }
  };
  xhttp.open("GET", "/ind", true);
  xhttp.send(); 
  
$.get("/ind", function(string) {
    alert(string)
})*/

function newschedule(){
	

	var div3 = document.createElement('div');
	div3.className = 'schedule';
	div3.setAttribute("id", "sched"+itemIndex);
	document.getElementById('tabsched').appendChild(div3);
	
    var y = document.createElement("TR");
    //y.setAttribute("id", "myTr");
    div3.appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode("Tasks:");
	var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
	x.setAttribute("id", "task"+itemIndex);
	x.setAttribute("required", "");
    z.appendChild(t);
	z.appendChild(x);
    y.appendChild(z);

    var y1 = document.createElement("TR");
    //y.setAttribute("id", "myTr");
    div3.appendChild(y1);

    var z1 = document.createElement("TD");
    var t1 = document.createTextNode("Days");
	var x1 = document.createElement("INPUT");
	x1.setAttribute("required", "");
    x1.setAttribute("type", "number");
	x1.setAttribute("id", "days"+itemIndex);

    z1.appendChild(t1);
	z1.appendChild(x1);
    y1.appendChild(z1);	
	
	var y2 = document.createElement("TR");
    //y.setAttribute("id", "myTr");
    div3.appendChild(y2);

    var z2 = document.createElement("TD");
    var t2 = document.createTextNode("Start");
	var x2 = document.createElement("INPUT");
	x2.setAttribute("required", "");
    x2.setAttribute("type", "date");
	x2.setAttribute("id", "start"+itemIndex);
	
    z2.appendChild(t2);
	z2.appendChild(x2);
    y2.appendChild(z2);

	var y3 = document.createElement("TR");
    //y.setAttribute("id", "myTr");
    div3.appendChild(y3);

    var z3 = document.createElement("TD");
    var t3 = document.createTextNode("End");
	var x3 = document.createElement("INPUT");
	x3.setAttribute("required", "");
    x3.setAttribute("type", "date");
	x3.setAttribute("id", "end"+itemIndex);
    z3.appendChild(t3);
	z3.appendChild(x3);
    y3.appendChild(z3);

	var y4 = document.createElement("TR");
    //y.setAttribute("id", "myTr");
    div3.appendChild(y4);

    var z4 = document.createElement("TD");
    var t4 = document.createTextNode("Description");
	var x4 = document.createElement("INPUT");
	x4.setAttribute("required", "");
    x4.setAttribute("type", "textarea");
	x4.setAttribute("id", "desc"+itemIndex);
    z4.appendChild(t4);
	z4.appendChild(x4);
    y4.appendChild(z4);

	itemIndex++;
}
function fillDetails(){
}

function deleteschedule(){
var element = document.getElementById("sched"+itemIndex);
element.innerHTML = "";
window.alert(element.innerHTML)
element.parentNode.removeChild(element);
itemIndex--;
}

function createtimelie(){
var i,txt='',days='',sdate='',description='',date='';
//window.alert("tim"+itemIndex);
if(itemIndex>1)
{

for (i = 1; i < itemIndex; i++) { 
//window.alert(document.getElementById("task1").value);
txt=document.getElementById("task"+i).value;
days=document.getElementById("days"+i).value;
sdate=document.getElementById("start"+i).value;
date=document.getElementById("end"+i).value;
description=document.getElementById("desc"+i).value;
/*
 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      itemIndex = this.responseText;
	  window.alert(itemIndex);
    }
  };
var params="task="+txt+"&lname"+days+sdate+date
xhttp.open("POST", "ajax_test.asp", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send();
 */

description=document.getElementById("desc"+i).value;
//window.alert(txt,date,description);
	//window.alert("tim"+itemIndex)
	div=document.getElementById("tim");
	//window.alert(div.innerHTML)
	var li = document.createElement("li");
	li.className = "timeline-item";
	div.appendChild(li);

	
    var d1 = document.createElement("div");d1.className = 'timeline-badge';
	var i1 = document.createElement("i");i1.className = 'glyphicon glyphicon-check';
	d1.appendChild(i1);
	li.appendChild(d1);
	
	var d2 = document.createElement("div");d2.className = 'timeline-panel';
	li.appendChild(d2);
	var d3 = document.createElement("div");d3.className = 'timeline-heading';
	d2.appendChild(d3);
	var h = document.createElement("h4");h.className = 'timeline-title';
	var t = document.createTextNode(txt);
	var p = document.createElement("p");
	h.appendChild(t)
	d3.appendChild(h);
	var sm = document.createElement("small");
	sm.className = 'text-muted';
	p.appendChild(sm);
	d3.appendChild(p)
	var i = document.createElement("i");
	i.className = 'glyphicon glyphicon-time';
	sm.appendChild(i);
	var dat = document.createTextNode(date);
	sm.appendChild(dat);
	
	var d4 = document.createElement("div");d4.className = 'timeline-body';
	d2.appendChild(d4);
	var pa = document.createElement("p");
	var dat2 = document.createTextNode(description);
	pa.appendChild(dat2);
	d4.appendChild(pa)
	//window.alert(div.innerHTML)
	
}
}
}