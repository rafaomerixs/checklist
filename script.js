function calcularSeguranca() {
    const checkboxes = document.querySelectorAll('input[name="seguranca"]:checked');
  
    let pontuacao = 0;
    checkboxes.forEach(cb => {
      pontuacao += parseFloat(cb.value);
    });
  
    const total = 9; 
    const percentual = (pontuacao / total) * 100;
    let nivel = "";
  
    if (percentual === 100) {
      nivel = " Seu PC está totalmente seguro!";
    } else if (percentual >= 66) {
      nivel = " Seu PC está moderadamente seguro. Considere reforçar a proteção.";
    } else {
      nivel = " Seu PC está vulnerável! Aumente as medidas de segurança.";
    }
  
    document.getElementById("resultado").innerHTML = `
      Segurança: (${percentual.toFixed(1)}%)<br>${nivel}
    `;
  }
  