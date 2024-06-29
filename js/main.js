let e1 = 'E1 - Realizar un programa que permita el ingreso de un numero y muestre su tabla de multiplicar.';
let e2 = 'E2 - Realizar un programa que permita el ingreso de numeros los cuales se tienen que iracumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.';
let e3 = 'E3 - Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en unavariable guardar un numero que este en el rango 1 - 100. La persona debera poder ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si elvalor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar decuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hastaque el usuario adivine el numero secreto. Por ultimo mostrar un mensaje defelicitaciones y decirle en cuantos intentos lo ha realizado.';
let e4 = 'E4 - Realizar un programa que permita decir si un numero es primo. Un numero es primosi solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tienecomo divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores elnumero ya no es primo';
let e5 = 'E5 - Realizar un programa que permita dado un numero, mostrar todos sus divisores.';
let e6 = 'E6 - Dado un array de 10 elementos, realizar un programa que recorra ese array ymuestre un mensaje por consola con cada uno de los elementos del array.';
let e7 = 'E7 - Dado un array de 10 numeros, realizar un programa que muestre por consola eldoble de cada uno de los elementos.';
let e8 = 'E8 - Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cadaobjeto representa a 1 persona con al menos 4 propiedades, realizar un programaque muestre un mensaje de presentacion por cada elemento del array.';
let e9 = 'E9 - Dado un array de 10 numeros, realizar un programa que recorra el array y solomuestre los numeros impares.';
let e10 = 'E10 - Realizar un programa que permita la entrada de numeros y calcule la suma de losnumeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuandoel usuario ingresa un 0.';
let e11 = 'E11 - Dado un array de 10 numeros, realizar un programa que imprima por pantalla elnumero mas grande.';
let e12 = 'E12 - Dado un array de 10 numeros, realizar un programa que imprima por pantalla elnumero mas chico.';
let e13 = 'E13 -  Realizar un programa que permita jugar a piedra papel o tijeras, se debera poderingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 lasmanos de cada jugador, y en cada turno se debera seguir jugando solo si se produjoun empate. Caso contrario mostrar un mensaje con el nombre de la personaganadora.';
let e14 = 'E14 - Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.';
let e15 = 'E15 - Realizar un programa que imprima por consola un triangulo de 5 asteriscos de ladopero invertido.';
let e16 = 'E16 - Dado un array de 10 numeros desordenados, realizar un programa que imprima porpantalla el array ordenado. (NO USAR SORT, solo ciclos FOR';

// Menu de ejercicios para seleccionar
let menu = prompt('Menú Ejercicios JS por Misraim Hernandez' + '\n' + 'Ingrese el número del ejercicio que desea ver:');

switch (menu) {
    case '1':
        ejercicio1();
        break;

    case '2':
        ejercicio2();
        break;

    case '3':
        ejercicio3();
        break;

    case '4':
        ejercicio4();
        break;

    case '5':
        ejercicio5();
        break;

    case '6':
        ejercicio6();
        break;

    case '7':
        ejercicio7();
        break;

    case '8':
        ejercicio8();
        break;

    case '9':
        ejercicio9();
        break;

    case '10':
        ejercicio10();
        break;

    case '11':
        ejercicio11();
        break;

    case '12':
        ejercicio12();
        break;

    case '13':
        ejercicio13();
        break;

    case '14':
        ejercicio14();
        break;

    case '15':
        ejercicio15();
        break;

    case '16':
        ejercicio16();
        break;

    default:
        console.log('Opción incorrecta');
        break;
}

function ejercicio1() {

    console.log(e1);
    let n = parseInt(prompt('Ingrese un número para ver su tabla'));

    for (let i = 1; i <= 10; i++) {
        resultado = n * i;

        console.log( n + ' x ' + i + ' = ' + resultado);
    }

}

function ejercicio2() {

  console.log(e2);
    let acumulador = 0;
    let array = [];
    let n = parseInt(prompt('Ingrese un número para acumular'));
    while (n != 0) {
        acumulador += n;
        array.push(n);
        n = parseInt(prompt('Ingrese un número para acumular'));
    }
    console.log('Los numeros ingresados son ' + array);
    console.log('La suma de los numeros ingresados es ' + acumulador);
}
    
function ejercicio3() {
    console.log(e3);

    let numeroDefault = 6;
    let numeroRandom = Math.floor(Math.random() * 100) + 1;

    let numeroSecreto = numeroDefault;

    let intentos = 0;
    let n = parseInt(prompt('Ingrese un número para adivinar el número secreto'));

    while (n != numeroSecreto) {
        if (n < numeroSecreto) {
            n = parseInt(prompt('El número ingresado es menor al número secreto. Ingrese otro número'));
        } else {
            n = parseInt(prompt('El número ingresado es mayor al número secreto. Ingrese otro número'));
        }
        intentos++;
    }
    intentos++;
    console.log('Felicitaciones, adivinaste el número secreto en ' + intentos + ' intentos'); 
}

function ejercicio4() {
    console.log(e4);

    let n = parseInt(prompt('Ingrese un número para saber si es primo'));

    let esPrimo = true;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log('El número ' + n + ' es primo');
    }
    else {
        console.log('El número ' + n + ' no es primo');
    }
}

function ejercicio5() {
    console.log(e5);

    let n = parseInt(prompt('Ingrese un número para saber sus divisores'));

    console.log('Los divisores de ' + n + ' son:');
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }
}

