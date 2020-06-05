// SNACKS BLOCCO 1

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
    // var numeroUser = parseInt(prompt('dimmi un numero di 4 cifre'));
    //
    // while( !( numeroUser>= 1000 && numeroUser<=9999 )){
    //   numeroUser = parseInt(prompt('dimmi un numero di 4 cifre'))
    // }
    //
    // var numeroUserString = numeroUser.toString();
    // var numeroUserArray = numeroUserString.split("");
    //
    // var somma = 0;
    // for (var i = 0; i < numeroUserArray.length; i++) {
    //   somma = somma + parseInt(numeroUserArray[i]);
    // }
    // console.log(somma);

// SNACKS BLOCCO 2

  // SNACK 2
    // var nomi = ['gino','pino','tino', 'peppiniello'];
    // var cognomi = ['rossi','bianchi','verdi', 'totti'];
    // var listaInvitati = [];
    //
    // for (var i = 0; i < 4; i++) {
    //   var nomiLista = nomi[Math.floor(Math.random() * nomi.length)] + ' ' + cognomi[Math.floor(Math.random() * cognomi.length)];
    //   listaInvitati.push(nomiLista);
    // }
    // console.log(listaInvitati);

  // SNACK 4
    // var nomi = ['gino', 'pino', 'tino'];
    // var cognomi = ['rossi', 'verdi', 'blu', 'zio', 'babbo', 'fico'];
    //
    // for (var i = 0; i < 3; i++) {
    //   if (nomi.length < cognomi.length) {
    //     var nomiInPiu = ['tiny', 'mario', 'boe', 'pollicino', 'Franco', 'peppiniello']
    //     nomi.push(nomiInPiu[Math.floor(Math.random() * cognomi.length)]);
    //   } else{
    //       cognomi.push(nomiInPiu[Math.floor(Math.random() * nomi.length)]);
    //     }
    // }
    // console.log(nomi);
    // console.log(cognomi);

// SNACKS BLOCCO 3
  // SNACK 2
  // var n = parseInt(prompt('inserisci un numero'));
  //
  // for (var i = 0; i < n; i++) {
  //  var array = [];
  //    for (var g = 0; g < 10; g++) {
  //      var casuali = Math.floor(Math.random() * 100) + 1;
  //      array.push(casuali);
  //    }
  //  console.log(array);
  // }

  // SNACK 3
    // var primoDiv = document.getElementById("numero1");
    // var secondoDiv = document.getElementById("numero2");
    // var array = [1,2,3,4,5,6];
    //
    // for (var i = 0; i < array.length; i++) {
    //   if (array[i] % 2 === 0) {
    //     primoDiv.innerHTML += array[i] ;
    //   } else {
    //       secondoDiv.innerHTML += array[i] ;
    //     }
    // }
