var screen = document.getElementById("screen");
function btnClick(value){
    screen.value += value;}
 function clearScreen(){
    screen.value = "";
 } 
 //find result
 function findResult(){
    var result = eval(screen.value);
    screen.value = result;

 }  