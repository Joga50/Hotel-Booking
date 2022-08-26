// tipo de usuario: 1:administrador 2:cliente

// const usuarios = [
//  {
//     nombre: "jose",
//     numeroDeDocumento: 1234234,
//     contrasena: "anochinga2",
//     tipoDeUsuario: 2,
//   },
// ];
// function cajero(documento, contra) {
// if ((!documento || !contra )) {
//     return "el documento o la contraseña especifiado no existe, porfavor intente de nuevo"
// } else if (

// ) {

// }

// }
const minDate = new Date("08-24-2022");
const min2Date = new Date("08-29-2022");
const minimalDate =
  minDate.getFullYear() +
  "-0" +
  (minDate.getMonth() + 1) +
  "-" +
  minDate.getDate();
console.log(min2Date.getTime() - minDate.getTime() <= 432000000);
