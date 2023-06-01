import Lampa from "./Lampa.js";
class JatekTer{
    #db;
    #allapotLista = [];
    #meret;
    #lepes;
    constructor(meret){
        const szuloELEM = $("#JatekTer");
        this.#meret = meret * meret;
        for (let index = 0; index < this.#meret; index++) {
            if (Math.random() <= 0.2) {
              this.#allapotLista[index] = 0;
            } else {
              this.#allapotLista[index] = 1;
            }
          }
        for (let index = 0; index < this.#allapotLista.length; index++) {
            const lampi = new Lampa(index, this.#allapotLista[index], szuloELEM);
            
        }
            
    }
    #setAllapotLista(){


    }
    #szomszedokKeresese(){

    }
    #init(){
        

    }
    #ellenorzes(){


    }
}
export default JatekTer;