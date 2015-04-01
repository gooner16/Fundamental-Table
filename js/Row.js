var x = 0
var y = 0
var arrayExe = [true]
//Number of times either of the functions has been executed

/*function AppendOptions(){
	if (!(executed0)) {
		var array = ["Assets","Book Value","Capital Expenditures","Cash","Cost of Good Sold","DPS","EPS Base","EPS Diluted","Float Shares","Good Will","Income After Tax","Income Before Tax","Institutional Own","Inventory","Liability","Long Term Debt","Net Income","Number of Employees","Operating Cash Flow","Operating Income","Revenue","Short Term Debt","Total Operating Expense"];
		//Create array of options to be added
		for (var i = 0; i < array.length; i++) {
			var option = document.createElement("option");
			option.value = array[i];
			option.text = array[i];
			selectBox.appendChild(option);
			//Create and append the options
		}/*Add options to select list using arrays*/
		//executed0 = true;
	//}/* Only execute if not already executed */
//}


function AppendOptions1(me,ind){
	if (!(arrayExe[ind])) {
		me.remove(0);
		//Remove first option of selectbox
		var array = ["Assets","Book Value","Capital Expenditures","Cash","Cost of Good Sold","DPS","EPS Base","EPS Diluted","Float Shares","Good Will","Income After Tax","Income Before Tax","Institutional Own","Inventory","Liability","Long Term Debt","Net Income","Number of Employees","Operating Cash Flow","Operating Income","Revenue","Short Term Debt","Total Operating Expense"];
		//Create array of options to be added
		for (var i = 0; i < array.length; i++) {
			var option = document.createElement("option");
			option.value = array[i];
			option.text = array[i];
			me.appendChild(option);
			//Create and append the options
		}//Add options to select list using arrays
		arrayExe[ind] = true;
	}	
}

function AddRowFunction(){
	var yourSelect = document.getElementById( "selectBox" );
	var option = document.createElement("option");
		option.value = yourSelect.options[ yourSelect.selectedIndex ].value;
		option.text = yourSelect.options[ yourSelect.selectedIndex ].value;
		//the option would be the one selected on selectBox
	//alert(option.value)
	
	if (option.value != "Fundamentals") {
		var table = document.getElementById("table1");
		var row = table.insertRow(2+x);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		x++ //Next row will be added below this one
		y++ //This is used to assign a different string to every selectBox

		//var onclick = 

		cell1.innerHTML = '<select id = "selectBox0" onclick = "AppendOptions1(this,y)">';
		cell2.innerHTML = "[Value]";
		cell3.innerHTML = "[Change]";
		cell4.innerHTML = '<input type = "button" value = "X" onclick = "deleteRow(this)">';

		selectBox0.appendChild(option);
		//Create and append the selected option
		
		var newId = "selectBox" + y ;
		//This will be the Id for the selectBox in row
		document.getElementById("selectBox0").id = newId;
		//Give select box a new id
		arrayExe[y] =  false;
	}
	//alert(document.getElementById("selectBox5").id)
}

var executed0 = false
//Variable only for this function

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table1").deleteRow(i);
	x--;
	//for "x", please see above
}