var x = 0
var y = 0
//Number of times either of the functions has been executed
function AddRowFunction() {
    var table = document.getElementById("table1");
    var row = table.insertRow(2+x);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var yourSelect = document.getElementById( "selectBox" );
	x++ //Next row will be added below this one

    cell1.innerHTML = yourSelect.options[ yourSelect.selectedIndex ].value;
    cell2.innerHTML = "[Value]";
    cell3.innerHTML = "[Change]";
    cell4.innerHTML = '<input type = "button" value = "X" onclick = "deleteRow(this)">';
}

function AddRowFunction1(){
	var yourSelect = document.getElementById( "selectBox" );
	var option = document.createElement("option");
		option.value = yourSelect.options[ yourSelect.selectedIndex ].value;
		option.text = yourSelect.options[ yourSelect.selectedIndex ].value;
		//the option would be the one selected on selectBox
	//alert(option.value)
	
	if (!(option.value = "Fundamentals")) {
		var table = document.getElementById("table1");
		var row = table.insertRow(2+x);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		x++ //Next row will be added below this one

		cell1.innerHTML = '<select id = "selectBox0" onclick = "AppendOptions1(this)" onchange = >';
		cell2.innerHTML = "[Value]";
		cell3.innerHTML = "[Change]";
		cell4.innerHTML = '<input type = "button" value = "X" onclick = "deleteRow(this)">';

		selectBox0.appendChild(option);
		//Create and append the selected option
		
		var newId = "selectBox" + x ;
		//This will be the Id for the selectBox in row
		document.getElementById("selectBox0").id = newId
		//Give select box a new id
	}
}

var executed = false
function AppendOptions(){
	if (!(executed)){
		var array = ["Assets","Book Value","Capital Expenditures","Cash","Cost of Good Sold","DPS","EPS Base","EPS Diluted","Float Shares","Good Will","Income After Tax","Income Before Tax","Institutional Own","Inventory","Liability","Long Term Debt","Net Income","Number of Employees","Operating Cash Flow","Operating Income","Revenue","Short Term Debt","Total Operating Expense"];
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

function AppendOptions1(me){
		
	//if (me.length = 1) {
		var array = ["Assets","Book Value","Capital Expenditures","Cash","Cost of Good Sold","DPS","EPS Base","EPS Diluted","Float Shares","Good Will","Income After Tax","Income Before Tax","Institutional Own","Inventory","Liability","Long Term Debt","Net Income","Number of Employees","Operating Cash Flow","Operating Income","Revenue","Short Term Debt","Total Operating Expense"];
		//Create array of options to be added
		for (var i = 0; i < array.length; i++) {
			var option = document.createElement("option");
			option.value = array[i];
			option.text = array[i];
			me.appendChild(option);
			//Create and append the options
		}//Add options to select list using arrays
		me.remove(0)
	//}
	//alert(me.length)
}


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table1").deleteRow(i);
	x--
	//for "x", please see above
	executed1=false
	//
}