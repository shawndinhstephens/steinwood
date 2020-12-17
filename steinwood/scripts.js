
//declaring strings
characterselect = "";
locationselect = "";
myevent1outcome = "";
myevent2outcome = "";
mmeventoutcome = "";
mmevent2outcome = "";
mmevent1charaction = "";


function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.getElementById(whereTo).innerHTML = this.responseText;
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
	}
  
 

	// initiate request and wait for response
	ajax.send();
  

  

  

  
}