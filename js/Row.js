var x = 0
var y = 0
var arrayExe = [true]
var array = ["Assets","Book Value","Capital Expenditures","Cash","Cost of Good Sold","DPS","EPS Base","Float Shares","Good Will","Income After Tax","Income Before Tax","Institutional Own","Inventory","Liability","Long Term Debt","Net Income","Number of Employees","Operating Income","Revenue","Short Term Debt","Total Operating Expense"];
		//"EPS Diluted","Operating Cash Flow",
//Number of times either of the functions has been executed

function AppendOptions1(me,num,ind){
	if (!(arrayExe[num])) {
		//me.remove(0);
		//Remove first option of selectbox
		//Create array of options to be added
		for (var i = 0; i < array.length; i++) {
			var option = document.createElement("option");
			option.value = array[i];
			option.text = array[i];
			me.appendChild(option);
			//Create and append the options
		}//Add options to select list using arrays
		arrayExe[num] = true;
	}
	me.selectedIndex = ind - 1
	//This would give you selected option to become the one actually being selected, and it bypass the bug.

}

function AddRowFunction(){
	Name = $('#autocomplete')[0].value
	if ( Name != "" ){
	var yourSelect = document.getElementById( "selectBox" );
	var option = document.createElement("option");
		option.value = yourSelect.options[ yourSelect.selectedIndex ].value;
		option.text = yourSelect.options[ yourSelect.selectedIndex ].value;
	var Index = yourSelect.selectedIndex;
		//the option would be the one selected on selectBox
	
	if (option.value != "Fundamentals") {
		var table = document.getElementById("table1");
		var row = table.insertRow(2+x);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		x++ //Next row will be added below this one
		y++ //This is used to assign a different string to every selectBox
	
	var boxValue
	for ( var k = 0; k<array.length ; k ++){
	if ( yourSelect.options[ yourSelect.selectedIndex ].value == array[k] && option.value != "Fundamentals"){
		 boxValue = fundata[k]
		break
	}
}
		cell1.innerHTML = '<select id = "selectBox0">';
		cell2.innerHTML = boxValue;
		cell3.innerHTML = "[Change]";
		cell4.innerHTML = '<input type = "button" value = "X" onclick = "deleteRow(this)">';

		AppendOptions1(selectBox0,y,Index)
		//Puting the function here will bypass the "onclick" event
		
		var newId = "selectBox" + y ;
		//This will be the Id for the selectBox in row
		document.getElementById("selectBox0").id = newId;
		//Give select box a new id
		arrayExe[y] = false;
	}
	//alert(document.getElementById("selectBox5").id)
	}else{
	alert("Please Enter a Stock Name")
}
}

var executed0 = false
//Variable only for this function

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table1").deleteRow(i);
	x--;
	//for "x", please see above
}