var points = 0;

	var check = function () {
    if (document.getElementById("plus1").checked) {
    points++;
    }
    
    if (document.getElementById("plus2").checked) {
    points++;
    }
    
    if (document.getElementById("plus3").checked) {
    points++;
    }
    
    if (document.getElementById("plus4").checked) {
    points++;
    }
    
    if (document.getElementById("plus5").checked) {
    points++;
    }
	
	alert("You gave " + points + " correct answers.");
	
	};
	
	