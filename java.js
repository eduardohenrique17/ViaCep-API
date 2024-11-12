// `https://viacep.com.br/ws/${cepData}/json/`

function searchCEP() {
    let cep = document.querySelector("#cep").value;
 
    if (cep.length !== 8) {
       console.log('Cep invalido');
       // Mensagem de erro
    }
 
    // CEP API
    const url = `https://viacep.com.br/ws/${cep}/json/`
    fetch(url)
       .then(res => res.json())
       .then(data => {
          console.log(data)
          showResults(data)
       })
 }
 
 function showResults(data) {
    const elSelect = document.querySelector('.resultados')
    const innerResults = `
          <h2>CEP: ${data.cep}</h2>
          <p>Endereço: ${data.logradouro}</p>
          <p>Cidade: ${data.localidade} - ${data.uf}</p>  
    `
    elSelect.innerHTML = innerResults
 }