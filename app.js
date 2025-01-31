// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosList = [];
let amigoSecreto = "";

//Implemente una función para agregar amigos
function agregarAmigo(){
    //Variable que almacena lo que ingresa el usuario
    let nuevoAmigo = document.getElementById('amigo').value;
    if (nuevoAmigo == ''){
        alert("Por favor, inserte un nombre")
    } else {
        //Se agrega el amigo a la lista
        amigosList.push(nuevoAmigo);
        actualizarLista();
        console.log(amigosList);
    }
    limpiarCaja();
}

//Implementa función para actualizar lista de amigos en el HTML
function actualizarLista(){
    //Obtener elemento de la lista
    let lista = document.getElementById('listaAmigos');
    //Limpiar la lista existente
    lista.innerHTML = "";
    //Iterar sobre el arreglo:
    for (let i = 0; i<amigosList.length; i++){
        //Se crea un elemento de la lista
        const elemento = document.createElement('li');
        //Para cada amigo, se crea un nuevo elemento de lista
        elemento.textContent = amigosList[i];
        lista.appendChild(elemento);
    }
}

//Limpiar caja 
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

//Implementa una función para sortear los amigos
function sortearAmigo() {
    if (amigosList != ''){
        //Generar un índice aleatorio
        let numeroGenerado = Math.floor(Math.random()*amigosList.length);
        //Obtener el nombre sorteado
        amigoSecreto = amigosList[numeroGenerado];
        //Mostrar el resultado
        console.log(`El amigo secreto es: ${amigoSecreto}`);
        //Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
        let resultado = document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSecreto}`;
    }else{
        alert("No ha ingresado ningún nombre, intente de nuevo");
    }
}