
import { data } from "./data.js";

for (let i = 1; i <= data.length; i++) {

    const formateador = new Intl.NumberFormat("en");
    let insetar = document.querySelector(".gallery");
    let nueva = document.createElement("div");

    nueva.innerHTML = `    
    <div class="gallery-item" id="abrir${i}">
      <h1 class="title">${data[i].Producto}</h1>
      <img src=./img/${data[i].imagen}.jpg alt="Imagen ${data[i].imagen}">
      <div class="description">

        <p class="descripcion"> <b>Caja :</b> ${formateador.format(data[i].caja.toFixed(2))} c/u</p>
        <p class="descripcion"> <b>Media :</b> ${formateador.format(data[i].mediacaja.toFixed(2))} c/u</p>
        <p class="descripcion"> <b>Unidad :</b> ${formateador.format(data[i].unidad.toFixed(2))} c/u</p>

      </div>

    </div>
  </div>
<div class="modal" id="modal${i}">
  <div class="modal-content">
    <h2 class="modal-title" id="modal-title${i}"></h2>
    <img id="modal-image${i}" src="" alt="">
    <div class="comments">
      <div class="comment">
        <div class="comment-buttons1">
          <p class="cantidad" id="CantidadCajaCompleta${i}"></p>
          <div class="comment-text"> Caja X ${formateador.format(data[i].caja.toFixed(2))} = </div>
        </div>


        <div class="comment-buttons">
          <p class="cantidad" id="cajaCompletaXCantidad${i}">0,000.00</p>
          <button class="bmas" type="button" id="sumacajacompleta">+</button>
          <button class="nmenos" type="button" id="restacajacompleta">-</button>
        </div>
      </div>
      <div class="comment">
        <div class="comment-buttons1">
          <p class="cantidad" id="cantidadMediaCaja${i}"></p>
          <div class="comment-text"> Media X ${formateador.format(data[i].mediacaja.toFixed(2))} =</div>
        </div>


        <div class="comment-buttons">
          <p class="cantidad" id="mediacajaXcantidad${i}">0,000.00</p>
          <button class="bmas" type="button" id="sumamediacaja">+</button>
          <button class="nmenos" type="button" id="restamediacaja">-</button>
        </div>
      </div>
      <div class="comment">
        <div class="comment-buttons1">
          <p class="cantidad" id="cantidadUnidad${i}"></p>
          <div class="comment-text"> Unidad X ${formateador.format(data[i].unidad.toFixed(2))} = </div>
        </div>

        <div class="comment-buttons">
          <p class="cantidad" id="unidadXcantidad${i}">0,000.00</p>
          <button class="bmas" type="button" id="sumaUnidad">+</button>
          <button class="nmenos" type="button" id="restaUnidad">-</button>
        </div>
      </div>
      <div class="center-comment">
        <p class="total" id="cajaCompletaXCantidadT">Total = </p>
        <p class="total" id="totalCajas${i}">0.00</p>
      </div>
    </div>
    <button class="button-enviar" type="button" id="prefacturar">Enviar Prefactura</button>
    <button class="close-button" id="cerrar${i}">Cerrar</button>

  </div>
</div>

`
        ;

    // nueva.classList.add("gallery-item")

    insetar.insertAdjacentElement("afterbegin", nueva)


    // let salir = document.querySelector('#salir');


    let prefacturar = document.querySelector('#prefacturar');

    let sumaUnaCajaCompleta = document.querySelector('#sumacajacompleta');
    let restaUnaCajaCompleta = document.querySelector('#restacajacompleta');

    let sumaMediaCaja = document.querySelector('#sumamediacaja');
    let restaMediaCaja = document.querySelector('#restamediacaja');

    let sumaUnidad = document.querySelector('#sumaUnidad');
    let restaUnidad = document.querySelector('#restaUnidad');


    let cajaCompletaXCantidad = document.querySelector(`#cajaCompletaXCantidad${i}`);
    let CantidadCajaCompleta = document.querySelector(`#CantidadCajaCompleta${i}`);

    let mediacajaXcantidad = document.querySelector(`#mediacajaXcantidad${i}`);
    let cantidadMediaCaja = document.querySelector(`#cantidadMediaCaja${i}`);



    let unidadXcantidad = document.querySelector(`#unidadXcantidad${i}`);
    let cantidadunidad = document.querySelector(`#cantidadUnidad${i}`);


    let abrir = document.querySelector(`#abrir${i}`);
    let cerrar = document.querySelector(`#cerrar${i}`);



    let totalCajas = document.querySelector(`#totalCajas${i}`);

    let counterUna = 0;
    let counterMedia = 0;
    let counterunidad = 0;

    let resultadoUna = 0
    let resultadoMedia = 0
    let resultadounidad = 0

    function sumaunacaja() {
    
        counterUna++;
        resultadoUna = Number.parseFloat(data[i].caja) * counterUna
        cajaCompletaXCantidad.innerHTML = formateador.format(resultadoUna.toFixed(2));
        CantidadCajaCompleta.innerHTML = formateador.format(counterUna.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
       
    }
    function restaunacaja() {
      
        counterUna--;
        resultadoUna = Number.parseFloat(data[i].caja) * counterUna
        cajaCompletaXCantidad.innerHTML = formateador.format(resultadoUna.toFixed(2));
        CantidadCajaCompleta.innerHTML = formateador.format(counterUna.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
     
    }
    function sumaumediacaja() {
      
        counterMedia++;

        resultadoMedia = Number.parseFloat(data[i].mediacaja) * counterMedia
        mediacajaXcantidad.innerHTML = formateador.format(resultadoMedia.toFixed(2));
        cantidadMediaCaja.innerHTML = formateador.format(counterMedia.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
            }
    function restamediacaja() {
      
        counterMedia--;
        resultadoMedia = Number.parseFloat(data[i].mediacaja) * counterMedia
        mediacajaXcantidad.innerHTML = formateador.format(resultadoMedia.toFixed(2));
        cantidadMediaCaja.innerHTML = formateador.format(counterMedia.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
            }


    function sumaunidad() {
      
        counterunidad++;

        resultadounidad = Number.parseFloat(data[i].unidad) * counterunidad
        unidadXcantidad.innerHTML = formateador.format(resultadounidad.toFixed(2));
        cantidadunidad.innerHTML = formateador.format(counterunidad.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
           }
    function restaunidad() {
     
        counterunidad--;
        resultadounidad = Number.parseFloat(data[i].unidad) * counterunidad
        unidadXcantidad.innerHTML = formateador.format(resultadounidad.toFixed(2));
        cantidadunidad.innerHTML = formateador.format(counterunidad.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
         }




         function openModal() {



          let imageUrl = `./img/${data[i].imagen}.jpg`;
          let prod = `${data[i].Producto}`;
  
          console.log(imageUrl)
  
          document.getElementById(`modal-image${i}`).src = imageUrl;
          document.getElementById(`modal-title${i}`).textContent = prod;
          document.getElementById(`modal${i}`).style.display = 'flex';
        }
    
        // Función para cerrar el modal
  function closeModal() {


          document.getElementById(`modal${i}`).style.display = 'none';
        }
  
  


    // function salirf() {
    //     var imageContainers = document.querySelectorAll('.image-container');
    //     imageContainers.forEach(function (container) {
    //         container.addEventListener('click', function () {
    //             this.classList.toggle('clicked');
    //         });
    //     });

    // }

    prefacturar.addEventListener("click", e => {
      event.stopPropagation();

        // const taskId = e.target.previousSibling.previousSibling.getAttribute('id');
        // const contents = document.getElementById(taskId);


        const totalcajaCompletaXCantidad = document.getElementById(`cajaCompletaXCantidad${i}`).innerHTML;

        const totalCantidadCajaCompleta = document.getElementById(`CantidadCajaCompleta${i}`).innerHTML;
        const totalcantidadMediaCaja = document.getElementById(`cantidadMediaCaja${i}`).innerHTML;
        const totalcantidadunidad = document.getElementById(`cantidadUnidad${i}`).innerHTML;


        const totalmediacajaXcantidad = document.getElementById(`mediacajaXcantidad${i}`).innerHTML;

        const totalunidadXcantidad = document.getElementById(`unidadXcantidad${i}`).innerHTML;

        const totaltotalCajas = document.getElementById(`totalCajas${i}`).innerHTML;

        // 18092425374
        let url = `https://api.whatsapp.com/send?phone=18092425374&text= 
${data[i].Producto}           
                                                                                                            
 *${totalCantidadCajaCompleta} cajas*   ,    *${totalcantidadMediaCaja} media cajas*     y  *${totalcantidadunidad} unidad*                                                                                                                                  
${totalCantidadCajaCompleta} cajas X ${data[i].caja} = ${totalcajaCompletaXCantidad}                        
                                                                                                                
${totalcantidadMediaCaja} media cajas X ${data[i].mediacaja} 
${totalunidadXcantidad} media cajas X ${data[i].unidad} 
=  ${totalmediacajaXcantidad}   
.        total a prefacturar: *${totaltotalCajas}*      *****     al cliente:`


        window.open(url, "_blank");
        // window.focus();
    });


    sumaUnaCajaCompleta.addEventListener('click', sumaunacaja);

    restaUnaCajaCompleta.addEventListener('click', restaunacaja);

    sumaMediaCaja.addEventListener('click', sumaumediacaja);

    restaMediaCaja.addEventListener('click', restamediacaja);

    sumaUnidad.addEventListener('click', sumaunidad);

    restaUnidad.addEventListener('click', restaunidad);

    abrir.addEventListener('click', openModal);
cerrar.addEventListener('click', closeModal);

    // salir.addEventListener('click', salirf);
    // Función para abrir el modal y mostrar la imagen, título y comentarios

}








