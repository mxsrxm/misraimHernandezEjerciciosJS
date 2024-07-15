function calcularIMC() {
    document.getElementById('form_calculadora_masa_corporal').addEventListener('submit', function (event) {
        event.preventDefault();

        let peso = parseFloat(document.getElementById('peso').value);
        let alturaCm = parseFloat(document.getElementById('altura').value);
        let alturaM = alturaCm / 100;

        let imc = peso / (alturaM * alturaM);

        document.getElementById('resultado').innerText = imc.toFixed(2);
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


const data = {
    notas: [
        {
            _id: 1,
            titulo: 'Sacar la basura',
            texto: 'Mi mama me va a regañar si no saco la basura',
            realizada: false,
        },
        {
            _id: 2,
            titulo: 'Estudiar',
            texto: 'Tengo que estudiar para el examen de mañana',
            realizada: false,
        },
        {
            _id: 3,
            titulo: 'Hacer la tarea',
            texto: 'Tengo que hacer la tarea de matemáticas',
            realizada: true,
        },
        {
            _id: 4,
            titulo: 'Comprar el pan',
            texto: 'No hay pan en la casa',
            realizada: false,
        },
        {
            _id: 5,
            titulo: 'Llamar a mamá',
            texto: 'Hace mucho que no hablo con mi mamá',
            realizada: true,
        },
        {
            _id: 6,
            titulo: 'Hacer ejercicio',
            texto: 'Hace mucho que no hago ejercicio',
            realizada: true,
        },
    ],
};

data.notas
data.notas[0].titulo

function mostrarNotas() {
    for (let i = 0; i < data.notas.length; i++) {
        createCard(data.notas[i]);

    }
}

function createCard(nota) {
    let container_cards = document.getElementById("container_cards");
    let card = document.createElement("div");
    card.className = "card m-3";
    card.innerHTML = `  
           <div class="card-body">
                <div>
                    <input type="checkbox" ${nota.realizada ? 'checked' : ''}>
                    <h5 class="card-title">${nota.titulo}</h5>
                </div>
                <p class="card-text">${nota.texto}</p>
                <button class="btn btn-danger">Borrar nota</button>
            </div>
    `;
    container_cards.appendChild(card);
}





















calcularIMC();
convertidorMoneda();
mostrarNotas();
