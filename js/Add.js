function AddRowFunction() {
    var table = document.getElementById("table1");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var yourSelect = document.getElementById( "selectBox" );
    

    cell1.innerHTML = yourSelect.options[ yourSelect.selectedIndex ].value;
    cell2.innerHTML = "[Value]";
    cell3.innerHTML = "[Change]";
    cell4.innerHTML = '<input type="button" value="X" onclick="deleteRow(this)">';
}
function AddRowFunction1(){
	var table = document.getElementById("table1");
	var row = table.insertRow(2);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var mySelect
	cell1.innerHTML = "[mySelect]";
	cell2.innerHTML = "[Value]";
	cell3.innerHTML = "[Change]";
	cell4.innerHTML = '<input type="button" value="X" onclick="deleteRow(this)">';
	
	var myDiv = document.getElementById("mySelect");
	var array = ["Volvo","Saab","Mercades","Audi"];//Create array of options to be added

	selectList = document.createElement("select");
	selectList.id = "mySelect";
	myDiv.appendChild(selectList);//Create and append select list
	
	for (var i = 0; i < array.length; i++) {
		var option = document.createElement("option");
		option.value = array[i];
		option.text = array[i];
		selectList.appendChild(option);//Create and append the options
}
}

var executed = false
function AppendOptions(){
	if (!(executed)){
		var array = ["Earnings","Volume","Daily Volume","Forward Earnings"];
		//Create array of options to be added
		for (var i = 0; i < array.length; i++) {
			var option = document.createElement("option");
			option.value = array[i];
			option.text = array[i];
			selectBox.appendChild(option);
			//Create and append the options
		}/*Add options to select list using arrays*/
		executed = true
	}/* Only execute if not already executed */
}