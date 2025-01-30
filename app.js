// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosList = [];
let amigoSecreto = "";

//Implemente una función para actualizar la lista de amigos
function agregarAmigo(){
    //Variable que almacena lo que ingresa el usuario
    let nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo);
    console.log(amigosList);
    //enviarlo a la lista
    amigosList.push(nuevoAmigo);
    //Limpiar lista
    nuevoAmigo = "";
}

//Implementa una función para sortear los amigos
function sortearAmigo() {

}