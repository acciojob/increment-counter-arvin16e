//your JS code here. If required.
let count=0;

function click() {
	let click=document.getElementById("counter");
	
	count++;
	alert(click.textcontent);
	click.innerHTML=count;
}
