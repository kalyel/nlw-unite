let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 3, 2, 10, 00)
  },
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Ana Clara Silva",
    email: "anaclara@gmail.com",
    dataInscricao: new Date(2024, 2, 1, 10, 30),
    dataCheckIn: new Date(2024, 2, 5, 15, 45)
  },
  {
    nome: "Luiz Felipe Santos",
    email: "luizfelipe@gmail.com",
    dataInscricao: new Date(2024, 2, 2, 14, 15),
    dataCheckIn: null
  },
  {
    nome: "Mariana Oliveira",
    email: "mariana@gmail.com",
    dataInscricao: new Date(2024, 1, 3, 9, 00),
    dataCheckIn: new Date(2024, 1, 7, 12, 10)
  },
  {
    nome: "Carlos Eduardo Almeida",
    email: "carloseduardo@gmail.com",
    dataInscricao: new Date(2024, 2, 4, 15, 45),
    dataCheckIn: null
  },
  {
    nome: "Juliana Costa",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2024, 2, 5, 11, 30),
    dataCheckIn: new Date(2024, 2, 9, 14, 45)
  },
  {
    nome: "Rafael Sousa",
    email: "rafael@gmail.com",
    dataInscricao: new Date(2024, 2, 6, 17, 20),
    dataCheckIn: null
  },
  {
    nome: "Fernanda Lima",
    email: "fernanda@gmail.com",
    dataInscricao: new Date(2024, 2, 7, 10, 20),
    dataCheckIn: new Date(2024, 2, 11, 13, 15)
  },
  {
    nome: "Pedro Henrique Castro",
    email: "pedrohenrique@gmail.com",
    dataInscricao: new Date(2024, 2, 8, 13, 15),
    dataCheckIn: new Date(2024, 2, 12, 16, 30)
  }
]

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to
  (participante.dataInscricao)

 let dataCheckIn = dayjs(Date.now()).to
  (participante.dataCheckIn)

  // Condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
        >
        Confirmar Check-in
      </button>    
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  // substituir informação do  HTML
  document
  .querySelector('tbody')
  .innerHTML = output
  }

  atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)
  
  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }
    // verificar se o participante ja existe
    const participanteExiste = participantes.find(
      (p) => {
        return p.email == participante.email
      }
    )

    if(participanteExiste) {
      alert('Email já cadastrado!')
      return
    }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn= (event) => {
  // confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o chek-in?'
  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find((p) =>{
    return p.email == event.target.dataset.email
  })
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  // atualizar a lista de participante
  atualizarLista(participantes)
}