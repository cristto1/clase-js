

//! TERCERA ENTREGA

const productos =  [{ nombre: 'COLLAR BUHO', precio: 42000, boton: '¡Comprar!'},
                    { nombre: 'COLLAR ELEFANTE', precio: 40000, boton: '¡Comprar!'},
                    { nombre: 'EAR CUF CORONA', precio: 23000, boton: '¡Comprar!'},
                    { nombre: 'COLLAR MARIPOSA', precio: 38000, boton: '¡Comprar!'}];

for(const producto of productos){
    let contenedor = document.createElement('div');

    contenedor.innerHTML = `<h3> Producto: ${producto.nombre} </h3> 
                            <p> Precio: $${producto.precio} </p>
                            <button> ${producto.boton} </button>`

    document.body.appendChild(contenedor);
    }

//----------

function eleccionDeProductos(){
    class Producto{
        constructor(nombre, tipo, precio){
            this.nombre = nombre;
            this.tipo = tipo;
            this.precio = precio;
        }
    }

    const productos = [];
    for (let i = 0; i<3; i++){
        let nombre = prompt('Ingresa el nombre del accesorio que deseas');
        let tipo = prompt('Ingrese el tipo de accesorio');
        let precio = prompt('Ingresa el precio del accesorio elegido');
        let accesorioElegido ={
            nombre: nombre,
            tipo:  tipo,
            precio: parseInt(precio)
        }
        productos.push(accesorioElegido);
    }

    productos.push(new Producto('ELEFANTE', 'COLLAR', '45000'));
    productos.push(new Producto('PULSERA SIMPLE', 'PULSERA', '20000'));

    let mensaje = 'Tus accesorios elegidos son:' + '\n';
    let precioTotal = 0;
    for (const producto of productos){
        mensaje += producto.nombre + ': $' + producto.precio + '\n';
        precioTotal += parseInt(producto.precio);
    }

    let buscar = productos.filter((el) => el.tipo.includes('PULSERA'));
    let buscar2 = productos.filter((el) => el.precio < 30000);
    let buscar3 = productos.filter((el) => el.precio > 45000);

    alert(mensaje.toLocaleUpperCase());
    alert('El monto total de los accesorios que vas a llevar es de $' + precioTotal);

    if(precioTotal >= 100000){
        alert('¡Tu pedido tiene el envio gratuito!');
    }else{
        let faltante = 100000 - precioTotal;
        alert('Te faltan $' + faltante + ' para que tu pedido tenga el envio gratuito');
    }

    console.log(productos);
    console.log(productos.length);
    console.log(buscar);
    console.log(buscar2);
    console.log(buscar3);

    localStorage.setItem('Productos', JSON.stringify(productos));
}

eleccionDeProductos();

//------



