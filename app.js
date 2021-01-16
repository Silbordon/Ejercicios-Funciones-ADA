
//Ejercicios 1 sumar

// const sumar = (num1, num2) => {
//     // const result = num1 + num2;
//     // return result;
//     return num1 + num2;
// };

// //const sumar = (num1, num2) => num1 + num2;

// console.log (sumar(2,3));
// console.log(sumar(1.2,3.4));
// console.log(sumar(3,-5));




//Ejercicio 2 restar
// const restar = (a, b) => a - b;

// console.log(restar(3,2));
// console.log(restar(10,5.5));
// console.log(restar(3,5));




//Ejercicio 3 multiplicar
// const multiplicar = (a, b) => {
//     const result = a * b;
//     return result;
// };

// console.log(multiplicar(2,3));
// console.log(multiplicar(4,0.5));





//Ejercicio 4 dividir
// const dividir = (a, b) => {
//     const result = a / b;
//     return result;
// };

// console.log(dividir(2,3));
// console.log(dividir(1.2,3.4));
// console.log(dividir(3,-5));





//Ejercicio 5 par
// const esPar = (num) => {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(esPar(2));
// console.log(esPar(3));




//Ejercicio 6 Impar
// const esImpar = (num) => {
//      if (num % 2 !== 0) {
//       return true;
//     } else {
//         return false;
//     }
//  };

//  console.log(esImpar(2));
//  console.log(esImpar(3));


//Ejercicio 7 Calcular Area Triangulo
// const calcularAreaTriagulo = (base , altura) => {
//     const result = (base * altura)/2;
//     return result;
// };

// console.log(calcularAreaTriagulo(3,4));
// console.log(calcularAreaTriagulo(5,6));



//Ejercicio 8 gritar
// const dat =  prompt("Ingrese su texto");  

// const gritar = (dato) => {

// const result = `¡${dato}!`;
//  return result;
//  };

// console.log(gritar(dat));



//Ejercicio 9 Obtener nombre completo

// const nom = prompt("Ingrese su nombre");
// const apel = prompt("Ingrese su apellido");

// const obtenerNombreCompleto = (nombre, apellido) => {
// const result = `${nombre} ${apellido}`;
// return result
// };

// console.log(obtenerNombreCompleto(nom, apel));


//Ejercicio 10 saludar(nombre)
// const nombre = prompt("Ingrese su nombre");

// const saludar = (name) => {
//     const result = `Hola ${name}, un gusto en conocerte`;
//     return result;
// };

// alert(saludar(nombre));



//Ejercicio 11 Saludar gritando
// const nom = prompt("Ingrese su nombre");
// const apel = prompt("Ingrese su apellido");

// const obtenerNombreCompleto = (nombre, apellido) => {
//     const result = `${nombre} ${apellido}`;
//     return result;
// };

// const saludar = (name) => {
//     const result = `Hola ${name}, un gusto en conocerte`;
//     return result;
// };

// const gritar = (dato) => {

//     const result = `¡${dato}!`;
//     return result;
// };


// const saludarGritando = (nombre, apellido) => {
//     const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
//     const saludoCompleto = saludar(nombreCompleto);
//     const gritarSaludos = gritar(saludoCompleto);

   
//     return gritarSaludos;
// };

// alert(saludarGritando(nom,apel));




//Ejercicio 12 Obtener datos de Ciudad
// const obtenerDatosDeCiudad = (nombre, poblacion, pais) =>{
//     const result = `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`;
//     return result;
// };

// alert(obtenerDatosDeCiudad("Cordoba", "545606", "Argentina"));



//Ejercicio 13 convertir horas en segundos
// const convertirHorasEnSegundos = (horas) =>{
//     const result = horas*3600;
//     return result;
// };

//  console.log(convertirHorasEnSegundos(1));
//  console.log(convertirHorasEnSegundos(3));
//  console.log(convertirHorasEnSegundos(4.5));




//Ejercicio 14  Calcular perimetro rectangulo
// const calcularAreaTriangulo = (ancho, alto) =>{
//     const result = 2* Number(ancho + alto);
//     return result;
// };

