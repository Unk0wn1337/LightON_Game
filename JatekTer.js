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
            this.#allapotLista[index] = Math.round(Math.random() * 1);
        }
        for (let index = 0; index < this.#allapotLista.length; index++) {
            const lampi = new Lampa(index, this.#allapotLista[index], szuloELEM);
            
        }
            
    }
    #setAllapotLista(){


    }
    #szomszedokKeresese(id){

    }
    #init(){

    }
    #ellenorzes(){


    }
}
export default JatekTer;