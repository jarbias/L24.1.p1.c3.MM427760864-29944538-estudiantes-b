/*/Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota 
máxima es 20, y que los estudiantes aprueban con un mínimo de 10. 
 EJERCICIOS MICRO MARATÓN Nº4 - CORTE 3 
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que 
retorne los nombres de los estudiantes aprobados. 
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14} /*/
let estudiantes = [
  { nombre: "juan", semestre: 5, nota: 14 },
  { nombre: "Luis", semestre: 4, nota: 10 },
  { nombre: "pedro", semestre: 6, nota: 9 },
  { nombre: "angel", semestre: 3, nota: 5 },
  { nombre: "lucas", semestre: 6, nota: 7 },
  { nombre: "irina", semestre: 5, nota: 18 },
];

let aprobados =(estudiantes) => {
  let aprobados = [];
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota >= 10) {
      aprobados.push(estudiantes[i].nombre);
    }
  }
  return aprobados;
} 

let salida = document.getElementById("salida");
let estudiantesaprobados = aprobados(estudiantes);
salida.innerHTML += "los estudiantes aprobados son: " + "<br>";
estudiantesaprobados.forEach((estudiante) => {
   
    salida.innerHTML +=   "nombre: "+ estudiante + "<br>";
});
