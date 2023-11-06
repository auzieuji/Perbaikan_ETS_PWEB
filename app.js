const APIURL = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0";

const main = document.getElementById("main");

getPoke(APIURL);

async function getPoke(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  // movie aa gyi
  console.log(respData);
  // yaha pe show karenge
  showPoke(respData.results);

}

function showPoke(pokes) {

    main.innerHTML = "";
    pokes.forEach((poke) => {
      const {name, url} = poke;
      
      const pokeE1 = document.createElement("div");
      pokeE1.classList.add("poke");

      pokeE1.innerHTML = `
        <div class="poke-info">
            <p>${name}</p>
            <div class="button" on-click=>Detail</div>
        </div> 
        `;
        const detailButton = pokeE1.querySelector(".button");
        detailButton.addEventListener("click", () => {
        window.open(url, "_blank");
        });

        main.appendChild(pokeE1)
    });
  
  }