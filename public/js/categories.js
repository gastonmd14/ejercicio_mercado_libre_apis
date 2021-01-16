window.addEventListener("load", function () {
  fetch("http://localhost:3000/api/products/categories/")
    .then((response) => {
      return response.json();
    })
    .then((resultado) => {
        
      let cambio = document.querySelector(".products-container");

      resultado.data.forEach((element) => {
        let discount = element.discount > 0 ? `<span> ${element.discount} % OFF</span>` : "";

        cambio.innerHTML += 
        `<div class="col-12 col-sm-6 col-lg-4">
            <section class="product-box">
               <a href="/products/detail/${element.id} ">
                  <figure class="product-box_image">
                     <img src="/images/products/${element.image}" alt="${element.name}">
                  </figure>
                  <article class="product-box_data">
                     <h2>${element.price - (element.price * element.discount) / 100} </h2>
                        ${discount}
                     <p>${element.name} </p>
                     <i class="fas fa-truck"></i>
                  </article>
               </a>
            </section>
         </div>`;
      });
    });

//   fetch("http://localhost:3000/api/products/categories/:category")
//     .then((response) => {
//       return response.json();
//     })
//     .then((resultado) => {
//       console.log(resultado);

//       let hipervinculo = document.querySelectorAll('a')
//       hipervinculo.addEventListener('click', function(e) {
//         e.innerHTML = 
//       })
      
//     });
});
