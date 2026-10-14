console.log("hola")

let nombre = 'gonzalo'
const apellido = 'perez'

nombre = 'emil'
nombre = 10

// apellido = 'otro'

//operadores
// aritmeticos + - / * %

const sumar = 15 + 20

// logicos y comparacion

const edad = 20
const mayoriaDeEdad = 18
// cons mayoria_de_edad = 18

const esMayorDeEdad = edad >= mayoriaDeEdad

const nombreCompleto = 'Gonzalo' + ' ' + 'Perez'

console.log(nombreCompleto)

// estructura control de flujo

if(edad >= mayoriaDeEdad){
    console.log('Es mayor de edad')
}else if(edad == mayoriaDeEdad){
    console.log('tiene 18')
}
else{
    console.log('Es menor de edad')
}

// estructura de control de bucle

for(let i = 0;1 < 10;i++){
    console.log(i)
}

//Arreglos
const numeros = [1,true,'hola',4,5,6]

//tipos no primitivos y comparacion

const numeros1 = [1,2,3]
const numeros2 = [1,2,3]

const numeros3 = [1,2,[2,5], [1,[2]]];
console.log(numeros[3][1][0])
for(let i = 0;i < numeros.length;i++){
    console.log(numeros[i])
}

//objetos

const persona = {
    nombre:'Gonza',
    edad: 29,
    estudia: true,
    redes: [
        'instagram',
        'tiktok',
        'youtube'
    ],
    otros: {
        mascotas: 2 
    }
}

console.log(persona.edad[0])
