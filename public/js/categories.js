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

    
    let hipervinculo = document.querySelectorAll('.product-detail-info a')
     
   //   console.log(hipervinculo);
   //   console.log(hipervinculo.outerText);
         
      for(let i = 0; i < hipervinculo.length; i++) {
         hipervinculo[i].addEventListener('click', function(e) {

            e.preventDefault()
            
            fetch("http://localhost:3000/api/products/categories/" + hipervinculo[i].outerText)
               .then((response) => {
                  return response.json()
               })
               .then((resultado) => {
                  // console.log(resultado.data);

                  let titulo = document.getElementById('title')

                  let cambio1 = document.querySelector(".products-container");
                  
                  
                  resultado.data.forEach((element) => {
                     console.log(element);

                  titulo.innerHTML = 
                  `<h1 class="products-title"> ${element.category.name} </h1>`
                  
                  let discount = element.discount > 0 ? `<span> ${element.discount} % OFF</span>` : "";

                  cambio1.innerHTML = 
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
               })
         })
      }
            
      
               
 
});
