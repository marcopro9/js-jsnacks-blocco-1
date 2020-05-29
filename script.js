// SNACK 1
  // var primoNum = parseInt(prompt('scrivi un numero'));
  // var secondoNum = parseInt(prompt('scrivi un\'altro numero'));
  //
  // if (primoNum > secondoNum){
  //   console.log(primoNum);
  // } else if (primoNum < secondoNum) {
  //     console.log(secondoNum);
  //   } else {
  //       console.log('i numeri sono uguali');
  //     }

// SNACK 2
  // var parolaUno = prompt('scrivi una parola');
  // var parolaDue = prompt('scrivi un\'altra parola');
  //
  // if (parolaUno.length > parolaDue.length){
  //   console.log('la parola ' + parolaDue + ' è più corta');
  // } else if (parolaUno.length < parolaDue.length) {
  //     console.log('la parola ' + parolaUno + ' è più corta');
  //   } else {
  //       console.log('le parole sono lunghe uguali');
  //     }

// SNACK 3
  // versione con FOR
    // var somma = 0 ;
    //
    // for (var i = 0; i < 5; i++) {
    //   var numeri = parseInt(prompt('scrivi un numero'));
    //   somma += numeri;
    // }
    // console.log(somma);

  // // versione con WHILE
  //   var somma = 0 ;
  //   var i = 0;
  //
  //   while (i < 5){
  //     var numeri = parseInt(prompt('scrivi un numero'));
  //     somma += numeri;
  //     i++
  //     console.log(somma);
  //   }

//  SNACK 4
  // var invitati = ['peppinello', 'giovannino', 'ajeje', 'elton john', 'gigione','gianni celeste'];
  // var username = prompt('scrivi il tuo nome, vediamo se sei nella lista');
  // var userAccepted = false;
  //
  // for (var i = 0; i < invitati.length; i++) {
  //   if (username == invitati[i]) {
  //     userAccepted = true;
  //   }
  // }
  //
  // if (userAccepted){
  //   alert('Gatsby ti accetta')
  // } else if(!userAccepted){
  //     alert('Gatsby ti respinge, stai a casa');
  //   }

// SNACK 5
  var numeroUser = parseInt(prompt('dimmi un numero di 4 cifre'));

  while( !( numeroUser>= 1000 && numeroUser<=9999 )){
    numeroUser = parseInt(prompt('dimmi un numero di 4 cifre'))
  }

  var numeroUserString = numeroUser.toString();
  var numeroUserArray = numeroUserString.split("");

  var somma = 0;
  for (var i = 0; i < numeroUserArray.length; i++) {
    somma = somma + parseInt(numeroUserArray[i]);
  }
  alert(somma);
