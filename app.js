/* ========================================
   ELEMENTOS PRINCIPALES
======================================== */

const welcomeScreen = document.getElementById("welcomeScreen");
const homeScreen = document.getElementById("homeScreen");
const collectionScreen = document.getElementById("collectionScreen");
const fishScreen = document.getElementById("fishScreen");

const startButton = document.getElementById("startButton");
const openCollectionButton = document.getElementById("openCollectionButton");
const collectionHomeButton = document.getElementById("collectionHomeButton");
const openFishCollection = document.getElementById("openFishCollection");
const backToCollection = document.getElementById("backToCollection");


/* ========================================
   FUNCIÓN PARA CAMBIAR DE PANTALLA
======================================== */

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach((item) => {
        item.classList.remove("active");
    });

    if (screen) {
        screen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* ========================================
   BIENVENIDA → INICIO
======================================== */

if (startButton && homeScreen) {

    startButton.addEventListener("click", () => {
        showScreen(homeScreen);
    });

}


/* ========================================
   INICIO → COLECCIÓN
======================================== */

if (openCollectionButton && collectionScreen) {

    openCollectionButton.addEventListener("click", () => {
        showScreen(collectionScreen);
    });

}


/* ========================================
   COLECCIÓN → INICIO
======================================== */

if (collectionHomeButton && homeScreen) {

    collectionHomeButton.addEventListener("click", () => {
        showScreen(homeScreen);
    });

}


/* ========================================
   COLECCIÓN → PECES
======================================== */

if (openFishCollection && fishScreen) {

    openFishCollection.addEventListener("click", () => {
        showScreen(fishScreen);
    });

}


/* ========================================
   PECES → COLECCIÓN
======================================== */

if (backToCollection && collectionScreen) {

    backToCollection.addEventListener("click", () => {
        showScreen(collectionScreen);
    });

}


/* ========================================
   FECHA ACTUAL
======================================== */

const currentDate = document.getElementById("currentDate");

if (currentDate) {

    const today = new Date();

    currentDate.textContent = today.toLocaleDateString(
        "es-CL",
        {
            weekday: "long",
            day: "numeric",
            month: "long"
        }
    );

}
/* ========================================
   CATÁLOGO DINÁMICO DE PECES
======================================== */

const fishGrid = document.getElementById("fishGrid");
const fishResultCount = document.getElementById("fishResultCount");

function getFishHabitat(location) {
    const place = location.toLowerCase();

    if (place.includes("lago")) {
        return "lake";
    }

    if (place.includes("río") || place.includes("rio")) {
        return "river";
    }

    if (place.includes("mar")) {
        return "sea";
    }

    return "other";
}


function getFishHabitatLabel(location) {
    const habitat = getFishHabitat(location);

    if (habitat === "lake") return "LAGO";
    if (habitat === "river") return "RÍO";
    if (habitat === "sea") return "MAR";

    return location.toUpperCase();
}


function createFishStars(number) {
    const filled = "★".repeat(number);
    const empty = "☆".repeat(5 - number);

    return filled + empty;
}


function renderFish(fishes) {

    if (!fishGrid) return;

    fishGrid.innerHTML = "";

    fishes.forEach((fish) => {

        const habitat = getFishHabitat(fish.ubicacion);

        const card = document.createElement("button");

        card.className = "fish-card";
        card.dataset.habitat = habitat;
        card.dataset.fish = fish.id;

        card.innerHTML = `
            <div class="fish-image-placeholder">
                🐟
            </div>

            <div class="fish-card-info">

                <span class="fish-habitat">
                    ${getFishHabitatLabel(fish.ubicacion)}
                </span>

                <strong>
                    ${fish.nombre}
                </strong>

                <div
                    class="fish-stars"
                    aria-label="${fish.estrellas} de 5 estrellas"
                >
                    ${createFishStars(fish.estrellas)}
                </div>

                <small>
                    ${fish.ubicacion}
                </small>

            </div>

            <span class="fish-arrow">›</span>
        `;

        fishGrid.appendChild(card);
    });


    if (fishResultCount) {

        fishResultCount.textContent =
            `${fishes.length} ${
                fishes.length === 1
                    ? "especie"
                    : "especies"
            }`;
    }
}


/* CARGAR PECES */

if (typeof fishData !== "undefined") {
    renderFish(fishData);
}
/* ========================================
   PROGRESO DE LA COLECCIÓN DE PECES
======================================== */

const fishProgressText =
    document.getElementById("fishProgressText");

function updateFishProgress() {

    if (typeof fishData === "undefined") return;

    const totalFish = fishData.length;

    /*
       Más adelante este valor se calculará
       con los peces que el usuario marque
       como conseguidos.
    */
    const collectedFish = 0;

    if (fishProgressText) {
        fishProgressText.textContent =
            `${collectedFish} de ${totalFish} peces registrados`;
    }
}

updateFishProgress();
/* ========================================
   FICHA INDIVIDUAL DE PEZ
======================================== */

const fishScreen =
    document.getElementById("fishScreen");

const fishDetailScreen =
    document.getElementById("fishDetailScreen");

const backToFishCatalog =
    document.getElementById("backToFishCatalog");

const fishDetailName =
    document.getElementById("fishDetailName");

const fishDetailStars =
    document.getElementById("fishDetailStars");

const fishDetailLocation =
    document.getElementById("fishDetailLocation");

const fishDetailPlace =
    document.getElementById("fishDetailPlace");

const fishDetailActivity =
    document.getElementById("fishDetailActivity");

const fishDetailWeather =
    document.getElementById("fishDetailWeather");

const fishDetailWeights =
    document.getElementById("fishDetailWeights");

const fishDetailAnecdote =
    document.getElementById("fishDetailAnecdote");


function formatWeather(weather) {

    const labels = {
        soleado: "☀️ Soleado",
        lluvia: "🌧️ Lluvia",
        arcoiris: "🌈 Arcoíris"
    };

    return labels[weather] || weather;
}


function openFishDetail(fish) {

    if (!fishScreen || !fishDetailScreen) return;

    fishDetailName.textContent =
        fish.nombre;

    fishDetailStars.textContent =
        createFishStars(fish.estrellas);

    fishDetailLocation.textContent =
        fish.ubicacion;

    fishDetailPlace.textContent =
        fish.ubicacion;

    fishDetailActivity.textContent =
        fish.actividad || "—";


    /* CLIMA */

    fishDetailWeather.innerHTML = "";

    fish.clima.forEach((weather) => {

        const chip =
            document.createElement("span");

        chip.className = "weather-chip";

        chip.textContent =
            formatWeather(weather);

        fishDetailWeather.appendChild(chip);
    });


    /* PESOS */

    fishDetailWeights.innerHTML = "";

    for (let stars = 1; stars <= 5; stars++) {

        const row =
            document.createElement("div");

        row.className = "fish-weight-row";

        row.innerHTML = `
            <span class="fish-weight-stars">
                ${"★".repeat(stars)}
            </span>

            <span class="fish-weight-value">
                ${fish.pesos[stars] || "—"}
            </span>
        `;

        fishDetailWeights.appendChild(row);
    }


    /* ANÉCDOTA */

    fishDetailAnecdote.textContent =
        fish.anecdota || "Sin información";


    /* CAMBIAR PANTALLA */

    fishScreen.classList.remove("active");

    fishDetailScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ABRIR UNA TARJETA */

if (fishGrid) {

    fishGrid.addEventListener("click", (event) => {

        const card =
            event.target.closest(".fish-card");

        if (!card) return;

        const fish =
            fishData.find(
                item => item.id === card.dataset.fish
            );

        if (!fish) return;

        openFishDetail(fish);
    });
}


/* VOLVER AL CATÁLOGO */

if (backToFishCatalog) {

    backToFishCatalog.addEventListener(
        "click",
        () => {

            fishDetailScreen.classList.remove("active");

            fishScreen.classList.add("active");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}/* ========================================
   FICHA INDIVIDUAL DE PEZ
======================================== */

const fishScreen =
    document.getElementById("fishScreen");

const fishDetailScreen =
    document.getElementById("fishDetailScreen");

const backToFishCatalog =
    document.getElementById("backToFishCatalog");

const fishDetailName =
    document.getElementById("fishDetailName");

const fishDetailStars =
    document.getElementById("fishDetailStars");

const fishDetailLocation =
    document.getElementById("fishDetailLocation");

const fishDetailPlace =
    document.getElementById("fishDetailPlace");

const fishDetailActivity =
    document.getElementById("fishDetailActivity");

const fishDetailWeather =
    document.getElementById("fishDetailWeather");

const fishDetailWeights =
    document.getElementById("fishDetailWeights");

const fishDetailAnecdote =
    document.getElementById("fishDetailAnecdote");


function formatWeather(weather) {

    const labels = {
        soleado: "☀️ Soleado",
        lluvia: "🌧️ Lluvia",
        arcoiris: "🌈 Arcoíris"
    };

    return labels[weather] || weather;
}


function openFishDetail(fish) {

    if (!fishScreen || !fishDetailScreen) return;

    fishDetailName.textContent =
        fish.nombre;

    fishDetailStars.textContent =
        createFishStars(fish.estrellas);

    fishDetailLocation.textContent =
        fish.ubicacion;

    fishDetailPlace.textContent =
        fish.ubicacion;

    fishDetailActivity.textContent =
        fish.actividad || "—";


    /* CLIMA */

    fishDetailWeather.innerHTML = "";

    fish.clima.forEach((weather) => {

        const chip =
            document.createElement("span");

        chip.className = "weather-chip";

        chip.textContent =
            formatWeather(weather);

        fishDetailWeather.appendChild(chip);
    });


    /* PESOS */

    fishDetailWeights.innerHTML = "";

    for (let stars = 1; stars <= 5; stars++) {

        const row =
            document.createElement("div");

        row.className = "fish-weight-row";

        row.innerHTML = `
            <span class="fish-weight-stars">
                ${"★".repeat(stars)}
            </span>

            <span class="fish-weight-value">
                ${fish.pesos[stars] || "—"}
            </span>
        `;

        fishDetailWeights.appendChild(row);
    }


    /* ANÉCDOTA */

    fishDetailAnecdote.textContent =
        fish.anecdota || "Sin información";


    /* CAMBIAR PANTALLA */

    fishScreen.classList.remove("active");

    fishDetailScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ABRIR UNA TARJETA */

if (fishGrid) {

    fishGrid.addEventListener("click", (event) => {

        const card =
            event.target.closest(".fish-card");

        if (!card) return;

        const fish =
            fishData.find(
                item => item.id === card.dataset.fish
            );

        if (!fish) return;

        openFishDetail(fish);
    });
}


/* VOLVER AL CATÁLOGO */

if (backToFishCatalog) {

    backToFishCatalog.addEventListener(
        "click",
        () => {

            fishDetailScreen.classList.remove("active");

            fishScreen.classList.add("active");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}
