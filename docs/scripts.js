const Hors = new Date().getHours();

const body = document.body;
const title = document.querySelector("h3");
const img = document.getElementById("fotoPaisagem");
const periodo = document.getElementById("periodo");
const frase = document.getElementById("frase");

title.textContent = `Olá, agora são ${Hors} horas`;

if (Hors >= 0 && Hors < Hors < 12) {
  body.style.backgroundColor = "#e2cd9f";
  periodo.textContent = "Manhã";
  frase.textContent = "Começando o dia com energia";
} else if (Hors >= 12 && Hors < Hors < 18) {
  body.style.backgroundColor = "#b9846f";
  periodo.textContent = "Tarde";
  frase.textContent = "Um bom cafe para nao durmir";
} else {
  body.style.backgroundColor = "#515154";
  periodo.textContent = "Noite";
  frase.textContent = "Que linhas estao as estrellas";
}

onload(() => {
  alert("test");
});
