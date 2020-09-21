
export class ExamplePageController {
    view: any;
    component = {
        id: 'example-page',
        view: 'ExamplePage.html',
        style: 'ExamplePage.scss',
        start: () => { this.start(); }
    }

    constructor() {
        this.loadView();
    }

    start() {
        
        const yecksin: any = this.findInsideMe("#yecksin");
        const jair: any = this.findInsideMe("#jair");
        const pollo: any = this.findInsideMe("#pollo");
        const tefa: any = this.findInsideMe("#tefa");
        yecksin.style.backgroundImage = "url('/assets/imagenes/yecksin.jpg')"; 
        jair.style.backgroundImage = "url('/assets/imagenes/jair.jpeg')"; 
        pollo.style.backgroundImage = "url('/assets/imagenes/pollo.jpeg')"; 
        tefa.style.backgroundImage = "url('/assets/imagenes/tefa.jpeg')"; 


        //evento cuando la pagina est;á cargada
        const pantallaDeCarga: any = this.findInsideMe(".pantallaDeCarga");
        const pantallaDeCarga2: any = this.findInsideMe(".pantallaDeCarga2");
        const pantallaDeCarga3: any = this.findInsideMe(".pantallaDeCarga3");
        setTimeout(() => {
            console.log("Cargado");
            pantallaDeCarga3.style.left = "100vw";
            // pantallaDeCarga2.style.left = "100vw";
            setTimeout(() => {
                console.log("Cargado");
                // pantallaDeCarga.style.left = "0vw";
                pantallaDeCarga2.style.left = "100vw";
                setTimeout(() => {
                    console.log("Cargado");
                    pantallaDeCarga.style.left = "100vw";
                    // pantallaDeCarga2.style.left = "100vw";
    
                }, 3000);
            }, 3000);
        }, 3000);

 
       
        // window.addEventListener('load', (event) => {
        //     console.log('page is fully loaded');
        //   });
        //   window.addEventListener("DOMContentLoaded", function(event) {
        //     console.log("DOM fully loaded and parsed");
        //   });


        //   window.addEventListener("scroll", this.mostrarScroll);
        // const checkpoint = 300;

        // let opacity = 0;
        // window.addEventListener("scroll", () => {
        //     const box: any = this.findInsideMe(".box");
        //     console.log(window.pageYOffset + " " + box.getBoundingClientRect().top);
        //     const currentScroll = window.pageYOffset;
        //     if (currentScroll <= checkpoint) {
        //         opacity = 1 - currentScroll / checkpoint;
        //     } else {
        //         opacity = 0;
        //     }

        //     box.style.opacity = opacity;
        // });



        // const box: any = this.findInsideMe(".box");
        // const TDBox: any = this.findInsideMe(".TDBox");
        // const clouds: any = this.findInsideMe(".cloud", true);
        // window.onscroll = (_: any) => {
        //     console.log(`X: ${window.scrollX} Y: ${window.scrollY}`)
        //     const p = (window.scrollY / window.innerHeight) * 100;
        //     box.style.left = `${p}%`;
        //     box.style.opacity = `${p / 100}`;

        //     clouds[0].style.left = `${p * 2}%`;
        //     clouds[1].style.left = `${p * 1.3}%`;

        //     if (window.scrollY >= 340) {
        //         TDBox.style.opacity = 1;
        //         if (window.scrollY >= 350) {
        //             TDBox.style.transform = `rotateY(${window.scrollY}deg)`;
        //         }
        //     } else {
        //         TDBox.style.opacity = 0;
        //     }
        // }
        // let element: HTMLElement =  document.querySelector(".audit")as HTMLElement;
        // element.click();
        // console.log(element.click());
        const personaje: any = this.findInsideMe(".personaje");
        let audit = document.querySelector(".audit") ;
        audit.addEventListener('mouseover', function () {
            
            personaje.style.left = 0;
        });
        // document.querySelector(".audit").onclick = () => {

        // };

        // document.querySelector('#send_top').onclick = function() { 
        //     alert('bla bla'); 
        // }

        //animacion fadeinscroll

        window.addEventListener("scroll", this.mostrarScroll);
        window.addEventListener("scroll", function () {
           
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-120px";
            }
            prevScrollpos = currentScrollPos;
        

    });

        //animacion ocultar nav en scroll

        var prevScrollpos = window.pageYOffset;
    


    }

    findInsideMe(selector: string, all = false) {
        const query = `#app #${this.component.id} ${selector}`;
        if (!all) {
            return document.querySelector(query);
        } else {
            return document.querySelectorAll(query);

        }
    }

    loadView() {
        require(`./${this.component.style}`);
        this.view = require(`./${this.component.view}`);
    }

    getView(): [string, DocumentFragment] {
        return [this.component.id, document.createRange().createContextualFragment(this.view)];
    }
    fade: any;
    mostrarScroll() {
        var h = window.innerHeight;
        this.fade = document.querySelectorAll(".fadeInScroll"); //todos lo que tiene la clase fadeinscroll
        let scrollTop = document.documentElement.scrollTop; // scroll en Y (vertical) contando desde su parte inicial
        console.log(this.fade.length);
        for (var i = 0; i < this.fade.length; i++) { // animado.length es un array de todos los divs o compoenntes que tiene la clase .animado
            let alturaAnimado = this.fade[i].offsetTop; // ubicacion del div contnado desde su parte superior
            if (alturaAnimado - ((h / 2)) < scrollTop) {
                this.fade[i].style.opacity = 1;
                this.fade[i].classList.add("trasladarArriba");
            }
        }
    }


    showPersonaje()
{
    console.log("Show plloo");
}



}