// console.log(calcularAreaTriangulo(3.2,5));
// console.log(calcularAreaTriangulo(10,20));





//Ejercicio 15 calcular porcentaje
// const calcularPorcentaje = (numero, porcentaje) =>{
//     const result = (numero*porcentaje)/100;
//     return result;
//  };

// console.log(calcularPorcentaje(100,15));
// console.log(calcularPorcentaje(10,50));
// console.log(calcularPorcentaje(200,10));




//Ejercicio 16 Sumar Porcentaje
// const calcularPorcentaje = (numero, porcentaje) =>{
//     const result = (numero*porcentaje)/100;
//     return result;
//  };

// const sumarPorcentaje =( numero, porcentaje) =>{
// const result = Number(numero) + calcularPorcentaje(numero, porcentaje);
// return result;
// };

// console.log(sumarPorcentaje(100,15));
// console.log(sumarPorcentaje(10,50));
// console.log(sumarPorcentaje(200,10));



//Ejercicio 17 Restar Porcentaje
//  const calcularPorcentaje = (numero, porcentaje) =>{
//     const result = (numero*porcentaje)/100;
//      return result;
//   };

//  const restarPorcentaje =( numero, porcentaje) =>{
//  const result = Number(numero) - calcularPorcentaje(numero, porcentaje);
//  return result;
//  };

//  console.log(restarPorcentaje(100,15));
//  console.log(restarPorcentaje(10,40));
//  console.log(restarPorcentaje(200,10));




//Ejercicio 18 calcular FPS
// const calcularFPS = (segundos, minutos) =>{
//     const result = (segundos)*(minutos*60);
//     return result;
// };

// console.log(calcularFPS(1,1));
// console.log(calcularFPS(10,2));
// console.log(calcularFPS(2,3));




//Ejercicio 19 obtener competencia
// const obtenerCompetencia = (a,b) => {
//     const result = `${a} vs ${b}`;
//     return result;
// };

// console.log(obtenerCompetencia('JavaScript', 'Python'));
// console.log(obtenerCompetencia('Coca', 'Pepsi'));
// console.log(obtenerCompetencia('Perros', 'Gatos'));



//Ejercicio 20 generar mail
// const generarEmail = (usuario, dominio) =>{
//     const result = `${usuario}@${dominio}`;
//     return result;
// };

// console.log(generarEmail('adalovelace','gmail'));



//Ejercicio 21 es mayor de edad
// const esMayorDeEdad = (edad) =>{
//     if (edad>=18){
//         return true
//     } else{
//         return false
//     }
// };

// console.log(esMayorDeEdad(15));
// console.log(esMayorDeEdad(18));
// console.log(esMayorDeEdad(27));



//Ejercicio 22 hace calor
// const haceCalor = (temperatura) =>{
//     if (temperatura>=22){
//         return true
//     }else{
//         return false
//     }
// };

// console.log(haceCalor(12));
// console.log(haceCalor(22));
// console.log(haceCalor(5));


//Ejercicio 23 hace frio
// const haceFrio = (temperatura) => {
//     if (temperatura <= 12) {
//         return true
//     } else {
//         return false
//     }
// };
// console.log(haceFrio(12));
// console.log(haceFrio(22));
// console.log(haceFrio(3));
// console.log(haceFrio(-2));



//Ejercicio 24 calcular puntaje
// const calcularPuntaje = (facil, normal, dificil) => {

//     const ejercicio1 = facil *3;
//     const ejercicio2 = normal *5;
//     const ejercicio3 = dificil * 10;
//     return ejercicio1 + ejercicio2 + ejercicio3;
// };

// const result = calcularPuntaje(3,0,0);
// console.log(result);


//Ejercicio 25 acepta deposito
// const aceptaDeposito = ( monto) =>{
//     if (monto%10 ===0){
//         return true
//     }else{
//         return false
//     }
// };

// console.log(aceptaDeposito(440));
// console.log(aceptaDeposito(123));
// console.log(aceptaDeposito(500.50));
// console.log(aceptaDeposito(1000));