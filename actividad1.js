//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "Senati" -> "itanes"
/*HEAD
const texto = 'Senati'


console.log('Texto inverso:', texto.split('').reverse().join(''))
*/

const texto = 'Senati'
const longitud = texto.length
let completarletra = []
for(let i = longitud -1; i>=0;i--){
  let  letra = texto[i]
  completarletra.push(letra)

  if ( i<=0){
      console.log(completarletra.join(''))
  }
}


//crear una variable donde almacene una direccion de correlo electronico
//verificar si el correo es valido cuando tiene un solo @ 
// Ejemplo: Jhon@gmail.com [correcto]
// luis@gamil@.com [incorrecto]
// mariagmail.com[incorrecto]

const correo = "arteagaLeandro@Jonathag@mail.c@om"
let CantidadTexto = correo.length
let CantidadArroba = 0

for(let i=1 ; CantidadTexto >= i; i++){
    if (correo[i]=='@'){
      CantidadArroba = CantidadArroba + 1
    }
    
    if(CantidadTexto = i){
      if (CantidadArroba == 1){
        console.log("Correo correcto")

      }else if (CantidadArroba != 1){
        console.log("correo incorrecto")
      }

    
  }else if (CantidadArroba == 0 && correo.length == i){
    console.log('Error')

  }
}


