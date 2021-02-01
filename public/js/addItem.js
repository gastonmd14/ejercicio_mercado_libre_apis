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

        axios({
            method: 'post',
            url: 'http://localhost:3000/api/items',         
            data: {
                quantity: cantidad,
                productId: producto
            }
        })
            .then((result) => {
                console.log(result);
                console.log(result.status);

               if(result.data.meta.status == 201) {
                   res.redirect('http://localhost:3000/users/cart')

               } else {
                   console.log('Hay un problema');
               }

            })

            .catch((error) => {
                console.log(error);
            })
    })

})