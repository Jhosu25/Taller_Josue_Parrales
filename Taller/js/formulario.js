let cajaImprimir = document.querySelector("#imprimirMensaje");
let btnImprimir = document.querySelector("#botonImprimir");

const mostrarMensaje = () => {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const correo = document.querySelector("#correo").value;
    const direccion = document.querySelector("#direccion").value;
    const telefono = document.querySelector("#telefono").value;
    const interes = document.querySelector("#interes").value;
    const costo = document.querySelector("#costo").value;

    cajaImprimir.innerHTML = `
        <table class="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <thead class="bg-gray-800 text-white">
                <tr>
                    <th class="py-2 px-4 border">Nombre</th>
                    <th class="py-2 px-4 border">Apellido</th>
                    <th class="py-2 px-4 border">Correo</th>
                    <th class="py-2 px-4 border">Dirección</th>
                    <th class="py-2 px-4 border">Teléfono</th>
                    <th class="py-2 px-4 border">Interés</th>
                    <th class="py-2 px-4 border">Costo</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr class="bg-gray-50 hover:bg-gray-100">
                    <td class="py-2 px-4 border">${nombre}</td>
                    <td class="py-2 px-4 border">${apellido}</td>
                    <td class="py-2 px-4 border">${correo}</td>
                    <td class="py-2 px-4 border">${direccion}</td>
                    <td class="py-2 px-4 border">${telefono}</td>
                    <td class="py-2 px-4 border">${interes}</td>
                    <td class="py-2 px-4 border">$${costo}</td>
                </tr>
            </tbody>
        </table>
    `;
};

const registrar=()=>{
    mostrarMensaje();
    alert("Usuario Registrado Con Exito!");
}

btnImprimir.onclick = registrar;