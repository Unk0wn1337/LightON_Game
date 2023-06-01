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
        this.#divElem.on("click",() => {
            this.#kattintasTrigger();
        });

        
    }
    setAllapot(){
     
    }
    #szinBeallit(){
        

    }

    #kattintasTrigger(){
        const esemenyTrigger = new CustomEvent("kapcsolas", {detail: this});
        this.#allapot = this.#allapot === 0 ? 1 : 0;
        this.#divElem.removeClass(this.#allapot === 0 ? "zold" : "sarga");
        this.#divElem.addClass(this.#allapot === 0 ? "sarga" : "zold");
        window.dispatchEvent(esemenyTrigger);
    }

}
export default Lampa;