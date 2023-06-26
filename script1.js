// Função para redirecionar com base no tipo de dispositivo
function redirecionar() {
  var userAgent = navigator.userAgent.toLowerCase();

  // Verifica se o dispositivo é móvel
  var isMobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);

  if (isMobile) {
    window.location.href = 'tech_hub/index_mobile.html';
  } else {
    window.location.href = 'tech_hub/index.html';
  }
}

// Chama a função de redirecionamento quando a página carrega
window.onload = redirecionar;
