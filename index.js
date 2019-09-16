

const skjemaUttak = document.querySelector("#skjemaUttak");
const skjemaInnskudd = document.querySelector("#skjemaInnskudd");
const txtSaldo = document.querySelector("#txtSaldo");
const inpUttak = document.querySelector("#inpUttak");
const inpInnskudd = document.querySelector("#inpInnskudd");
const info = document.querySelector("#info");

let saldo = 20000;

function visSaldo() {
    txtSaldo.innerText = saldo;
}

function taUtPenger(evt) {
    evt.preventDefault();

    const belop = Number(inpUttak.value);
    
    if(belop > saldo) {
        info.innerText = "Du har ikke nok spenn til å ta ut så mye."
    } else {
        saldo = saldo - belop;
        visSaldo();
        // Viser info om uttak
        info.innerText = "Du har tatt ut " + belop + " kr.";
    }   
}

function settInnPenger(evt) {
    evt.preventDefault();

    const belop = Number(inpInnskudd.value);

    saldo += belop;

    visSaldo();
    info.innerText = "Du har satt inn " + belop + " kr.";
}

visSaldo();
skjemaUttak.addEventListener("submit", taUtPenger);
skjemaInnskudd.addEventListener("submit", settInnPenger);