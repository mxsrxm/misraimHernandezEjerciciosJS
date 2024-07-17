let notas = [
    {
        id: 1,
        titulo: 'Sacar la basura',
        texto: 'Mi mama me va a regañar si no saco la basura lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        realizada: false,
    },
    {
        id: 2,
        titulo: 'Estudiar',
        texto: 'Tengo que estudiar para el examen de mañana',
        realizada: true,
    },
    {
        id: 3,
        titulo: 'Hacer ejercicio',
        texto: 'No quiero engordar',
        realizada: false,
    },
    {
        id: 4,
        titulo: 'Comprar el pan',
        texto: 'No hay pan para el desayuno',
        realizada: true,
    },
    {
        id: 5,
        titulo: 'Hacer la tarea',
        texto: 'No quiero reprobar',
        realizada: true,
    },
    {
        id: 6,
        titulo: 'Lavar el carro',
        texto: 'El carro esta muy sucio',
        realizada: false,
    },
    {
        id: 7,
        titulo: 'Llamar a mi mama',
        texto: 'Hace mucho que no hablo con ella',
        realizada: false,
    },
    {
        id: 8,
        titulo: 'Hacer la comida',
        texto: 'No hay nada para comer',
        realizada: true,
    },
    {
        id: 9,
        titulo: 'Llevar a pasear al perro',
        texto: 'No quiero que se aburra',
        realizada: false,
    },
    {
        id: 10,
        titulo: 'Hacer la cama',
        texto: 'No quiero que mi mama me regañe',
        realizada: true,
    }
];

let idGlobal = 10;

function calcularIMC() {
    document.getElementById('form-calculadora-imc').addEventListener('submit', function (event) {

        event.preventDefault();

        let peso = parseFloat(document.getElementById('peso').value);
        let alturaCm = parseFloat(document.getElementById('altura').value);
        let alturaM = alturaCm / 100;
        let imc = peso / (alturaM * alturaM);

        document.getElementById('resultado').value = "IMC: " + imc.toFixed(2);
    });
}

function convertidorMoneda() {
    const unDolar = 140;
    let inputDolar = document.getElementById('dolarEstadounidense');
    let inputPeso = document.getElementById('pesoColombiano');

    inputDolar.addEventListener('input', function () {
        let dolar = parseFloat(inputDolar.value);
        if (!isNaN(dolar)) {
            inputPeso.value = (dolar * unDolar).toFixed(2);
        } else {
            inputPeso.value = '';
        }
    });

    inputPeso.addEventListener('input', function () {
        let peso = parseFloat(inputPeso.value);

        if (!isNaN(peso)) {
            inputDolar.value = (peso / unDolar).toFixed(2);
        } else {
            inputDolar.value = '';
        }
    });
}

function mostrarNotas() {
    let container_cards = document.getElementById("container_cards");
    container_cards.innerHTML = '';

    if (notas.length === 0) {
        container_cards.innerHTML = `
            <div class="card-chiems d-flex justify-content-center align-items-center m-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <img src="https://tr.rbxcdn.com/aa21af495ab16ddff525dcfc54b3b2c8/420/420/Hat/Png" alt="Chiems" class="chiems-img">
                <p class="fs-1 text fw-bold">No hay notas para mostrar</p>
            </div>
            `;
    } else {
        for (let i = 0; i < notas.length; i++) {
            crearCard(notas[i]);
        }
    }

    console.log(notas);
}

function crearCard(nota) {
    let container_cards = document.getElementById("container_cards");
    let card = document.createElement("div");
    card.classList = "card m-2 rounded-4";

    let textoTachado = '';
    if (nota.realizada) {
        textoTachado = 'style="text-decoration: line-through;"';
    }

    card.innerHTML = `
        <div class="card-body d-flex flex-column">
            <div class="d-flex align-items-center p-2">
                <label class="container-estrella-checkbox">
                    <input class="position-absolute opacity-0" onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
                    <svg id="Layer_1" version="1.2" viewBox="0 0 24 24"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path></g></g></svg>
                </label>
                <h5 class="card-title m-1 font-monospace" ${textoTachado}>${nota.titulo}</h5>
            </div>
            <div class="d-flex flex-column flex-grow-1">
                <div class="scroll-texto overflow-y-auto">
                    <p class="card-text mb-3 font-monospace" ${textoTachado}>${nota.texto}</p>
                </div>
                <div class="mt-auto d-flex justify-content-center">
                    <button type="button" onclick="borrarNota(${nota.id})" class="button-nota p-1 bg-danger-subtle" role="button">BORRAR NOTA</button>
                </div>
            </div>
        </div>
    `;
    container_cards.appendChild(card);
}

function agregarNota(titulo, texto) {
    idGlobal++;

    let nuevaNota = {
        id: idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    };

    notas.push(nuevaNota);
    aplicarFiltros();

    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';

    let container_cards = document.getElementById('mensaje');
    container_cards.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Nota agregada </strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    console.log(notas);

    return nuevaNota;
}


function limpiarCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    document.getElementById('container_cards').innerHTML = '';

    aplicarFiltros();

    console.log(notas);
}

function marcarRealizada(id) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].id === id) {
            if (notas[i].realizada) {
                notas[i].realizada = false;
            } else {
                notas[i].realizada = true;
            }
        }
    }
    document.getElementById('container_cards').innerHTML = '';
    aplicarFiltros();

    console.log(notas);

}

function filtrarNotasRealizadas(array) {
    return array.filter(nota => nota.realizada === true);
}

function filtrarNotasPorTexto(array, texto) {
    if (!texto) {
        return array;
    }

    return array.filter(nota =>
        nota.titulo.toLowerCase().includes(texto.toLowerCase()) ||
        nota.texto.toLowerCase().includes(texto.toLowerCase())
    );
}

function aplicarFiltros() {
    let textoBuscado = document.getElementById('buscador').value;
    let mostrarRealizadas = document.getElementById('notas_realizadas').checked;

    let notasFiltradas;

    if (mostrarRealizadas) {
        notasFiltradas = filtrarNotasRealizadas(notas);
    } else {
        notasFiltradas = notas;
    }

    notasFiltradas = filtrarNotasPorTexto(notasFiltradas, textoBuscado);

    let container_cards = document.getElementById('container_cards');
    container_cards.innerHTML = '';

    if (notasFiltradas.length === 0) {
        container_cards.innerHTML = `
                <div class="card-chiems d-flex justify-content-center align-items-center m-3 shadow p-4 mb-5 bg-light-subtle rounded">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrZS2unG3bJuMM5Z7ecj8tlLYAdOllESDZg&s" alt="Chiems" class="chiems-img">
                    <p class="fs-1 text fw-bold font-monospace">No hay notas para mostrar</p>
                </div>
            `;
    } else {
        for (let i = 0; i < notasFiltradas.length; i++) {
            crearCard(notasFiltradas[i]);
        }
    }
}


document.getElementById('notas_realizadas').addEventListener('change', aplicarFiltros);

document.getElementById('buscador').addEventListener('input', aplicarFiltros);

document.getElementById('form-nota').addEventListener('submit', function (e) {
    e.preventDefault();

    let titulo = document.getElementById('titulo').value;
    let texto = document.getElementById('texto').value;

    if (titulo && texto) {
        let nuevaNota = agregarNota(titulo, texto);

        aplicarFiltros();

        document.getElementById('titulo').value = '';
        document.getElementById('texto').value = '';
    }

});

document.getElementById('btn_limpiar').addEventListener('click', limpiarCampos);

convertidorMoneda();
calcularIMC();
mostrarNotas();