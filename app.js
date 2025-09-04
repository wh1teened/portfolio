/* Este código vai dentro de app.js */
particlesJS('particles-js',
{
  "particles": {
    // A seção 'particles' configura as partículas individuais
    "number": {
      // Configura a quantidade de partículas
      "value": 60, // Quantidade de partículas que serão geradas na tela
      "density": {
        // Habilita e ajusta a densidade das partículas
        "enable": true,
        "value_area": 450 // A área na qual as partículas serão distribuídas. Um valor menor as agrupa mais, um valor maior as dispersa.
      }
    },
    "color": {
      // Define a cor das partículas. Pode ser uma cor única ou um array de cores.
      "value": ["#9F38B0", "#BE5EE0", "#D98CEB"] // Múltiplos tons de roxo para um brilho mais rico e dinâmico
    },
    "shape": {
      // Define a forma das partículas (círculo, polígono, estrela, etc.)
      "type": "circle",
      "stroke": {
        // Configura a borda da partícula
        "width": 0, // Largura da borda. 0 significa sem borda.
        "color": "#000000" // Cor da borda
      }
    },
    "opacity": {
      // Controla a transparência das partículas
      "value": 1.3, // Opacidade base das partículas. (1 é totalmente opaco, 0 é totalmente transparente)
      "random": true, // Se true, cada partícula terá uma opacidade aleatória
      "anim": {
        // Habilita uma animação de opacidade
        "enable": true, // Se true, as partículas irão piscar ou ter opacidade variada
        "speed": 1.5, // Velocidade da animação da opacidade
        "opacity_min": 0.3, // Opacidade mínima que a partícula pode atingir durante a animação
        "sync": true // Se true, todas as partículas piscarão juntas; se false, piscarão de forma independente
      }
    },
    "size": {
      // Controla o tamanho das partículas
      "value": 5, // Tamanho médio das partículas em pixels
      "random": true, // Se true, o tamanho de cada partícula será aleatório
      "anim": {
        // Habilita uma animação de tamanho
        "enable": true,
        "speed": 6, // Velocidade da animação de tamanho (crescendo e diminuindo)
        "size_min": 0.4, // Tamanho mínimo que a partícula pode atingir
        "sync": false
      }
    },
    "line_linked": {
      // Configura as linhas que conectam as partículas
      "enable": true, // Habilita a conexão entre as partículas
      "distance": 192, // Distância máxima para que duas partículas sejam conectadas por uma linha
      "color": "#BE5EE0", // Cor das linhas de conexão
      "opacity": 0.2, // Opacidade das linhas
      "width": 1 // Largura das linhas
    },
    "move": {
      // Configura o movimento das partículas
      "enable": true, // Habilita o movimento
      "speed": 2, // Velocidade de movimento das partículas
      "direction": "none", // Direção do movimento ('none', 'top', 'top-right', etc.)
      "random": true, // Se true, o movimento será em direções aleatórias
      "straight": false, // Se true, o movimento será em linha reta
      "out_mode": "out", // Comportamento da partícula ao sair da tela ('out' faz com que desapareça e reapareça no lado oposto)
      "bounce": false // Se true, as partículas quicarão nas bordas da tela
    }
  },
  "interactivity": {
    // A seção 'interactivity' define como o usuário pode interagir com as partículas
    "detect_on": "canvas", // Detecta a interação no 'canvas' ou 'window'
    "events": {
      // Habilita eventos de interação
      "onhover": {
        "enable": true, // Habilita a interação com o mouse ao passar por cima
        "mode": "bubble" // O modo de interação ('bubble', 'repulse', 'grab', etc.)
      },
      "onclick": {
        "enable": false // Habilita a interação com o mouse ao clicar
      },
      "resize": true // Habilita a atualização das partículas ao redimensionar a janela
    },
    "modes": {
      // Configura os diferentes modos de interação
      "grab": {
        // Configurações para o modo 'grab' (pegar partículas)
        "distance": 140,
        "line_linked": {
          "opacity": 1 // Aumenta a opacidade das linhas quando o mouse está no raio de distância
        }
      },
      "bubble": {
        // Configurações para o modo 'bubble' (bolhas que crescem)
        "distance": 200, // Distância para ativar o efeito
        "size": 6, // Tamanho que a partícula atinge
        "duration": 2,
        "opacity": 0.8 // Opacidade que a partícula atinge
      },
      "repulse": {
        // Configurações para o modo 'repulse' (partículas se afastam)
        "distance": 200,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true // Habilita a detecção de telas de alta resolução (Retina)
});