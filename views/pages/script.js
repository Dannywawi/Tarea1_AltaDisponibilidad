const formElement = document.getElementById("saveTitulo");

formElement.addEventListener("submit",  (event) => {
	event.preventDefault();
	let fname = document.getElementById("fname").value;
	let transaction = { fname: fname };
	let transactionJson = JSON.stringify(transaction);
	console.log(transactionJson);
}) 
