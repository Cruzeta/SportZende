function compraestrada(){

    var qtd=document.getElementById('txtqtd')
    var pagar=document.getElementById('total')
    
    if(qtd.value.length==0){

        
    }else {

        qtd=Number(qtd.value)
        pagar=qtd*1599
        total.innerHTML =`Valor a pagar: ${pagar}€ `
    
    }

}