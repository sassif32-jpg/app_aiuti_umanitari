function calcolaAcqua(persone, giorni) {
    const litriPerPersonaAlGiorno = 3;
    return persone * giorni * litriPerPersonaAlGiorno;

    // se i giorni sono più di 14, aggiungiamo il margine del 10%
    if (giorni > 14) {
        totale = totale * 1.10; // moltiplico per 1.10 che è uguale ad aggiungere il 10%
    }
    return totale;
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

function calcolaRazioni(numPersone, numGiorni) {
    let totale = numPersone * numGiorni * 2;

    if (numGiorni > 7) {
        totale = totale * 1.15;
    }
    return totale;
}

function calcolaRifugi(numPersone) {
    const CAPIENZA_TENDA = 5; // standard 5 persone per tenda
    return Math.ceil(numPersone / CAPIENZA_TENDA);
}

function gestisciCalcoloAcqua() {
    const persone = Number(document.getElementById('numPersone').value);
    const giorni = Number(document.getElementById('numGiorni').value);
    const divRisultato = document.getElementById('risultatoAcqua');

    if (persone <= 0 || giorni <= 0) {
        divRisultato.innerText = "Inserisci valori validi maggiori di zero.";
    } 
    else {
        const totaleLitri = calcolaAcqua(persone, giorni);
        divRisultato.innerText = `Fabbisogno totale: ${Math.round(totaleLitri)} Litri d'acqua.`;
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

function gestisciCalcoloCibo() {
    const personePresenti = Number(document.getElementById('numPersoneCibo').value);
    const giorniPermanenza = Number(document.getElementById('numGiorniCibo').value);
    const divRisultato = document.getElementById('risultatoCibo');

    if (personePresenti <= 0 || giorniPermanenza <= 0) {
        divRisultato.innerText = "Inserisci numeri validi maggiori di zero.";
    } else {
    // chiamo la Business Logic per fare il calcolo
    const fabbisognoTotale = calcolaRazioni(personePresenti, giorniPermanenza);

    // inserisco il testo del risultato nel div
    divRisultato.innerText = `Razioni necessarie: ${Math.round(fabbisognoTotale)}`;
    }

    // rendo visibile il div nell'intrfaccia (mostra il riquadro)
    divRisultato.style.display = 'block';
}

function gestisciCalcoloRifugi() {
    const sfollati = Number(document.getElementById('numSfollati').value);
    const divRisultato = document.getElementById('risultatoRifugi');

    if (sfollati <=0) {
        divRisultato.innerText = `Inserisci numero di persone valido o maggiore di zero.`;
    } else {
        const tendeNecessarie = calcolaRifugi(sfollati)
        divRisultato.innerText = `Tende/Rifugi necessari: ${tendeNecessarie}`;
    }
    divRisultato.style.display = 'block';
    }

    // --LOGICA MAPPA (Leaflet.js) --

    function inizializzaMappa() {
        //1. crea la mappa e la centra su coordinate specifiche (es. latitudine, longitudine, zoom)
        const map = L.map('map').setView([43.7696, 11.2558], 6); //esempio di coordinate

        //2. carica i tasselli visivi da OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        //3. esempio di dati in tempo reale (zone coperte dagli aiuti)
        const zoneAiuto = [
            {nome: "Campo Base Alfa", lat: 43.7696, lng: 11.2558, stato: "Operativo - Acqua e Cibo"},
            {nome: "Punto Medico Bravo", lat: 41.9028, lng: 12.4964, stato: "Operativo: Triage e Kit Medici"}
        ];

        //4. aggiunge i punti sulla mappa tramite un ciclo
        zoneAiuti.forEach(zona => {
            L.marker([zona.lat, zona.lng])
                .addTo(map)
                .bindPopup(`<b>${zona.nome}</b><br>Stato: ${zona.stato}`);
        });
    }

    // inizializza la mappa quando la pagina ha finito di caricare
    window.onload = function() {
        inizializzaMappa();
    };

