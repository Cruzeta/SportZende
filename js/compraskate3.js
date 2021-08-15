function compraskate3(){

    var qtd=document.getElementById('txtqtd')
    var pagar=document.getElementById('total')
    
    if(qtd.value.length==0){

        

    }else {

        qtd=Number(qtd.value)
        pagar=qtd*79.99
        total.innerHTML =`Valor a pagar: ${pagar}€ `
       
    }

}