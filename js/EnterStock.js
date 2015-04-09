//'use strict';
window.onload = function() {
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
				if (input.value.length !== 0 && event.keyCode == 13) {
					console.log('Enter was pressed');
					console.log('User entered: ', input.value);

					input.style.display = "none";
					
					// Update the span
					span.innerHTML = input.value.toUpperCase();
					inputStock = input.value.toUpperCase();
					
					// Show the span again
					span.style.display = "";

					deleteRowAll();
					//The function is in "row.js"
				};
				if (input.value.length == 0 && event.keyCode == 13) {
					input.style.display = "none";

					// Reset Span
					span.innerHTML = "Stock Name";
					inputStock = "Stock Name";

					// Show the span again
					span.style.display = "";

					deleteRowAll()
					//The function is in "row.js"
				};

			};
		};
	};
};