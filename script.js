function calcolaAcqua(persone, giorni) {
    const litriPerPersonaAlGiorno = 3;
    return persone * giorni * litriPerPersonaAlGiorno;

function gestisciCalcoloAccqua() {
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
