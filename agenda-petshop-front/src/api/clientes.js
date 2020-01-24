import {  api, fetchOptions } from './config'


const listarClientes = () => 
  fetch('http://localhost:4000', fetchOptions('{clientes { id nome cpf }}')).then(resposta => resposta.json()).then(dados => dados.data.clientes)

const buscarClientePorId = id => 
  fetch('http://localhost:4000', fetchOptions(`
    query{
      cliente(id: ${id}){
        id
        nome
        cpf
      }
    }
  `)).then(resposta => resposta.json())
  .then(dados => dados.data.cliente)

const adicionarCliente = cliente => 
fetch('http://localhost:4000', fetchOptions(`
  mutation{
    adicionarCliente(nome: "${cliente.nome}", cpf: "${cliente.cpf}"){
      id
      nome
    }
  }
  `)).then(resposta => resposta.json())
      .then(dados => dados.data.cliente)

const alterarCliente = (id, cliente) =>
fetch('http://localhost:4000', fetchOptions(`
  mutation{
    atualizarCliente(id: ${id}, nome: "${cliente.nome}", cpf: "${cliente.cpf}"){
      nome
    }
  }
`)).then(resposta => resposta)
  .then(dados => dados.data)

const removerCliente = id => 
  fetch('http://localhost:4000', fetchOptions(`
    mutation {
      deletarCliente(id: ${id})
    }
  
  `))

export default {
  listarClientes,
  buscarClientePorId,
  adicionarCliente,
  alterarCliente,
  removerCliente
}