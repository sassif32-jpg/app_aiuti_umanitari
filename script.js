function calcolaAcqua(persone, giorni) {
    const litriPerPersonaAlGiorno = 3;
    return persone * giorni * litriPerPersonaAlGiorno;
}

function validaTemperatura(temperatura) {
    if (temperatura < 35.0) {
        return "IPOTERMIA";
    } else if (temperatura <= 37.5) {
        return "NORMALE";
    } else {
        return "FEBBRE";
    }
}

function calcolaKitMedici(persone, livelloRischio) {
    let personePerKit;

    if (livelloRischio === "alto") {
        personePerKit = 10;
    } else if (livelloRischio === "medio") {
        personePerKit = 25;
    } else {
        personePerKit = 50;
    }
    return Math.ceil(persone / personePerKit);
}

function gestisciCalcoloAcqua() {
    const persone = Number(document.getElementById('numPersone').value);
    const giorni = Number(document.getElementById('numGiorni').value);
    const divRisultato = document.getElementById('risultatoAcqua');

    if (persone <= 0 || giorni <= 0) {
        divRisultato.innerText = "Inserisci valori validi maggiori di zero.";
    } else {
        const totaleLitri = calcolaAcqua(persone, giorni);
        divRisultato.innerText = `Fabbisogno totale: ${totaleLitri} Litri d'acqua.`;
    }
    divRisultato.style.display = 'block';
}

function gestisciTriage() {
    const temp = Number(document.getElementById('tempPaziente').value);
    const divRisultato = document.getElementById('risultatoTriage');

    if (!temp) {
        divRisultato.innerText = "Inserisci un valore di tempertura valido.";
    } else {
        const stato = validaTemperatura(temp);
        divRisultato.innerText = `Stato paziente: ${stato}`;
    }
    divRisultato.style.display = 'block';
}

function gestisciCalcoloKit() {
    const persone = Number(document.getElementById('numPersoneKit').value);
    const livelloRischio = document.getElementById('livelloRischio').value;
    const divRisultato = document.getElementById('risultatoKit');

    if (persone <= 0) {
        divRisultato.innerText = "Inserisci un numero di persone valido e maggiore di zero";
    } else {
        const totaleKit = calcolaKitMedici(persone, livelloRischio);
        divRisultato.innerText = `Kit medici di pronto soccorso necessari: ${totaleKit}`;
    }
    divRisultato.style.display = 'block';
}
