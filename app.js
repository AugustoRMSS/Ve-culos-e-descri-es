function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string sem nada
  if (!campoPesquis) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar a marca ou modelo de um veículo</p>"
      return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // String que armazenará o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Para cada dado dentro da lista de dados, cria um elemento HTML com as informações do dado
  // e adiciona à string 'resultados'
  for (let dado of dados) {
    titulo = dado.titulo.toLocaleLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase ()
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          resultados += `
              <div class="item-resultado">
                  <h2>
                      <a href="#" target="_blank">${dado.titulo}</a>
                  </h2>
                  <p class="descricao-meta">${dado.descricao}</p>
                  <a href="${dado.link}" target="_blank">Mais informações</a>
              </div>
          `;
      }
  }

  if (!resultados) {
     resultados = "<p>Nada foi encontrado</p>"
  }

  // Substitui o conteúdo da seção pelos resultados da pesquisa
  section.innerHTML = resultados;
}

// Chamada da função (exemplo):
document.getElementById("botao-pesquisar").addEventListener("click", pesquisar);