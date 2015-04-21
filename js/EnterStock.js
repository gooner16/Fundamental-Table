//'use strict';

window.onload = function() {
	//Change color of HTML first
	Settings_rowColor();

	document.getElementById('enterStock').onclick = function(event) {
		var span, input, text;

		// Get the event (handle MS difference)
		event = event || window.event;
		
		// Get the root element of the event (handle MS difference)
		span = event.target || event.srcElement;
		input = document.getElementById("autocomplete");
		
		// If it's a span...
		if (span && span.tagName.toUpperCase() === "SPAN") {
			// Hide it
			span.style.display = "none";
			
			//Show input
			input.value = "";
			input.style.display = "";
			input.style.width = "100px";
	
			// Get its text
			text = span.innerHTML;
			
			// Focus it, hook blur to undo
			input.focus();

			input.onkeypress = function(event) {
				
				if (event.keyCode == 13) {
					
					validTicker = determineTicker(input.value.toUpperCase());

					// If input is empty
					if (validTicker == 0) {
						input.style.display = "none";

						// Reset Span
						span.innerHTML = "Stock Name";
						inputStock = "Stock Name";

						// Show the span again
						span.style.display = "";

						deleteRowAll();
						//The function is in "row.js"

						document.getElementById("alertStock").innerHTML = "";
					}
					// If input is valid
					if (validTicker == 1) {
						input.style.display = "none";
						
						// Update the span
						span.innerHTML = input.value.toUpperCase();
						inputStock = input.value.toUpperCase();
						console.log(inputStock)
						
						// Show the span again
						span.style.display = "";

						deleteRowAll();
						//The function is in "row.js"

						document.getElementById("alertStock").innerHTML = "";
					}
					// If input is invalid
					if (validTicker == 2) {
						input.style.display = "none";

						// Reset Span
						span.innerHTML = "Stock Name";
						inputStock = "Stock Name";

						// Show the span again
						span.style.display = "";

						deleteRowAll();
						//The function is in "row.js"

						document.getElementById("alertStock").innerHTML = "Please enter a valid stock ticker.";
						//This shows up when it's empty or invalid stock ticker
					}
				}
			}
		}
	}
}

function determineTicker (input) {
	var output = 2;
	
	if (input.length == 0 || input == "STOCK NAME") {
		output = 0;
	} else {	
		for (i = 0; i < lengthOfResponse ; i++) {
			
			if (input == response[i].Ticker) {
				output = 1;
			}
		}
	}

	return output;
}