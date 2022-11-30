
	const carrito = [];

	frut = prompt("¿Quieres agregar alguna fruta?");
	carrito.push(frut);

	while (confirm("¿Otra fruta a agregar?")){
		frut = prompt("Ingresa el nombre de la fruta");
		carrito.push(frut);
	}


	for (let i of carrito){
		console.log(carrito);
		
}


