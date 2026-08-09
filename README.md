# Humanitarian Aid Assistant 🆘

Un'applicazione web leggera progettata per supportare la gestione e la pianificazione di emergenze nelle zone colpite da crisi o conflitti. L'obiettivo dell'applicazione è fornire calcoli rapidi e affidabili per il razionamento dei beni di prima necessità e la valutazione iniziale delle condizioni delle persone.

## 📂 Struttura del Progetto

App-Aiuti-Umanitari/
├── index.html   # Struttura dell'interfaccia
├── style.css    # Stili visivi e layout responsive
├── script.js    # Logica in JavaScript
└── README.md    # Documentazione del progetto

## 🛠️ Moduli dell'Applicazione

1. 💧 **Calcolo Fabbisogno Acqua:** Calcola i litri d'acqua potabile necessari in base al numero di persone e ai giorni di permanenza (basato sulle linee guida standard di emergenza OMS/WHO).
   - Formula: Totale Litri = Persone x Giorni x 3
     
2. 🌡️ **Triage Temperatura Sanitaria:** Valuta la condizione di salute di un individuo (Ipotermia, Normale, Febbre) in base alla temperatura corporea.
   - Soglie: Ipotermia: < 35.0 °C
             Normale: 35.0 °C - 37.5 °C
             Febbre: > 37.5 °C

3. 💊 **Calcolo Kit di Emergenza:** Determinare il numero di kit di primo soccorso necessari in base al numero di persone da assistere e alla gravità dello scenario operativo.
   - Criteri di distribuzione:
     Rischio standard / Basso: 1 Kit ogni 50 persone
     Rischio Moderato: 1 Kit ogni 25 persone
     Rischio Elevato / Zona di Conflitto: 1 Kit ogni 10 persone
 (Arrotondamento sempre per eccesso per garantire la copertura completa)
   

## 🛠️ Tecnologie Utilizzate

- **HTML5:** Struttura semantica e accessibile.
- **CSS3:** Interfaccia utente pulita, essenziale e responsive.
- **JavaScript (ES6):** Logica di calcolo modulare, funzioni pure e gestione degli eventi del DOM.
- **Git & GitHub:** Controllo versione e tracciamento dello sviluppo.

## 🚀 Come eseguire il progetto locale

 Non richiede installazioni o server di backend. E' sufficiente:

1. Clonare il repository o scaricare i file:
   ```bash
git clone [https://github.com/sassif32-jpg/app_aiuti_umanitari.git](https://github.com/sassif32-jpg/app_aiuti_umanitari.git)
2. Aprire il file index.html in un qualsiasi browser web.


