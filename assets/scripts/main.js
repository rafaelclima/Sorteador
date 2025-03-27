const sortearBtn = document.getElementById("btn-sortear");
const divBtnReiniciar = document.querySelector(".btn-sorteio");
let qtdBtnSortear = 0;

function numAleatorio(min, max) {
	const fracaoRandom = Math.random();
	const numRandom = min + Math.floor(fracaoRandom * (max - min + 1));
	return numRandom;
}

document.addEventListener("DOMContentLoaded", function () {
	const radios = document.querySelectorAll('input[type="radio"]');
	radios.forEach((radio) => {
		radio.checked = false;
	});
});

const radiosBtn = document.querySelectorAll('input[type="radio"]');
radiosBtn.forEach((radio) => {
	radio.addEventListener("change", radioChecked);
});

function radioChecked(event) {
	if (event.target.id === "numeros") {
		const divNomes = document.querySelector(".nomes");
		if (divNomes) {
			divNomes.style.display = "none";
		}
		const divSortearNumeros = document.querySelector(".sortear-numero");
		divSortearNumeros.innerHTML = `
      <div class="numeros">
        <h3>Sorteio por números</h3>
        <div class="sorteio-numeros">
          <div class= "primeiro-numero">
            <label for="numero-inicial">DE:</label>
            <input type="number" name="numero-inicial" id="numero-inicial">
          </div>
          <div class="ultimo-numero">
            <label for="numero-final">ATÉ:</label>
            <input type="number" name="numero-final" id="numero-final">
          </div>
        </div>  
      </div>
      `;
		divBtnReiniciar.style.display = "flex";
		sortearBtn.addEventListener("click", () => {
			if (qtdBtnSortear === 0) {
				const btnReiniciar = document.getElementById("btn-reiniciar");
				if (!divBtnReiniciar.contains(btnReiniciar)) {
					const btnReiniciar = document.createElement("button");
					btnReiniciar.id = "btn-reiniciar";
					btnReiniciar.classList.add("btn", "btn-pink");
					btnReiniciar.type = "button";
					btnReiniciar.innerText = "Reiniciar";
					divBtnReiniciar.appendChild(btnReiniciar);

					btnReiniciar.addEventListener("click", () => {
						location.reload();
						qtdBtnSortear = 0;
					});
				}

				const loadingAnimation = document.querySelector(".loading-animation");
				loadingAnimation.style.display = "block";

				setTimeout(function () {
					const numeroInicial = Number(
						document.getElementById("numero-inicial").value,
					);
					const numeroFinal = Number(
						document.getElementById("numero-final").value,
					);
					const numeroSorteado = numAleatorio(numeroInicial, numeroFinal);

					const sortudo = document.getElementById("sortudo");
					sortudo.innerText = numeroSorteado;
					const divResultado = document.querySelector(".resultado");
					divResultado.style.display = "flex";
					loadingAnimation.style.display = "none";
				}, 1500);

				qtdBtnSortear = 1;
			}

			if (qtdBtnSortear === 1) {
				const divResultado = document.querySelector(".resultado");
				divResultado.style.display = "none";

				const loadingAnimation = document.querySelector(".loading-animation");
				loadingAnimation.style.display = "block";

				setTimeout(function () {
					const numeroInicial = Number(
						document.getElementById("numero-inicial").value,
					);
					const numeroFinal = Number(
						document.getElementById("numero-final").value,
					);
					const numeroSorteado = numAleatorio(numeroInicial, numeroFinal);

					const sortudo = document.getElementById("sortudo");
					sortudo.innerText = numeroSorteado;
					divResultado.style.display = "flex";
					loadingAnimation.style.display = "none";
				}, 1500);
			}
		});
	}

	if (event.target.id === "nomes") {
		const divNumeros = document.querySelector(".numeros");
		if (divNumeros) {
			divNumeros.style.display = "none";
		}
		const divSortearNomes = document.querySelector(".sortear-nomes");
		divSortearNomes.innerHTML = `
      <div class="nomes">
        <h3>Sorteio por nomes</h3>
        <div class="lista-nomes">
          <div class="form-floating">
            <textarea class="form-control" placeholder="Nomes separados por virgula." id="floatingTextarea2" style="height: 90px"></textarea>
            <label for="floatingTextarea2">Ex: João, Maria, Jose...</label>
          </div>
        </div>
      </div>
      `;
		divBtnReiniciar.style.display = "flex";
		sortearBtn.addEventListener("click", () => {
			if (qtdBtnSortear === 0) {
				const btnReiniciar = document.getElementById("btn-reiniciar");
				if (!divBtnReiniciar.contains(btnReiniciar)) {
					const btnReiniciar = document.createElement("button");
					btnReiniciar.id = "btn-reiniciar";
					btnReiniciar.classList.add("btn", "btn-pink");
					btnReiniciar.type = "button";
					btnReiniciar.innerText = "Reiniciar";
					divBtnReiniciar.appendChild(btnReiniciar);

					btnReiniciar.addEventListener("click", () => {
						location.reload();
						qtdBtnSortear = 0;
					});
				}

				const loadingAnimation = document.querySelector(".loading-animation");
				loadingAnimation.style.display = "block";
				setTimeout(function () {
					const listaNomes = document.querySelector(".form-control").value;
					const nomesSeparados = listaNomes.split(", ");
					const indiceAleatorio = numAleatorio(0, nomesSeparados.length - 1);

					const sortudo = document.getElementById("sortudo");
					sortudo.innerText = nomesSeparados[indiceAleatorio];
					const divResultado = document.querySelector(".resultado");
					divResultado.style.display = "flex";

					loadingAnimation.style.display = "none";
				}, 1500);

				qtdBtnSortear = 1;
			}

			if (qtdBtnSortear === 1) {
				const divResultado = document.querySelector(".resultado");
				divResultado.style.display = "none";

				const loadingAnimation = document.querySelector(".loading-animation");
				loadingAnimation.style.display = "block";

				setTimeout(function () {
					const listaNomes = document.querySelector(".form-control").value;
					const nomesSeparados = listaNomes.split(", ");
					const indiceAleatorio = numAleatorio(0, nomesSeparados.length - 1);

					const sortudo = document.getElementById("sortudo");
					sortudo.innerText = nomesSeparados[indiceAleatorio];
					divResultado.style.display = "flex";
					loadingAnimation.style.display = "none";
				}, 1500);
			}
		});
	}
}

// Add touch support for mobile devices
sortearBtn.addEventListener("touchstart", (e) => {
	e.preventDefault();
	sortearBtn.classList.add("active");
});

sortearBtn.addEventListener("touchend", () => {
	sortearBtn.classList.remove("active");
});

// Add touch support for radio buttons
radiosBtn.forEach((radio) => {
	radio.addEventListener("touchstart", (e) => {
		e.preventDefault();
		radio.classList.add("active");
	});

	radio.addEventListener("touchend", () => {
		radio.classList.remove("active");
	});
});
