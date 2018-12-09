var clickCount = 0;
function clickHandler(evt){
    clickCount++;
    console.log(evt);
    var str = "Thanks for clicking" + clickCount;
    this.innerText = str;

}


// var p = document.getElementById("pElement");
// p.addEventListener("click", clickHandler);


// // mkniki koordinatnery iradardzutyan katarman pahin
// function bodyClick(evt){
//     console.log("Clicked at X: " + evt.pageX + ",Y:" + evt.pageY);
// }
// window.onclick = bodyClick;



// // DOM bolor depqerum, ogtagorcum enq event
// function bodyClick(evt){
//     console.log(evt.pageX, evt.pageY);
// }
// window.onclick = bodyClick;


// // p5 canvasi het, event chenq ogtagorcum, kan global popoxakanner
// function mouseClicked(){
//     console.log(mouseX, mouseY);
// }

// // // DOM
// function windowLoad(){
//     console.log("Window is loaded");
// }
// window.onload = windowLoad;

// // p5
// function preload(){
//     console.log("Window is loaded");
// }


// DOM
function click(evt){
    console.log(evt.pageX, evt.paggeY);
}
window.onclick = click;


// p5
function mousePressed(){
    console.log(mouseX, mouseY);
}

// DOM
function keydown(evt){
    console.log("You printed" + evt.key);
}
window.onkeydown = keydown

// P5
function keyPressed(){
    console.log(key);
}