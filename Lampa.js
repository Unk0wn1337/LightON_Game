class Lampa{
 #allapot;
 #id;
 #divElem;
    constructor(id, allapot, szuloELEM){
        this.#id = id;
        this.#allapot = allapot;
        this.#divElem = $("<div></div>")
        this.#divElem.addClass("kor");
        this.#divElem.addClass(allapot === 0 ? "sarga" : "zold");
        szuloELEM.append(this.#divElem);
    
        
    }
    setAllapot(){

    }
    #szinBeallit(){

    }
    #kattintasTrigger(){
        const esemenyTrigger = new CustomEvent("kapcsolas", {detail: this});
        window.dispatchEvent(esemenyTrigger);
    }

}
export default Lampa;