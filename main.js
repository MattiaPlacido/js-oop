// In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi. La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
// marca
// anno
// colore
// Successivamente:
// Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
// Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
// Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()
// BONUS
// In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
// Successivamente:
// Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
// Stampiamo il numero di porte e il tipo di carburante.

//CLASSES
class Veicolo {
  marca;
  anno;
  colore;
  targa;

  constructor(marca, anno, colore, targa) {
    this.marca = marca;
    this.anno = anno;
    this.colore = colore;
    this.targa = targa;
  }

  informazioni() {
    console.log(this);
  }

  calcolaEta() {
    return `La vettura di targa ${this.targa} ha ${2024 - this.anno} anni`;
  }
}

class Automobile extends Veicolo {
  nPorte;
  tipoCarburante;

  constructor(nPorte, tipoCarburante, marca, anno, colore, targa) {
    super(marca, anno, colore, targa);
    this.nPorte = nPorte;
    this.tipoCarburante = tipoCarburante;
  }

  informazioni() {
    console.log(`Quest'auto ha ${this.nPorte} e va a ${this.tipoCarburante}`);
  }
}

//MAIN
const fiat = new Veicolo("Fiat", 2019, "Blu", "TargaFiat");

fiat.informazioni();
console.log(fiat.calcolaEta());

const opel = new Automobile(
  "4 porte",
  "benzina",
  "Opel",
  2020,
  "nera",
  "TargaOpel"
);

opel.informazioni();
console.log(opel.calcolaEta());
