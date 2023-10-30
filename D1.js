/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
let esercizioNumero1 = "Primo esercizio                           "
let introduzione = "I datatype sono i tipi di dati che possono essere inclusi in una variabile o una costante e si suddividono in 3 tipi:"
let numerici = "1)i dati numerici sono dei numeri"
let string = "2)i dati di stringa possono essere sia composti da lettere che da numeri (se lo sono non hanno funzionalità matematica) e sono caratterizzati dall'uso delle virgolette alte in fase di compilazione del valore "
let booleani = "3)i dati booleani (true o false) servono per determinare se un qualcosa abbia il valore true o false"
console.log(esercizioNumero1 + introduzione + numerici + string + booleani)



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let esercizioNumero2 = "Secondo esercizio                             "
let name = "Lorenzo"
console.log(esercizioNumero2 + name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let esercizioNumero3 = "Terzo esercizio"
let numeroUno =12
let numeroDue =20
console.log(esercizioNumero3 + '                            ' + (numeroUno + numeroDue))

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let esercizioNumero4 = "Quarto esercizio"
let x = 12
console.log(esercizioNumero4 + '                   ' + x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
let esercizioNumero5 = "Quinto esercizio"
let name1 = "lorenzo"
name1 = "Zuccante"   //l'ho chiamata name1 per non rovinare l'es n°2
const prova = "una constante non può variare"
console.log(esercizioNumero5 + '                    ' + name1)
//prova = "verrà mostrato un errore nella console"
console.log(prova)


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let esercizioNumero6 = "Sesto esercizio"
console.log(esercizioNumero6 + '              ' + (4 - x))


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let esercizioNumero7 = "Settimo esercizio"
let name2 = "john"//ho cambiato nomenclatura per non rovinare es n°2-5
let name3 = "John"
console.log(esercizioNumero7)
console.log( name2 != name3)
console.log(name2.toLowerCase === name3.toLowerCase)



//!!IMPORTANTE!!  alcuni esercizi presentano nomenclatura differente dalla traccia perchè ho voluto rendere fruibile la lettura dell'esercizio dalla console. Nell esercizio numero 5 dove si chiedeva di dimostrare che una costante non può cambiare valore (facendo apparire l'errore in console) il codice l'ho messo commentato in modo tale da poter mostrare gli altri esercizi in console.