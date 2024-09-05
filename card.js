const btnGenerateCharacter = document.getElementById("generate-character");
const container = document.getElementById("cards-container");
const searchCard = document.getElementById("input-character");

function createCards(data) {
  data.results.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const imgCard = document.createElement("img");
    imgCard.alt = element.name;
    imgCard.src = element.image;

    const titleCard = document.createElement("h2");
    titleCard.textContent = element.name;

    card.appendChild(imgCard);
    card.appendChild(titleCard);
    container.appendChild(card);
  });
}

const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  createCards(data);
};

btnGenerateCharacter.addEventListener("click", getCharacters);

searchCard.addEventListener("keyup", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const characterContainer = document.getElementById("cards-container");
  const containerArray = Array.from(characterContainer.children);

  console.log(containerArray);

  containerArray.forEach((card) => {
    const nameCharacter = card.querySelector("h2").textContent.toLowerCase();
    card.style.display = nameCharacter.includes(searchTerm) ? "flex" : "none";
  });
});
