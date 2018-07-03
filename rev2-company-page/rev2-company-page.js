var itemIndex=4;
function addNewProject(){

	var div3 = document.createElement('div');
	div3.className = 'well';
	var txt = document.createTextNode("Project "+itemIndex);
	div3.appendChild(txt);


	var but = document.createElement('button');
	var txt = document.createTextNode("Open");
	but.setAttribute('class', 'c-button');
	but.setAttribute('onclick', 'fillDetails()');
	but.setAttribute('id','c'+itemIndex+'-button');
	but.appendChild(txt);


	var del = document.createElement('a');
	var txt = document.createTextNode(" Delete");
	del.setAttribute('href', '');
	del.setAttribute('onclick', "javascript:deleteProject('p' + itemIndex);");
	del.appendChild(txt);
	var center = document.createElement('center');
	center.appendChild(but);
	center.appendChild(del);


	var div2 = document.createElement('div');
	div2.className = 'profile-content';
	div2.appendChild(div3);
	div2.appendChild(center);

	var div1 = document.createElement('div');
	div1.className = 'col-sm-4';
	div1.id = 'p'+itemIndex;
	div1.appendChild(div2);

	var iDiv = document.getElementById('projects');
	iDiv.appendChild(div1);

	itemIndex++;
}
function fillDetails(){
	self.location = "project-plan-page.html";
}

function deleteProject(pro){
	var p = document.getElementById(pro);
	window.alert("pro")
	p.innerHTML= "";
}
