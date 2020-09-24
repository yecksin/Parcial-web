export class ExamplePageController {
  view: any;
  component = {
    id: "example-page",
    view: "ExamplePage.html",
    style: "ExamplePage.scss",
    start: () => {
      this.start();
    },
  };

  constructor() {
    this.loadView();
  }

  start() {
    //animacion de habilidades
    this.seccionHabilidades();
    //pantalla de carga
    this.pantallaDeCarga();
    
    //abrir y cerrar menu en 
    this.menuAction();
    this.menuClose();

    //Muestra el contenido de las secciones
    window.addEventListener("scroll", this.mostrarScroll);
    //animacion de la barra menu (muestra/oculta)
    window.addEventListener("scroll", function () {
      var currentScrollPos = window.pageYOffset;//posicion del scroll, desde su parte superior
      if (prevScrollpos > currentScrollPos) {//verifica si el scroll se devolvio hacia arriba
        document.getElementById("navbar").style.top = "0";//windows
        document.querySelector('.menu-list').classList.remove('menu-open');//movil
      } else {//oculta el menu cuando el scroll baja
        document.getElementById("navbar").style.top = "-120px";// windows
        document.querySelector('.menu-list').classList.remove('menu-open');//movil
      }
      prevScrollpos = currentScrollPos;//asignar posicion actual
    });

    //animacion ocultar nav en scroll

    var prevScrollpos = window.pageYOffset;
  }
  //retorna queryselector de lo que buscamos
  findInsideMe(selector: string, all = false) {
    const query = `#app #${this.component.id} ${selector}`;
    if (!all) {
      return document.querySelector(query);
    } else {
      return document.querySelectorAll(query);
    }
  }
  //carga las vista de lo componentes
  loadView() {
    require(`./${this.component.style}`);
    this.view = require(`./${this.component.view}`);
  }
  //
  getView(): [string, DocumentFragment] {
    return [
      this.component.id,
      document.createRange().createContextualFragment(this.view),
    ];
  }
  //Muestra el contenido de las secciones por scroll
  fade: any;
  mostrarScroll() {
    var h = window.innerHeight; // h obtiene la altura de la pantalla
    this.fade = document.querySelectorAll(".fadeInScroll"); //todos lo que tiene la clase fadeinscroll
    let scrollTop = document.documentElement.scrollTop; // scroll en Y (vertical) contando desde su parte inicial
    for (var i = 0; i < this.fade.length; i++) { // recorremos todos lo que tiene la clase fadeinscroll
      // animado.length es un array de todos los divs o compoenntes que tiene la clase .animado
      let alturaAnimado = this.fade[i].offsetTop; // ubicacion del div contnado desde su parte superior
      if (alturaAnimado - h / 2 < scrollTop) { // si el div es menor a la pos del scroll lo hace aparecer con un fade in
        this.fade[i].style.opacity = 1;
        this.fade[i].classList.add("trasladarArriba"); //agrega la clase trasladar arriba para generar una animacion de movimiento
      }
    }
  }
  //prueba
  showPersonaje() {
    console.log("Show plloo");
  }
  //abrir con el menu con icono hamburguesa
  menuAction() {
    let menu = document.querySelector("#menu-btn");//asignar los componetes de menu-btn
    menu.addEventListener("click", function () {//iteraccion click con icono 
      document.querySelector('.menu-list').classList.toggle('menu-open');//muestra el menu
      //   personaje.style.left = 0;
    });
  }
  //cerrar menu con el icono hamburguesa
  menuClose() {
    let menu = document.querySelector(".menu-list");//asignar los componetes de menu-btn
    menu.addEventListener("click", function () {//iteraccion click con las secciones
      document.querySelector('.menu-list').classList.remove('menu-open');//cierra el menu
      //   personaje.style.left = 0;
    });
  }
  //animacion de pantalla de carga 
  pantallaDeCarga() {
    //instacion de div para la imagnes
    const yecksin: any = this.findInsideMe("#yecksin");
    const jair: any = this.findInsideMe("#jair");
    const pollo: any = this.findInsideMe("#pollo");
    const tefa: any = this.findInsideMe("#tefa");
    //asignacion de imagenes
    yecksin.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/libros-83711.appspot.com/o/yecksin.jpg?alt=media&token=d6f75e21-4e50-4d98-9eb1-0f2d3b0ecbc5')";
    jair.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/libros-83711.appspot.com/o/jair.jpeg?alt=media&token=be65b6d3-b018-4880-9a72-8d2de108b4f8')";
    pollo.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/libros-83711.appspot.com/o/pollo.jpeg?alt=media&token=f34cca24-640d-4a10-b1ba-3950e5e0fa82')";
    tefa.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/libros-83711.appspot.com/o/tefa.jpeg?alt=media&token=d2dfa660-520c-44d8-b6df-246c954cbeca')";

    //evento cuando la pagina est;á cargada
    const pantallaDeCarga: any = this.findInsideMe(".pantallaDeCarga");
    const pantallaDeCarga2: any = this.findInsideMe(".pantallaDeCarga2");
    const pantallaDeCarga3: any = this.findInsideMe(".pantallaDeCarga3");
    const pantallaDeCarga4: any = this.findInsideMe(".pantallaDeCarga4");
    //animacion
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
          setTimeout(() => {
            console.log("Cargado");
            // pantallaDeCarga4.style.left = "100vw";
            // pantallaDeCarga2.style.left = "100vw";

          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);

    //reproducion del video
    let menu = document.querySelector(".iniciar");//seleciona el boton iniciar
    menu.addEventListener("click", function () {
      console.log("musica");
      // var audio = new Audio('https://firebasestorage.googleapis.com/v0/b/phaserserver-af18d.appspot.com/o/audio.mp3?alt=media&token=955f137b-7701-46b7-9763-4ae6118a0efd');
      // audio.play();
      pantallaDeCarga4.style.left = "100vw";//mover la pantalla de carga hacia la derecha

      var video: any;
      video = <HTMLProgressElement>document.getElementById("video");//instacia la etiqueta del video

      video.play();//repoduce el video cuando interactua con iniciar
      setTimeout(() => {//ocultar la pantalla de carga
        pantallaDeCarga.style.display = "none";
        pantallaDeCarga2.style.display = "none";
        pantallaDeCarga3.style.display = "none";
        pantallaDeCarga4.style.display = "none";
      }, 1000);
    });

  }
  //animacion de las progresiones
  seccionHabilidades() {
    const personaje: any = this.findInsideMe(".personaje");
    let progreso = <HTMLProgressElement>document.querySelector("#progreso");//instacia la barra de progreso
    let progresoPorcentaje = document.querySelector("#progreso-porcentaje");//instacia etiqueta del texto porcentaje
    let progrespNombre = document.querySelector("#progresp-nombre");//instacia el titulo de la habilidad
    //en los siguientes eventos cambia el valor de porcentaje, nombre de la habilidad y la barra de progreso
    //adution animacion 
    let audit = document.querySelector(".audit");
    audit.addEventListener("mouseover", function () {
      progreso.value = 60;
      progresoPorcentaje.innerHTML = "60%";
      progrespNombre.innerHTML = "Adobe Audition";
      //   personaje.style.left = 0;
    });
    //photoshop
    let photo = document.querySelector(".photo");
    photo.addEventListener("mouseover", function () {
      progreso.value = 50;
      progresoPorcentaje.innerHTML = "50%";
      progrespNombre.innerHTML = "Adobe Photoshop";
      //   personaje.style.left = 0;
    });
    //premier
    let prem = document.querySelector(".prem");
    prem.addEventListener("mouseover", function () {
      progreso.value = 70;
      progresoPorcentaje.innerHTML = "70%";
      progrespNombre.innerHTML = "Adobe Premiere";
      //   personaje.style.left = 0;
    });
    //ilustrator
    let illus = document.querySelector(".illus");
    illus.addEventListener("mouseover", function () {
      progreso.value = 40;
      progresoPorcentaje.innerHTML = "40%";
      progrespNombre.innerHTML = "Adobe Illustrator";
      //   personaje.style.left = 0;
    });
    //Vscode
    let img1 = document.querySelector(".Vscode");
    img1.addEventListener("mouseover", function () {
      progreso.value = 60;
      progresoPorcentaje.innerHTML = "60%";
      progrespNombre.innerHTML = "Visual Studio Code";
      //   personaje.style.left = 0;
    });
    //chtml
    let img2 = document.querySelector(".chtml");
    img2.addEventListener("mouseover", function () {
      progreso.value = 80;
      progresoPorcentaje.innerHTML = "80%";
      progrespNombre.innerHTML = "Html";
      //   personaje.style.left = 0;
    });
    //angular
    let img4 = document.querySelector(".angular");
    img4.addEventListener("mouseover", function () {
      progreso.value = 70;
      progresoPorcentaje.innerHTML = "70%";
      progrespNombre.innerHTML = "Angular js";
      //   personaje.style.left = 0;
    });
    //node
    let img3 = document.querySelector(".node");
    img3.addEventListener("mouseover", function () {
      progreso.value = 75;
      progresoPorcentaje.innerHTML = "75%";
      progrespNombre.innerHTML = "Node js";
      //   personaje.style.left = 0;
    });
  }
}
