# HTLM
*Hypertext*

*Markup*
- Tag
- Atributos

*Language*


# CSS
Cascading StyleSheet
```css
/* declarações*/
body {
  background-color: #121214;
  color: white;
}
```

# JavaScript
```JavaScript
// variaveis
const mensagem = "Oi, tudo bem?"
// tipos de dados
  // number
  // string
// funcao
alert(mensagem)
// Objeto javascript
const participante = {
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}
// array
let participantes = [
  {
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}
]
// estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante) //faça algo quanto tiver participantes nessa lista
  }
