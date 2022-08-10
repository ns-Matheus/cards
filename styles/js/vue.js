var app = new Vue({
  el: '#app',
  data: {
    show: false,
    lista: [],
    valor: 0,
    carname: 0,
    cores: [],
    kg: 0,
    aceleracao: 0,
    velocidade: 0,
    aderencia: 0,
    frenagem: 0
  }
})



function mostrarcarro(carro){

  app.kg = carro.kg
  
  fetch("http://monkey_concessionaria/mostrarCarro", {
    method: 'POST',
    body: JSON.stringify({nome: carro.nome})
  }).then(function(response) {
        return response.json()
  }).then(function(json) {
   

  }).catch(function () {
        
  })
}

function mudarcor(){
  
}

function testedrive(){

}

function comprar(){

}

function sair() {
  app.show = false
  fetch("http://monkey_concessionaria/sair", {
    method: 'GET' 

  }).then(function(response) {
        return response.json()
  }).then(function(json) {
    
  }).catch(function () {
    
  })
}



document.addEventListener("DOMContentLoaded", function() {
	window.addEventListener("message", function (event) {
      var data = event.data

      if (data.acao == true) {
         app.show = true,
         app.lista = data.carros
      } 
      
      if (data.acao == 'att') {
        
      }
   })

   document.onkeyup = function(data) {
		if (data.which == 27){
         sair(false)
		}
	}

})

