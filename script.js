const canvas = document.getElementById("coracoes");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let coracoes = [];

function gerarCoracao() {
  const x = Math.random() * canvas.width;
  const size = Math.random() * 20 + 10;
  const speed = Math.random() * 1 + 0.5;
  const cor = Math.random() > 0.5 ? "#DDA0DD" : "#FFD700"; // lilás ou amarelo

  coracoes.push({ x, y: canvas.height, size, speed, cor });
}

function desenharCoracoes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < coracoes.length; i++) {
    const c = coracoes[i];
    ctx.fillStyle = c.cor;
    ctx.beginPath();
    ctx.moveTo(c.x, c.y);
    ctx.bezierCurveTo(c.x - c.size / 2, c.y - c.size / 2, c.x - c.size, c.y + c.size / 3, c.x, c.y + c.size);
    ctx.bezierCurveTo(c.x + c.size, c.y + c.size / 3, c.x + c.size / 2, c.y - c.size / 2, c.x, c.y);
    ctx.fill();
    c.y -= c.speed;
  }

  coracoes = coracoes.filter(c => c.y + c.size > 0);
}

function animar() {
  desenharCoracoes();
  requestAnimationFrame(animar);
}

setInterval(gerarCoracao, 200);
animar();