function ejercicio6() {
    console.log(e6);
    let array = [9, 6, 3, 7, 5, 2, 8, 4, 1, 10];

    console.log('Los elementos del array son:');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function ejercicio7() {
    console.log(e7);
    let array = [9, 6, 3, 7, 5, 2, 8, 4, 1, 10];

    console.log('Los elementos del array son:');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    console.log('El doble de los elementos del array son:');

    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * 2);
    }
}

function ejercicio8() {
    console.log(e8);
    let familia = [
        { nombre: 'Julio', edad: 50, ocupacion: 'programador', relacion: 'padre', musica: 'rock'},
        { nombre: 'Lupe', edad: 45, ocupacion: 'profesora', relacion: 'madre', musica: 'pop'},
        { nombre: 'Dipper', edad: 25, ocupacion: 'estudiante', relacion: 'hijo', musica: 'reggaeton'},
        { nombre: 'Luna', edad: 20, ocupacion: 'estudiante', relacion: 'hija', musica: 'cumbia'},
        { nombre: 'Luis', edad: 15, ocupacion: 'estudiante', relacion: 'hijo', musica: 'pop'}
    ];

    for (let i = 0; i < familia.length; i++) {
        console.log('Hola, soy ' + familia[i].nombre + ', tengo ' + familia[i].edad + ' años, soy ' + familia[i].ocupacion + ' y soy ' + familia[i].relacion);
    }
}

function ejercicio9() {
    console.log(e9);
    let array = [9, 6, 3, 7, 5, 2, 8, 4, 1, 10];

    console.log('Los elementos del array son:');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    console.log('Los números impares del array son:');
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
        }
    }
}

function ejercicio10() {
    console.log(e10);
    let acumuladorPares = 0;
    let acumuladorImpares = 0;

    let n = parseInt(prompt('Ingrese un número'));

    while (n != 0) {
        if (n % 2 == 0) {
            acumuladorPares += n;
        } else {
            acumuladorImpares += n;
        }
        n = parseInt(prompt('Ingrese un número'));
    }

    console.log('La suma de los números pares es ' + acumuladorPares);
    console.log('La suma de los números impares es ' + acumuladorImpares);
}

function ejercicio11() {
    console.log(e11);
    let array = [9, 6, 3, 7, 15, 2, 8, 4, 1, 10];
    let mayor = array[0];

    console.log('Los elementos del array son:');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }

    console.log('El número más grande del array es ' + mayor);
}

function ejercicio12() {
    console.log(e12);
    let array = [9, 6, 3, 7, 15, 2, 8, 4, 1, 10];
    let menor = array[0];

    console.log('Los elementos del array son:');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }

    console.log('El número más chico del array es ' + menor);
}

function ejercicio13() {
    console.log(e13);

    let jugador1Nombre = prompt("Jugador 1, ingresa tu nombre:");
    let jugador2Nombre = prompt("Jugador 2, ingresa tu nombre:");
    let jugador1;
    let jugador2;
    let resultado = "";

    while (resultado === "") {
        jugador1 = prompt(jugador1Nombre + ", ingresa tu opción (PIEDRA, PAPEL, TIJERAS):").toUpperCase();
        jugador2 = prompt(jugador2Nombre + ", ingresa tu opción (PIEDRA, PAPEL, TIJERAS):").toUpperCase();

        if (((jugador1 === "PIEDRA") || (jugador1 === "PAPEL") || (jugador1 === "TIJERAS")) && 
            ((jugador2 === "PIEDRA") || (jugador2 === "PAPEL") || (jugador2 === "TIJERAS"))) {
            
            if (jugador1 === jugador2) {
                console.log("Empate. " + jugador1Nombre + ": " + jugador1 + ", " + jugador2Nombre + ": " + jugador2);
                resultado = ""; // continuar jugando
            } else if ((jugador1 === "PIEDRA" && jugador2 === "TIJERAS") || 
                        (jugador1 === "PAPEL" && jugador2 === "PIEDRA") || 
                        (jugador1 === "TIJERAS" && jugador2 === "PAPEL")) {
                console.log("¡" + jugador1Nombre + " ha ganado! " + jugador1Nombre + ": " + jugador1 + ", " + jugador2Nombre + ": " + jugador2);
                resultado = jugador1Nombre + " ha ganado";
            } else {
                console.log("¡" + jugador2Nombre + " ha ganado! " + jugador1Nombre + ": " + jugador1 + ", " + jugador2Nombre + ": " + jugador2);
                resultado = jugador2Nombre + " ha ganado";
            }
            
        } else {
            console.log("Alguien ha hecho trampa. " + jugador1Nombre + ": " + jugador1 + ", " + jugador2Nombre + ": " + jugador2);
            resultado = "trampa";
        }
    }
}

function ejercicio14() {
    console.log(e14);

    console.log('Triángulo de 5 asteriscos de lado');

    let n = 5;
    let asteriscos = '';

    for (let i = 1; i <= n; i++) {
        asteriscos += '* ';
        console.log(asteriscos);
    } 
}

function ejercicio15() {
    console.log(e15);
    console.log('Triángulo de 5 asteriscos de lado pero invertido');

    let n = 5;
    let asteriscos = '';

    for (let i = n; i > 0; i--) {
        asteriscos = '';
        for (let j = 1; j <= i; j++) {
            asteriscos += '* ';
        }
        console.log(asteriscos);
    }
}

function ejercicio16() {
    console.log(e16);
    let array = [9, 6, 3, 7, 15, 2, 8, 4, 1, 10];
    let arrayOrdenado = [];

    console.log('Los elementos del array son:');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    for (let i = 0; i < array.length; i++) {
        let menor = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < menor) {
                menor = array[j];
                array[j] = array[i];
                array[i] = menor;
            }
        }
    }

    console.log('El array ordenado es:');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}