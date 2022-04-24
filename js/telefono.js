"use strict";
class User {
    constructor(carica, numeroChiamate) {
        this.tariffa = 0.2;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        this.carica -= (this.tariffa * minutiDurata);
        this.numeroChiamate += 1;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChimate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let FirstUser = new User(50, 0);
let SecondUser = new User(30, 0);
let ThirdUser = new User(70, 0);
document.addEventListener('DOMContentLoaded', () => {
    let testo = document.createElement('h3');
    let scelta = document.createElement('select');
    let br = document.createElement('br');
    let br2 = document.createElement('br');
    let btnAvvia = document.createElement('button');
    btnAvvia.setAttribute('id', 'Avvia');
    testo.innerHTML = 'Scegli L\'User ';
    testo.style.display = "inline";
    scelta.innerHTML = '<option value=1>1</option><option value=2>2</option><option value=3>3</option>';
    btnAvvia.innerHTML = 'Avvia Telefono';
    let userDisplay = document.createElement('div');
    let titoloUser = document.createElement('h1');
    let inputRicarica = document.createElement('input');
    let btnRicarica = document.createElement('button');
    inputRicarica.setAttribute('placeholder', ' Ammontare da ricaricare');
    btnRicarica.innerHTML = 'Ricarica';
    let inputMinChiamata = document.createElement('input');
    let btnChiamata = document.createElement('button');
    inputMinChiamata.setAttribute('placeholder', ' Durata chiamata in minuti');
    btnChiamata.innerHTML = 'Avvia Chiamata';
    let btn404 = document.createElement('button');
    btn404.innerHTML = 'Controlla carica';
    let btnAzzera = document.createElement('button');
    btnAzzera.innerHTML = 'Azzera chiamate';
    let btnNumChiamate = document.createElement('button');
    btnNumChiamate.innerHTML = 'Numero chiamate';
    document.body.append(testo, scelta, btnAvvia, br, userDisplay);
    let controllo = /^\d+$/;
    btnAvvia.addEventListener('click', () => {
        console.log('Primo: ' + FirstUser.carica + ' Secondo: ' + SecondUser.carica + ' Terzo: ' + ThirdUser.carica);
        if (scelta.value === '1') {
            userDisplay.innerHTML = '';
            titoloUser.innerHTML = 'Primo User';
            userDisplay.append(titoloUser, inputRicarica, btnRicarica, br, inputMinChiamata, btnChiamata, br2, btn404, btnAzzera, btnNumChiamate);
        }
        else if (scelta.value === '2') {
            userDisplay.innerHTML = '';
            titoloUser.innerHTML = 'Secondo User';
            userDisplay.append(titoloUser, inputRicarica, btnRicarica, br, inputMinChiamata, btnChiamata, br2, btn404, btnAzzera, btnNumChiamate);
        }
        else if (scelta.value === '3') {
            userDisplay.innerHTML = '';
            titoloUser.innerHTML = 'Terzo User';
            userDisplay.append(titoloUser, inputRicarica, btnRicarica, br, inputMinChiamata, btnChiamata, br2, btn404, btnAzzera, btnNumChiamate);
        }
    });
    btnRicarica.addEventListener('click', () => {
        if (scelta.value == '1') {
            if (controllo.test(inputRicarica.value) && inputRicarica.value != undefined) {
                let ricarica = parseInt(inputRicarica.value);
                FirstUser.ricarica(ricarica);
                console.log("carica primo user");
                alert('Hai ricaricato di ' + ricarica + '€ il tuo saldo attuale e\' di: ' + parseInt(FirstUser.carica.toFixed(2)) + '€');
                console.log('Primo: ' + FirstUser.carica + ' Secondo: ' + SecondUser.carica + ' Terzo: ' + ThirdUser.carica);
            }
            else {
                alert('Inserisci solo valori numerici');
            }
        }
        else if (scelta.value == '2') {
            if (controllo.test(inputRicarica.value) && inputRicarica.value != undefined) {
                let ricarica = parseInt(inputRicarica.value);
                SecondUser.ricarica(ricarica);
                console.log("carica 2 user");
                alert('Hai ricaricato di ' + ricarica + '€ il tuo saldo attuale e\' di: ' + parseInt(SecondUser.carica.toFixed(2)) + '€');
                console.log('Primo: ' + FirstUser.carica + ' Secondo: ' + SecondUser.carica + ' Terzo: ' + ThirdUser.carica);
            }
            else {
                alert('Inserisci solo valori numerici');
            }
        }
        else if (scelta.value == '3') {
            if (controllo.test(inputRicarica.value) && inputRicarica.value != undefined) {
                let ricarica = parseInt(inputRicarica.value);
                ThirdUser.ricarica(ricarica);
                console.log("carica 3 user");
                alert('Hai ricaricato di ' + ricarica + '€ il tuo saldo attuale e\' di: ' + parseInt(ThirdUser.carica.toFixed(2)) + '€');
                console.log('Primo: ' + FirstUser.carica + ' Secondo: ' + SecondUser.carica + ' Terzo: ' + ThirdUser.carica);
            }
            else {
                alert('Inserisci solo valori numerici');
            }
        }
    });
    btnChiamata.addEventListener('click', () => {
        if (scelta.value == '1') {
            if (controllo.test(inputMinChiamata.value) && inputMinChiamata.value != undefined) {
                let chiamata = parseInt(inputMinChiamata.value);
                FirstUser.chiamata(parseInt(chiamata.toFixed(2)));
                let minuti = (FirstUser.carica / FirstUser.tariffa);
                alert('ti rimangono ancora ' + parseInt(FirstUser.carica.toFixed(2)) + '€' + ' e ' + parseInt(minuti.toFixed(2)) + ' minuti' + ' hai chiamato ' + FirstUser.numeroChiamate);
            }
            else {
                alert('Inserisci solo valori numerici');
            }
        }
        else if (scelta.value == '2') {
            if (controllo.test(inputMinChiamata.value) && inputMinChiamata.value != undefined) {
                let chiamata = parseInt(inputMinChiamata.value);
                SecondUser.chiamata(parseInt(chiamata.toFixed(2)));
                let minuti = (SecondUser.carica / SecondUser.tariffa);
                alert('ti rimangono ancora ' + parseInt(SecondUser.carica.toFixed(2)) + '€' + ' e ' + parseInt(minuti.toFixed(2)) + ' minuti' + ' hai chiamato ' + SecondUser.numeroChiamate);
            }
            else {
                alert('Inserisci solo valori numerici');
            }
        }
        else if (scelta.value == '3') {
            if (controllo.test(inputMinChiamata.value) && inputMinChiamata.value != undefined) {
                let chiamata = parseInt(inputMinChiamata.value);
                ThirdUser.chiamata(parseInt(chiamata.toFixed(2)));
                let minuti = (ThirdUser.carica / ThirdUser.tariffa);
                alert('ti rimangono ancora ' + parseInt(ThirdUser.carica.toFixed(2)) + '€' + ' e ' + parseInt(minuti.toFixed(2)) + ' minuti' + ' hai chiamato ' + ThirdUser.numeroChiamate);
            }
            else {
                alert('Inserisci solo valori numerici');
            }
        }
    });
    btn404.addEventListener('click', () => {
        if (scelta.value == '1') {
            alert('hai ancora: ' + parseInt(FirstUser.numero404().toFixed(2)) + '€');
        }
        else if (scelta.value == '2') {
            alert('hai ancora: ' + parseInt(SecondUser.numero404().toFixed(2)) + '€');
        }
        else if (scelta.value == '3') {
            alert('hai ancora: ' + parseInt(ThirdUser.numero404().toFixed(2)) + '€');
        }
    });
    btnAzzera.addEventListener('click', () => {
        if (scelta.value == '1') {
            FirstUser.azzeraChiamate();
            alert('hai azzerato le chiamate');
        }
        else if (scelta.value == '2') {
            SecondUser.azzeraChiamate();
            alert('hai azzerato le chiamate');
        }
        else if (scelta.value == '3') {
            ThirdUser.azzeraChiamate();
            alert('hai azzerato le chiamate');
        }
    });
    btnNumChiamate.addEventListener('click', () => {
        if (scelta.value == '1') {
            alert('hai chiamato: ' + FirstUser.getNumeroChimate() + ' volte');
        }
        else if (scelta.value == '2') {
            alert('hai chiamato: ' + SecondUser.getNumeroChimate() + ' volte');
        }
        else if (scelta.value == '3') {
            alert('hai chiamato: ' + ThirdUser.getNumeroChimate() + ' volte');
        }
    });
});
