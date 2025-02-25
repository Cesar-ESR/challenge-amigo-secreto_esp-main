// Variables
let listaDeAmigos = [];

// Función para asignar texto a un elemento
function asignarTexto(elemento, texto) {
    let elementHTML = document.querySelector(elemento);
    elementHTML.textContent = texto;
    
}

// Función para agregar amigos a la lista
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim(); // Elimina espacios innecesarios

    // Expresión regular para permitir solo letras y espacios
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }else{

        if (!regex.test(amigo)) {
            alert("El nombre solo debe contener letras y espacios, sin números ni caracteres especiales. Intente de nuevo");
            return;
        }else{

            if (listaDeAmigos.includes(amigo)) {
                alert("El nombre ya ha sido agregado anteriormente.");
                return;
            }else{

            listaDeAmigos.push(amigo);
            document.getElementById("amigo").value = " ";
        
            // Agregar el nombre a la lista en la interfaz
            let ul = document.getElementById("listaAmigos");
            let li = document.createElement("li");
            li.textContent = amigo;
            ul.appendChild(li);

            }
            

        }
           

    }

    
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Debe haber al menos 2 amigos para hacer el sorteo.");
        return;
    }else{

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSeleccionado = listaDeAmigos[indiceSorteado];

    asignarTexto("#resultado", `🎉 Feliciades, el amigo seleccionado es: ${amigoSeleccionado} 🎉`);
    
    }
}

// Función para reiniciar el juego
function reInicio() {
    listaDeAmigos = [];

    // Limpiar la interfaz
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("listaDeAgregados").textContent = "Lista de amigos agregados:";
}

// Detectar cuando el usuario presiona "Enter" en el input
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que el formulario se envíe (si lo hubiera)
        agregarAmigo(); // Llama a la función para agregar el nombre
    }else{
        
    }
});
