var x1 = 0;
var y = 0;
var arrayExe = [true];

var array = ["Assets","Book Value","Capital Expenditures","Cash","Cost of Good Sold","DPS","EPS Base","Float Shares","Good Will","Income After Tax","Income Before Tax","Institutional Own","Inventory","Liability","Long Term Debt","Net Income","Number of Employees","Operating Income","Revenue","Short Term Debt","Total Operating Expense"];
//"EPS Diluted","Operating Cash Flow",
//Number of times either of the functions has been executed


function AddRowFunction(){

	///////////////////////////////////////////////*Settings*//////////////////////////////////////////////
	var newTextSize = document.getElementById('inpText').value;
	var changeSize = '16px';
	
	changeSize = newTextSize + "px";
				
	var emLength = document.getElementsByTagName('tr').length;
	for(var x = 0; x < emLength; x++){
		document.getElementsByTagName('tr')[x].style.fontSize = changeSize;
	}
	
	//this changes the color of the newly added rows
	var txtcolor1 = "#" + document.getElementById('inpColorScheme1').value;
	var txtcolor2 = "#" + document.getElementById('inpColorScheme2').value;
	var rowLength = document.getElementById('table1').rows.length;
	
	for(var x = 0; x < rowLength; x += 2){
		document.getElementById('table1').rows[x].style.background = txtcolor1;
	}
	for(var x = 1; x < rowLength; x += 2){
		document.getElementById('table1').rows[x].style.background = txtcolor2;
	}

	///////////////////////////////////////////////*Settings*//////////////////////////////////////////////

	Name =$ ('#autocomplete')[0].value;
	var yourSelect = document.getElementById( "selectBox" );
	
	if (validTicker == 1) {
		var option = document.createElement("option");
			option.value = yourSelect.options[ yourSelect.selectedIndex ].value;
			option.text = yourSelect.options[ yourSelect.selectedIndex ].value;
		var Index = yourSelect.selectedIndex;
			//the option would be the one selected on selectBox
		
		if (option.value != "Fundamentals") {


			var table = document.getElementById("table1");
			var row = table.insertRow(2+x1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			
			x1++; //Next row will be added below this one
			y++; //This is used to assign a different string to every selectBox
			
			var boxValue
			for ( var k = 0; k<fundata.length ; k ++) {
				if (option.value == fundata[k].label && option.value != "Fundamentals") {
				boxValue = fundata[k];
				break;
				}
			}

				cell1.innerHTML = '<select id = "selectBox0" onchange = "Swagger(this, this.id)">';
				cell2.innerHTML = "<p id = 'label0'>";
				cell3.innerHTML = "[Change]";
				cell4.innerHTML = '<input type = "button" value = "X" onclick = "deleteRow(this)">';

				AppendOptions1(selectBox0,y,Index);
				//Puting the function here will bypass the "onclick" event
				var tempyee= document.getElementById("label0")
				tempyee.innerHTML = boxValue.val;
				var newId = "selectBox" + y ;
				var newId2 = "label"	+ y
				//This will be the Id for the selectBox in row

				document.getElementById("selectBox0").id = newId;
				document.getElementById("label0").id = newId2;

				//Give select box a new id
				arrayExe[y] = false;
		}
	} else {
		document.getElementById("alertStock").innerHTML = "Please enter a stock ticker.";
	}
	yourSelect.selectedIndex = 0;
}


function AppendOptions1(me,num,ind){
	if (!(arrayExe[num])) {
		for (var i = 0; i < array.length; i++) {
			var option = document.createElement("option");
			option.value = array[i];
			option.text = array[i];
			me.appendChild(option);
			//Create and append the options
		}//Add options to select list using arrays
		arrayExe[num] = true;
	}
	me.selectedIndex = ind - 1;
	//This would give you selected option to become the one actually being selected, and it bypass the bug.

}

//deletes current row
function deleteRow(r) {
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("table1").deleteRow(i);
	x1--;
	//for "x", please see above

	var txtcolor = document.getElementById('inpColorScheme1').value;
	 txtcolor = '#' + txtcolor;
	 var rowLength = document.getElementById('table1').rows.length;
	 for(var x = 2; x < rowLength; x += 2){
	 document.getElementById('table1').rows[x].style.background = txtcolor;
	 }
	 txtcolor = document.getElementById('inpColorScheme2').value;
	 txtcolor = '#' + txtcolor;
	 for(var x = 1; x < rowLength; x += 2){
	 document.getElementById('table1').rows[x].style.background = txtcolor;
	 }
}

//clears all added rows
function deleteRowAll() {
	for (var i = 0; i < x1; i++) {
		document.getElementById("table1").deleteRow(2);
	};

	x1 = 0;
}

function Swagger (me,d2){
	var boxValue
		for ( var k = 0; k<fundata.length ; k ++) {
			if ( me.options[ me.selectedIndex ].value == fundata[k].label && me.options[ me.selectedIndex ].value	!= "Fundamentals") {
			boxValue = fundata[k].val;
			break;
			}
		}
var myString = d2;
var stringLength = myString.length; // this will be 16
var lastChar = myString.charAt(stringLength - 1); // this will be the string "."
//'alert(boxValue)
document.getElementById("label" + lastChar).innerHTML= boxValue

}