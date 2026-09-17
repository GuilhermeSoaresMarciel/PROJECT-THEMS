const m_hours = new Date().getHours();

const body = document.body;
const title = document.querySelector("h3");
const main_img = document.getElementById("fotoPaisagem");
const periodo = document.getElementById("periodo");
const frase = document.getElementById("frase");

title.textContent = `Olá, agora são ${m_hours} horas`;

if (m_hours >= 5 && m_hours < 12) {
  body.style.backgroundColor = "#e2cd9f";
  periodo.textContent = "Manhã";
  frase.textContent = "Começando o dia com energia";
  main_img.src = "./assets/bg-v3.png";
} else if (m_hours >= 12 && m_hours < 18) {
  body.style.backgroundColor = "#b9846f";
  periodo.textContent = "Tarde";
  frase.textContent = "Um bom café para não dormir";
  main_img.src = "./assets/bg-v2.png";
} else {
  body.style.backgroundColor = "#515154";
  periodo.textContent = "Noite";
  frase.textContent = "Como estão as estrelas?";
  main_img.src = "./assets/bg-v1.png";
}

new Audio("./assets/music.mp3").play();
