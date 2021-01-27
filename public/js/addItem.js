window.addEventListener("load", function () {

    let formulario = document.getElementById('add-item-toCart')
    
    
    console.log(formulario);
    


    formulario.addEventListener('submit', function(e) {
        e.preventDefault()
        console.log('Formulario sin enviar');
        let cantidad = formulario.quantity.value
        let producto = formulario.productId.value

        console.log(cantidad);
        console.log(producto);

        axios('http://localhost:3000/api/items')
            .then((result) => {
                console.log(result.status);

               if(result.status == 201) {
                   result.redirect('/users/cart')

               } else {
                   console.log('Hay un problema');
               }


                
                

            })
    })

})