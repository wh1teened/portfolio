/* Este código vai dentro de app.js */
particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 40, // Reduz o número de partículas para 40
      "density": {
        "enable": true,
        "value_area": 750
      }
    },
    "color": {
      "value": "#cccccc" // Mudei a cor para um cinza claro, mais suave
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#f1f1f1ff"
      }
    },
    "opacity": {
      "value": 0.9, // Diminui a opacidade para 40%
      "random": true, // Adicionei randomização para um efeito mais natural
      "anim": {
        "enable": true, // Ativei uma pequena animação de opacidade
        "speed": 0.8,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 5, // Reduzi o tamanho das partículas
      "random": true,
      "anim": {
        "enable": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 180, // Reduzi a distância de conexão entre as linhas
      "color": "#cccccc", // Mantive a mesma cor das partículas para harmonia
      "opacity": 0.3, // Opacidade das linhas ainda menor
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3, // Reduzi a velocidade de movimento
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false, // Ativei o hover para interatividade
        "mode": "bubble" // O modo "bubble" é mais sutil que o "repulse"
      },
      "onclick": {
        "enable": false // Desativei o clique para não poluir
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140
      },
      "bubble": {
        "distance": 200, // Ajustei a distância do efeito bubble
        "size": 10,
        "duration": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true
});