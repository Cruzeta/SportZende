function hora(){

    
    var frase=document.getElementById("frase")
    var hora=new Date()
    var time=hora.getHours()
    

    if(time>1 && time<=12){

        frase.innerHTML="Olá, bom dia caso querira contactar-nos por e-mail ou caso queria ligar tem aqui as respetivas formas"

    }else if(time>=13 && time<20){

        frase.innerHTML="Olá, boa tarde caso querira contactar-nos por e-mail ou caso queria ligar tem aqui as respetivas formas"
        
    }else{

        frase.innerHTML="Olá, boa noite caso querira contactar-nos por e-mail ou caso queria ligar tem aqui as respetivas formas"
    }

}