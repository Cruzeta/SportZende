function compra(){

    var qtd=document.getElementById('txtqtd')
    var pagar=document.getElementById('total')
    
    if(qtd.value.length==0){

        alert('Preencha os campos corretamente porfavor!')

    }else {

        qtd=Number(qtd.value)
        pagar=qtd*6599
        total.innerHTML =`Valor a pagar: ${pagar}€ `
       
    }

}