var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");




function inputLength() {
	return input.value.length;
};

function listLength() {
	return document.getElementsByTagName("li").length;
}



function createListElement() {
 var li = document.createElement("li");

 // add button and class
 var btn = document.createElement("button");
 var text = document.createTextNode("delete")
  btn.classList.add("cool")
	//
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(text);
	li.appendChild(btn);
	// add click events for the list and the button
	btn.onclick = removeParent;
	li.onclick = listClick;
	//
	ul.appendChild(li);

	input.value = "";
};

// remove items
function removeParent(){
	for(var i=0; i<list.length; i++) {
		this.parentNode.remove();
	}
	}

// toggle list
	function listClick() {
		if (listLength() > 0  )
		this.classList.toggle("done");
	}

function addListAfterClick(){
    if (inputLength() > 0) {
       createListElement();

    }
}

function addListAfterKeypress(event) {
 if (inputLength() > 0 && event.keyCode === 13) {
	  createListElement();
 }
}



button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
