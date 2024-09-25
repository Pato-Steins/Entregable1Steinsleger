var stock = {
    azucar: 10,
    salsa: 5,
    manteca: 8,
    aceite: 12,
    harina: 15,
    sal: 20,
    tomate: 6,
    queso: 7,
    pepperoni: 4,
    cebolla: 9,
    roquefort: 3,
};

function consultarStock() {
    let ingrediente = prompt("¿De qué ingrediente quieres consultar el stock? (azucar, salsa, manteca, aceite, harina, sal, tomate, queso, pepperoni, cebolla, roquefort)");

    if (stock[ingrediente] !== undefined) {
        alert(`El stock de ${ingrediente} es: ${stock[ingrediente]}`);

    } else {
        alert("El ingrediente que consultaste no está disponible. Por favor, verifica el nombre e intenta nuevamente.");
    }
}

function agregarStock() {
    let ingrediente = prompt("Que ingrediente quiere modificar?");

    if (stock[ingrediente] > 0) {
        prompt("Ingrese la cantidad ingresada al stock");

    } else {
        Alert("No puede haber menos que 0 en el stock")
    }
}


function nuevoItem() {
    let ingrediente = prompt("Que ingrediente desea agregar a la lista?");

    if (stock[ingrediente] !== undefined) {
        prompt("Ese ingrediente ya esta incluido en la lista");

    } else {
        stock.push(stock[ingrediente])
        Alert(`Se ha agregado a la lista de stock "${stock[ingrediente]}"`)
    }
}

consultarStock();
agregarStock();
nuevoItem()