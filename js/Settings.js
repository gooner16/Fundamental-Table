'use strict';
// For all settings fucntions 

function Settings_textSize () {
	//This changes the size of text
	var newTextSize = document.getElementById('inpText').value;
	var changeSize = '16px';
	
	changeSize = newTextSize + "px";
				
	var emLength = document.getElementsByTagName('tr').length;
	for(var x = 0; x < emLength; x++) {
		document.getElementsByTagName('tr')[x].style.fontSize = changeSize;
	}
}

function Settings_rowColor () {
	//this changes the color of the newly added rows
	rowcolor1 = "#" + document.getElementById('inpColorScheme1').value;
	rowcolor2 = "#" + document.getElementById('inpColorScheme2').value;
			console.log(rowcolor1); //This is different for Chrome and Firefox
	/*	Change the background color for all the ODD rows	*/
	for(var x = 2; x < rowLength; x += 2) {
		document.getElementById('table1').rows[x].style.background = rowcolor1;
	}
	/*	Change the background color for all the EVEN rows	*/
	for(var x = 1; x < rowLength; x += 2) {
		document.getElementById('table1').rows[x].style.background = rowcolor2;
	}
	document.getElementById('table1').rows[0].style.background = rowcolor1;
	document.getElementById('table1').rows[(rowLength - 1)].style.background = rowcolor1;
}