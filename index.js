          const perguntas = [
            {
              pergunta: "Qual é o nome do protagonista de Dragon Ball?",
              respostas: [
                "Son Goku",
                "Vegeta",
                "Piccolo",
              ],
              correta: 0 // Son Goku
            },
            {
              pergunta: "Quem é o príncipe da raça Saiyajin?",
              respostas: [
                "Son Goku",
                "Vegeta",
                "Gohan",
              ],
              correta: 1 // Vegeta
            },
            {
              pergunta: "Qual é a técnica de ataque característica de Piccolo?",
              respostas: [
                "Kamehameha",
                "Final Flash",
                "Special Beam Cannon",
              ],
              correta: 2 // Special Beam Cannon
            },
            {
              pergunta: "Quem é o mestre de Son Goku?",
              respostas: [
                "Mestre Kame",
                "Piccolo",
                "Mr. Satan",
              ],
              correta: 0 // Mestre Kame
            },
            {
              pergunta: "Qual é o nome da fusão  de Goku e Vegeta?",
              respostas: [
                "Gogeta",
                "Vegito",
                "Gohan",
              ],
              correta: 0 // gogeta
            },
            {
              pergunta: "Quem é o primeiro vilão enfrentado por Goku na série Dragon Ball Z?",
              respostas: [
                "Freeza",
                "Cell",
                "Raditz",
              ],
              correta: 2 // Raditz
            },
            {
              pergunta: "Qual é o nome do planeta natal dos Saiyajins?",
              respostas: [
                "Terra",
                "Namekusei",
                "Vegeta",
              ],
              correta: 2 // Vegeta
            },
            {
              pergunta: "Qual é o nome do irmão mais velho de Goku?",
              respostas: [
                "Gohan",
                "Raditz",
                "Goten",
              ],
              correta: 1 // Raditz
            },
            {
              pergunta: "Quem é o príncipe dos Namekuseijins?",
              respostas: [
                "Dende",
                "Piccolo",
                "Nail",
              ],
              correta: 2 // Nail
            },
            {
              pergunta: "Qual é o nome do pai de Goku?",
              respostas: [
                "Bardock",
                "Rei Vegeta",
                "Broly",
              ],
              correta: 0 // Bardock
            },
          ];

          const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
