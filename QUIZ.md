¿Que es una variable y para que sirve?
-Cajitas (espacios en memoria) donde podemos guardar informacion (dependiendo de los tipos de estructuras de datos que soporte nuestro lenguaje)

¿Cual es la diferencia entre declara e inicializar una variable?
-Declarar es cuando le decimos a JS que vamos a crear una variables con un nombre en especifico, mientras que inicializar es asignarle un valor a esa variable.

¿Cual es la diferencia entre sumar y concatenar strings?
-El operador que nos permite sumar o concatenar es +. Este operador nos permite sumar cuando lo usamos con numeros.Pero cuando lo usamos con strings, lo que hace es unir(concatenar)ambos strings.

🔴EJERCICIO #1
///

let nombre = 'Carlos Raul';
let apellido = 'Arevalo Carpio';
let username = 'thecarlitos';
let edad = 19;
let mail = 'carlitosdev@hotmail.com';
let isMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;

undefined
let nombreCompleto = nombre + ' ' + apellido;
undefined
🔹nombreCompleto
🔸'Carlos Raul Arevalo Carpio'
let dineroTotal = dineroAhorrado - deudas;
undefined
🔹dineroTotal
🔸900

///

¿Qué es una función?
-Las funciones nos permiten guardar bloques de codigos para reutilizarlos y ejecutarlos a futuro 
function

¿Cuándo me sirve usar una función en mi código?
-Nos sirve cuando tenemos variables o bloques de codigo parecidos (con cambios que podrian ser parametros y argumentos) que podemos encapsular para reutilizar mas de una vez en el futuro.
O cuando el codigo es muy grande.Para ordenar y mejorar la legibilidad de nuestro codigo.

¿Cuál es la diferencia entre parámetros y argumentos de una función?
-Las funciones reciben parametros cuando las creamos y le enviamos argumentos cuando las ejecutamos.

🔴EJERCICIO DE FUNCTION

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

🟢 Mi nombre es Juan DavidCastro Gallego, pero prefiero que me digas juandc.🟢

🔸function nombreCompleto(name, lastname){
     return name + ' ' + lastname
}

🔸function saludo(name, lastname, username ){
const completeName = nombreCompleto(name, lastname);

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");
}

🔹saludo('Carlos', 'Arevalo','carlytos');

🟢Mi nombre es Carlos Arevalo, pero prefiero que me digas carlytos.🟢
```
¿Que es un condicional?

- Son la forma en la que ejecutamos un bloque de codigo u otro dependiendo de alguna condicion o validacion.

- ¿Que tipos de condicionales exiten en JS y cuales son sus diferencias?

IF (else y else if), Switch
El condicional if (con else y else if) nos permite hacer validaciones completamente distintas (si asi queremos) en cada validacion o condicional. En cambio, en el switch todos los cases se comparan con la misma variable o condicion que definimos en el switch.

¿Puedo combinar funciones y condicionales?
Si. Las funciones pueden encapsular cualquier bloque de codigo, inccluyendo condicionales.

### EJERCICIO DE REPLICAR EL COMPORTAMIENTO
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
##### SOLUCION
```js
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == 'Free'){
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoDeSuscripcion == 'ExpertDuo'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```
### CICLOS
¿Que es un ciclo?

-La forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion.

¿Que tipos de ciclos exiten en JS?
-While, for, do while.

¿Que es un cilo infinito y porque es un problema?
-Es cuando la validacion de nuestros condicionales nunca se cumple y termina toteando la aplicacion; cuando el navegador ya no puede mas de tanta ejecucion de ese bloque de codigo.

¿Puedo mezclar ciclos y condicionales?
-Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro del ciclo.

### REPLICAR EL SIGUIENTE CODIGO CON 'WHILE'
```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
### RESPUESTA 1

// Con el for podemos ejecutar el codigo sin crear  la variable //

### 'WHILE' Si necesita crear la variable!!
```js
let i = 0;
while (i < 5){
    console.log("El valor de i es: " + i);
    i++; ➡ lo agregamos para que no se dañe el codigo
}
### RESPUESTA 2 

let i = 10;
while (i >=2){
    console.log("El valor de i es: " + i);
    i--;
}
```
### Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

```js
let respuesta;
while (respuesta != '4') {
        let pregunta = prompt('Cuanto es 2 + 2')
        respuesta = pregunta;
}
```

¿Que es un array?
-Es una lista de elementos.

conts array = [1, 'jajaj', true, false]


¿Que es un objeto?
Es una lista de elementos PERO cada elemnto tiene un nombre clave



conts obj = {
    nombre: 'Fulanito',
    edad: 3,
    comidasFavoritas ['Pollo frito', 'vegetales']
};


¿Cuando es mejor usar objetos o arrays?

-Arrays cuando lo que haremos en un elemento es lo que entodos los demas (la regla se puede incumplir), Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays en sus propiedades.

🟢 Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js

function imprimirPrimerElementoArray(arr){
    console.log(arr[0])
};

imprimirPrimerElementoArray(['Juanita', 'Carlos','Luis'])
Juanita
```

🟢Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
function imprimirElementoPorElemento(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
};
imprimirElementoPorElemento(['Carro', 'Moto','Avion'])
 Carro
 Moto
 Avion
```
### NOTA: COLOCAR EL < SI EN = PARA QUE NO AGG UN UNDEFINED DEMAS

🟢Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

````js
const obj = {
    nombre: 'Fulanito',
    edad: 3,
    comidasFavoritas: ['Pollo frito', 'vegetales']
};
Object.values(obj) //Utilizamos el metodo para que nos convierta todo los obj en arrays

function imprimirElementoPorElementoObjeto(obj){
    const arr = Object.values(obj)
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}; //Tomamos la misma funcion y le modificamos los parametros(agregamos el const)

imprimirElementoPorElementoObjeto(obj)
 Fulanito
 3
 (2) ['Pollo frito', 'vegetales']
````

### Bonus: reducción de condicionales
```js
function conseguirTipoSuscripcion(suscripcion){
    if (suscripcion == 'Free'){
    console.log("Solo puedes tomar los cursos gratis");
        return;
    } 
    
    if (suscripcion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } 
    
    if (suscripcion == 'ExpertDuo'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('Ese tipo de suscripcion no existe')
};
```

 💡Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
 ```js
 const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
};

function conseguirTipoSuscripcion(suscripcion){
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripcion no existe')
};
```