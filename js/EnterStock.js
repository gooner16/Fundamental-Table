//'use strict';
window.onload = function() {
  document.getElementById('enterStock').onclick = function(event) {
    var span, input, text;
    // Get the event (handle MS difference)
    event = event || window.event;
    // Get the root element of the event (handle MS difference)
    span = event.target || event.srcElement;
    // If it's a span...
    if (span && span.tagName.toUpperCase() === "SPAN") {
      // Hide it
      span.style.display = "none";
      // Get its text
      text = span.innerHTML;
      var stockText = document.getElementById("test").innerHTML;
      // Create an input
      input = document.createElement("input");
      input.type = "text";
      input.size = Math.max(text.length / 4 * 3, 4);
      input.id = "autocomplete";
      input.name = "currency";
      span.parentNode.insertBefore(input, span);
      // Focus it, hook blur to undo
      input.focus();
      input.onblur = function() {
                // Remove the input
        if(input.value.length !== 0){
        span.parentNode.removeChild(input);
           // Update the span
        span.innerHTML = input.value;
        // Show the span again
        span.style.display = "";
        }   
       
      };
    }
  };
};

