// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDOYpaix8Fbn-0pZQrYfAHZEKYNpyiFJPA",
    authDomain: "carrito-d1f58.firebaseapp.com",
    projectId: "carrito-d1f58",
    storageBucket: "carrito-d1f58.firebasestorage.app",
    messagingSenderId: "601979239640",
    appId: "1:601979239640:web:68b1c96c5e38ef49f0abad"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const bd = firebase.firestore();

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".agregarCarrito");

    if (botones.length > 0) {
        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                const nombre = boton.dataset.nombre;
                const precio = parseFloat(boton.dataset.precio);
                const imagen = boton.dataset.imagen;

                agregarProducto(nombre, precio, imagen);
            });
        });
    } else {
        cargarCarrito();
    }
});

// Función para agregar a Firestore
const agregarProducto = async (nombre, precio, imagen) => {
    try {
        await bd.collection("carrito").add({ nombre, precio, imagen });
        alert("Producto agregado al carrito");
    } catch (error) {
        console.error("No se puede agregar producto", error);
    }
};

// Función para cargar carrito
const cargarCarrito = async () => {
    const carritoTable = document.querySelector("#carritoCompras");
    if (!carritoTable) return;

    carritoTable.innerHTML = "";
    let total = 0;

    const productos = await bd.collection("carrito").get();
    productos.forEach(pro => {
        const producto = pro.data();
        total += producto.precio;

        const tr = document.createElement("tr");
        tr.classList.add("bg-white", "border-b", "dark:bg-gray-800", "dark:border-gray-700");

        const tdProducto = document.createElement("td");
        tdProducto.classList.add("px-6", "py-4", "flex", "items-center", "space-x-3");
        tdProducto.innerHTML = `
            <img src="${producto.imagen}" alt="product image" class="w-16 h-16 rounded-md object-cover">
            <span class="font-medium text-gray-900 dark:text-white">${producto.nombre}</span>
        `;

        const tdPrecio = document.createElement("td");
        tdPrecio.classList.add("px-6", "py-4", "text-gray-900", "dark:text-white");
        tdPrecio.textContent = `$${producto.precio.toFixed(2)}`;

        const tdCantidad = document.createElement("td");
        tdCantidad.classList.add("px-6", "py-4");
        tdCantidad.innerHTML = `<input type="number" value="1" min="1" class="w-16 border border-gray-300 rounded-md p-1">`;

        const tdEliminar = document.createElement("td");
        tdEliminar.classList.add("px-6", "py-4");
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("text-red-600", "hover:text-red-800");
        btnEliminar.addEventListener('click', async () => {
            try {
                await bd.collection("carrito").doc(pro.id).delete();
                cargarCarrito();
            } catch (error) {
                console.error("Error al eliminar el producto", error);
            }
        });
        tdEliminar.appendChild(btnEliminar);

        tr.appendChild(tdProducto);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdCantidad);
        tr.appendChild(tdEliminar);

        carritoTable.appendChild(tr);
    });

    const totalCompra = document.getElementById("totalCompra");
    if (totalCompra) {
        totalCompra.textContent = `Total: $${total.toFixed(2)}`;
    }
};

// Evento para el botón "Proceder al Pago"
const btnPagar = document.getElementById("btnPagar");
if (btnPagar) {
    btnPagar.addEventListener("click", () => {
        alert("¡Regístrate primero!");
        window.location.href = "../pages/nosotros.html"; 
    });
}