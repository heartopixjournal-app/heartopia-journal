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
