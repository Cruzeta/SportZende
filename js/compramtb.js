function compramtb(){

    var qtd=document.getElementById('txtqtd')
    var pagar=document.getElementById('total')
    
    if(qtd.value.length==0){

        
    }else {

        qtd=Number(qtd.value)
        pagar=qtd*6599
        total.innerHTML =`Valor a pagar: ${pagar}€ `
       
    }

}