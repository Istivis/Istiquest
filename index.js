const perguntas = [
  {
    pergunta: "Qual é o nome do protagonista de Dragon Ball?",
    respostas: ["Goku", "Vegeta", "Gohan"],
    correta: 0
  },
  {
    pergunta: "Quem é o príncipe dos Saiyajins?",
    respostas: ["Goku", "Vegeta", "Piccolo"],
    correta: 1
  },
  {
    pergunta: "Qual é a técnica de ataque mais famosa de Goku?",
    respostas: ["Final Flash", "Kamehameha", "Rasengan"],
    correta: 1
  },
  {
    pergunta: "Quem é o criador de Dragon Ball?",
    respostas: ["Masashi Kishimoto", "Akira Toriyama", "Eiichiro Oda"],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do planeta natal dos Saiyajins?",
    respostas: ["Namekusei", "Terra", "Vegeta"],
    correta: 2
  },
  {
    pergunta: "Quem é o irmão mais velho de Goku?",
    respostas: ["Raditz", "Nappa", "Bardock"],
    correta: 0
  },
  {
    pergunta: "Qual é a cor do cabelo de Goku na transformação Super Saiyajin?",
    respostas: ["Vermelho", "Verde", "Amarelo"],
    correta: 2
  },
  {
    pergunta: "Qual é o mestre de Goku?",
    respostas: ["Korin", "Mestre Kame", "Karin"],
    correta: 1
  },
  {
    pergunta: "Quem é o arqui-inimigo de Goku?",
    respostas: ["Cell", "Freeza", "Majin Buu"],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do filho mais velho de Goku?",
    respostas: ["Goten", "Trunks", "Gohan"],
    correta: 2
  },
  {
    pergunta: "Quem é o deus da destruição do Universo 7?",
    respostas: ["Bills", "Whis", "Zeno"],
    correta: 0
  },
  {
    pergunta: "Qual é a profissão de Bulma?",
    respostas: ["Cientista", "Policial", "Cozinheira"],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do pai de Goku?",
    respostas: ["Bardock", "King Vegeta", "Raditz"],
    correta: 0
  },
  {
    pergunta: "Quem é o discípulo de Goku?",
    respostas: ["Trunks", "Gohan", "Yamcha"],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do androide criado pelo Dr. Gero?",
    respostas: ["Android 16", "Cell", "Majin Buu"],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da nave espacial de Vegeta?",
    respostas: ["Capsule Corp", "Babidi's Ship", "Pilaf Machine"],
    correta: 0
  },
  {
    pergunta: "Quem é o pai de Piccolo?",
    respostas: ["Kami", "Guru", "Daimao"],
    correta: 2
  },
  {
    pergunta: "Qual é a transformação mais poderosa de Goku?",
    respostas: ["Ultra Instinto", "Super Saiyajin 3", "Super Saiyajin 2"],
    correta: 0
  },
  {
    pergunta: "Quem é o último vilão da saga Dragon Ball Z?",
    respostas: ["Cell", "Freeza", "Majin Buu"],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do planeta que Goku nasceu?",
    respostas: ["Planeta Namekusei", "Planeta Terra", "Planeta Vegeta"],
    correta: 2
  },
  {
    pergunta: "Quem é o irmão de Vegeta?",
    respostas: ["Raditz", "Nappa", "Bardock"],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do filho de Vegeta?",
    respostas: ["Goten", "Trunks", "Gohan"],
    correta: 1
  },
  {
    pergunta: "Quem é o deus da criação?",
    respostas: ["Bills", "Zeno", "Whis"],
    correta: 2
  },
  {
    pergunta: "Quem é o pai de Bulma?",
    respostas: ["Dr. Briefs", "Dr. Gero", "Dr. Wheelo"],
    correta: 0
  },
  {
    pergunta: "Quem matou Goku pela primeira vez?",
    respostas: ["Vegeta", "Freeza", "Piccolo"],
    correta: 1
  },
  {
    pergunta: "Qual é a técnica de teletransporte instantâneo de Goku?",
    respostas: ["Instant Transmission", "Solar Flare", "Kaioken"],
    correta: 0
  },
  {
    pergunta: "Qual é a cor da esfera do dragão de quatro estrelas?",
    respostas: ["Amarela", "Azul", "Verde"],
    correta: 2
  },
  {
    pergunta: "Quem é o irmão mais velho de Gohan?",
    respostas: ["Raditz", "Goten", "Goku"],
    correta: 2
  },
  {
    pergunta: "Qual é a transformação intermediária de Goku entre Super Saiyajin e Super Saiyajin 3?",
    respostas: ["Super Saiyajin 2", "Super Saiyajin God", "Super Saiyajin Blue"],
    correta: 0
  },
  {
    pergunta: "Quem é o melhor amigo de Goku?",
    respostas: ["Piccolo", "Krillin", "Vegeta"],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da esposa de Goku?",
    respostas: ["Chi-Chi", "Bulma", "Videl"],
    correta: 0
  },
  {
    pergunta: "Quem é o pai de Goten?",
    respostas: ["Vegeta", "Gohan", "Goku"],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do planeta onde ocorre o Torneio do Poder em Dragon Ball Super?",
    respostas: ["Planeta Namekusei", "Planeta Terra", "Planeta Supremo"],
    correta: 2
  },
  {
    pergunta: "Quem é o pai de Pan?",
    respostas: ["Gohan", "Goku", "Vegeta"],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do filho mais novo de Goku?",
    respostas: ["Goten", "Trunks", "Gohan"],
    correta: 1
  },
  {
    pergunta: "Quem é o filho mais velho de Vegeta?",
    respostas: ["Trunks", "Goten", "Gohan"],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do pai de Piccolo?",
    respostas: ["Kami", "Guru", "Daimao"],
    correta: 2
  },
  {
    pergunta: "Qual é a transformação de Freeza que possui uma forma dourada?",
    respostas: ["Forma Final", "Forma Dourada", "Forma de Androide"],
    correta: 1
  },
  {
    pergunta: "Quem é o avô de Goku?",
    respostas: ["Raditz", "Bardock", "Vegeta"],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do pai de Vegeta?",
    respostas: ["Bardock", "King Vegeta", "Raditz"],
    correta: 1
  },
  {
    pergunta: "Quem é o criador das Esferas do Dragão?",
    respostas: ["Kami", "Dende", "Guru"],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do único sobrevivente do extermínio da raça Saiyajin?",
    respostas: ["Vegeta", "Broly", "Goku"],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do planeta que é o cenário principal em Dragon Ball Super?",
    respostas: ["Planeta Namekusei", "Planeta Terra", "Planeta Supremo"],
    correta: 2
  },
  {
    pergunta: "Quem é o pai de Trunks?",
    respostas: ["Vegeta", "Goku", "Gohan"],
    correta: 0
  },
  {
    pergunta: "Quem é o mestre da Técnica da Dança Metamoru?",
    respostas: ["Kami", "Piccolo", "Mestre Kame"],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do último vilão da saga Dragon Ball?",
    respostas: ["Cell", "Freeza", "Majin Buu"],
    correta: 2
  },
  {
    pergunta: "Quem é o guardião da Terra?",
    respostas: ["Piccolo", "Kami", "Dende"],
    correta: 1
  },
  {
    pergunta: "Quem é o pai de Gohan?",
    respostas: ["Vegeta", "Goku", "Piccolo"],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do filho de Gohan?",
    respostas: ["Goten", "Trunks", "Goku Jr."],
    correta: 0
  },
  {
    pergunta: "Qual é a transformação mais poderosa de Vegeta?",
    respostas: ["Super Saiyajin God", "Super Saiyajin Blue", "Ultra Instinto"],
    correta: 1
  },
  {
    pergunta: "Quem é o deus da criação e irmão de Bills?",
    respostas: ["Zeno", "Whis", "Kaioshin"],
    correta: 1
  },
  {
    pergunta: "Qual é a técnica de telecinesia utilizada por alguns personagens em Dragon Ball?",
    respostas: ["Teletransporte", "Kamehameha", "Bukujutsu"],
    correta: 2
  },
  {
    pergunta: "Quem é o segundo filho de Vegeta?",
    respostas: ["Gohan", "Goten", "Trunks"],
    correta: 2
  }
];

  

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + "10";

function selecionarPerguntas() {
  const perguntasSelecionadas = [];
  while (perguntasSelecionadas.length < 10) {
    const indiceAleatorio = Math.floor(Math.random() * perguntas.length);
    if (!perguntasSelecionadas.includes(indiceAleatorio)) {
      perguntasSelecionadas.push(indiceAleatorio);
    }
  }
  exibirPerguntas(perguntasSelecionadas);
}

function exibirPerguntas(perguntasSelecionadas) {
  for (const indice of perguntasSelecionadas) {
    const item = perguntas[indice];
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + indice);
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;

        corretas.delete(item);
        if (estaCorreta) {
          corretas.add(item);
        }

        mostrarTotal.textContent = corretas.size + ' de ' + 
        // totalDePerguntas; 
        "10"
      }
      quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();
    quiz.appendChild(quizItem);
  }
}

function recarregarAPagina(){
    window.location.reload();
} 

selecionarPerguntas();
