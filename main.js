

function drag(event){
    event.dataTransfer.setData("Text", event.target.id);
}

function allow(event){
    event.preventDefault();
  document.getElementById("demo").innerHTML = "The p element is OVER the droptarget.";
  event.target.style.border = "4px dotted green";
}

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("result").innerHTML = "Ive Been Dropped Off";
}