//your JS code here. If required.
let count=0;

function click() {
	let click=document.getElementById("counter");
	alert(click.textcontent);
	count++;
	click.innerHTML=count;
}
