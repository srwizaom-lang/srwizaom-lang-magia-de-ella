document.getElementById("slytherinQuiz").addEventListener("submit", function (e) {
  e.preventDefault();
  const q1 = document.querySelector('input[name="q1"]:checked')?.value;
  const q2 = document.querySelector('input[name="q2"]:checked')?.value;
  const q3 = document.querySelector('input[name="q3"]:checked')?.value;
  const q4 = document.querySelector('input[name="q4"]:checked')?.value;

  if (
    q1 === "ambición" &&
    q2 === "serpiente" &&
    q3 === "usar" &&
    (q4 === "milo" || q4 === "ory")
  ) {
    document.getElementById("quizResult").innerHTML = "¡Bienvenida a Slytherin, bruja poderosa! 🐍";
  } else {
    document.getElementById("quizResult").innerHTML = "Hmm... el Sombrero duda, pero ve potencial en ti.";
  }
});

function reveal(ingredient) {
  const result = document.getElementById("potionResult");
  if (ingredient === "smile") result.innerText = "Tu sonrisa es el primer hechizo que me atrapó.";
  if (ingredient === "look") result.innerText = "Tus ojos tienen más magia que cualquier varita.";
  if (ingredient === "hug") result.innerText = "Tu abrazo es mi Felix Felicis: pura suerte líquida.";
}

function castPatronus() {
  const result = document.getElementById("patronusResult");
  result.innerHTML = "🦊 Un zorro plateado aparece, danzando en el aire...<br>Protegido por el recuerdo más feliz: tú.";
}