window.addEventListener("load", function () {

    let formulario = document.getElementById('remove-item-toCart')
    
    
    console.log(formulario);


    formulario.addEventListener('submit', function(e) {
            e.preventDefault()
            console.log('Formulario sin enviar');
            let item = formulario.itemId.value
            
            console.log(item);


            axios({
                        method: 'delete',
                        url: 'http://localhost:3000/api/items',         
                        data: {
                            itemId: item
                        }
                    })
                        .then((result) => {
                            console.log(result);
                        //     console.log(result.status);
            
                        //    if(result.data.meta.status == 201) {
                        //        res.redirect('http://localhost:3000/users/cart')
            
                        //    } else {
                        //        console.log('Hay un problema');
                        //    }
            
                        })
            
                        .catch((error) => {
                            console.log(error);
                        })
            


    })

})