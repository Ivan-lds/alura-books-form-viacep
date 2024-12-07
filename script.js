// Requisição Async Await
async function buscarEndereco(cep) {
  let mesagemDeErro = document.getElementById("erro");
  mesagemDeErro.innerHTML = ""; // Aqui é como se eu tivesse inicializando a tag do html que eu selecionei. Pra eu poder modificar depois.

  try {
    const consultarCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultarCepConvertido = await consultarCep.json();
    if (consultarCepConvertido.erro) {
      throw Error("CEP não existente!");
    } else {
      /*Qualquer coisa que eu quiser adicionar no meu html em relação a dados da API, tem que ser colocado aqui, pq essa é a opção se a requisição for bem sucedida.*/

      //Se eu colocar no catch ou no finally, não vai funcionar.
      let cidade = document.getElementById("cidade");
      let logradouro = document.getElementById("endereco");
      let estado = document.getElementById("estado");

      //Aqui eu estou pegando o valor lá no meu json e atibuindo as variáveis que eu criei.
      //É a forma de pegar dados da API.
      cidade.value = consultarCepConvertido.localidade;
      logradouro.value = consultarCepConvertido.logradouro;
      estado.value = consultarCepConvertido.uf;

      console.log(consultarCepConvertido);
      return consultarCepConvertido;
    }
  } catch (erro) {
    //Editando a tag do html que inicializei antes.
    mesagemDeErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
    console.log(erro);
  } finally {
    console.log("Requisição concluída!");
  }
}

let cep = document.getElementById("cep");

cep.addEventListener("focusout", () => {
  buscarEndereco(cep.value);
});

//O 'focusout' é quando o usuário clica fora de algum elemento.
//O addEventListener quase sempre chama uma função depois de selecionar o evento especifico.

// Aqui é um jeito para fazer várias requisições de vez.
/*
let cpes = [
  "01001-000",
  "01002-000",
  "01003-000",
  "01004-000",
  "01005-000",
  "01006-000",
  "01007-000",
  "01008-000",
  "01009-000",
  "01010-000",
  "01011-000",
  "01012-000",
  "01013-000",
  "01014-000",
  "01015-000",
  "01016-000",
  "01017-000",
  "01018-000",
  "01019-000",
  "01020-000",
  "01021-000",
  "01022-000",
  "01023-000",
  "01024-000",
  "01025-000",
];

let conjuntoCeps = cpes.map((valores) => buscarEndereco(valores));

Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));
*/

// Requisição Promise

/*
const consultarCep = fetch(objects.url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((json) => {
    if (json.erro) {
      throw Error("CEP não encontrado");
    } else {
      console.log(json);
    }
  })
  .catch((erro) => console.log(erro));

console.log(consultarCep);
*/
