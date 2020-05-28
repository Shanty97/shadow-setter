var xp,yp,bl,sp,cl, query;

function initialSetup() {
	xp=3;
	yp=3;
	bl=5;
	sp=6;
	cl='#2d2d2d';
	query='box-shadow: '+xp+' '+yp+' '+bl+' '+sp+' '+cl;
	document.getElementById("result").value=query;
	console.log("inside initialSetup",query)	
}
window.onload = initialSetup;
console.log("outside initialSetup",query)



document.querySelectorAll('input').forEach(input => {
	input.addEventListener('input', inputChange);
})

function inputChange(e) {

	document.documentElement.style.setProperty(
		`--${e.target.name}` , e.target.value
	)
	xp = e.target.name === 'x-position' ? parseInt(e.target.value) : xp;
	yp = e.target.name === 'y-position' ? parseInt(e.target.value) : yp;
	bl = e.target.name === 'blur' ? parseInt(e.target.value) : bl;
	sp = e.target.name === 'spread' ? parseInt(e.target.value) : sp;
	cl = e.target.name === 'shadow-color1' ? e.target.value : cl;
	query ='box-shadow: '+ xp+' '+yp+' '+bl+' '+sp+' '+cl;
	// console.log(e.target.value);
	// var xp = document.readyState ? e.target.value : 3;
	// console.log("xp val : ",xp);	
	//console.log(getComputedStyle(e.target.id).getPropertyValue('--x-position'));
	

    
	//
}

document.querySelector('#generate').addEventListener("click", gens);


function gens() {
	document.getElementById("result").value=query;
	console.log(query);
}