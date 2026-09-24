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
    const collectedFish = fishData.filter((fish) => {
    return Number(personalFishStars[fish.id]) > 0;
}).length;

    if (fishProgressText) {
        fishProgressText.textContent =
            `${collectedFish} de ${totalFish} peces registrados`;
    }
}

/* ========================================
   FICHA INDIVIDUAL DE PEZ
======================================== */

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


/* ---------- CLIMA ---------- */

function formatFishWeather(weather) {

    const weatherLabels = {
        soleado: "☀️ Soleado",
        lluvia: "🌧️ Lluvia",
        arcoiris: "🌈 Arcoíris"
    };

    return weatherLabels[weather] || weather;
}


/* ---------- RELLENAR FICHA ---------- */

function openFishDetail(fish) {

    if (!fishDetailScreen) return;

    if (fishDetailName) {
        fishDetailName.textContent = fish.nombre;
    }

    if (fishDetailStars) {
    renderPersonalStars(fish.id);
}

    if (fishDetailLocation) {
        fishDetailLocation.textContent =
            fish.ubicacion;
    }

    if (fishDetailPlace) {
        fishDetailPlace.textContent =
            fish.ubicacion;
    }

    if (fishDetailActivity) {
        fishDetailActivity.textContent =
            fish.actividad || "—";
    }


    /* CLIMA */

    if (fishDetailWeather) {

        fishDetailWeather.innerHTML = "";

        const weatherList =
            Array.isArray(fish.clima)
                ? fish.clima
                : [];

        weatherList.forEach((weather) => {

            const chip =
                document.createElement("span");

            chip.className = "weather-chip";

            chip.textContent =
                formatFishWeather(weather);

            fishDetailWeather.appendChild(chip);
        });
    }


    /* PESOS */

    if (fishDetailWeights) {

        fishDetailWeights.innerHTML = "";

        for (let stars = 1; stars <= 5; stars++) {

            const row =
                document.createElement("div");

            row.className = "fish-weight-row";

            const weight =
                fish.pesos && fish.pesos[stars]
                    ? fish.pesos[stars]
                    : "—";

            row.innerHTML = `
                <span class="fish-weight-stars">
                    ${"★".repeat(stars)}
                </span>

                <span class="fish-weight-value">
                    ${weight}
                </span>
            `;

            fishDetailWeights.appendChild(row);
        }
    }


    /* ANÉCDOTA */

    if (fishDetailAnecdote) {
        fishDetailAnecdote.textContent =
            fish.anecdota || "Sin información.";
    }


    /* MOSTRAR FICHA */

    showScreen(fishDetailScreen);
}


/* ---------- TARJETAS → FICHA ---------- */

if (fishGrid) {

    fishGrid.addEventListener("click", (event) => {

        const card =
            event.target.closest(".fish-card");

        if (!card) return;

        if (typeof fishData === "undefined") return;

        const selectedFish =
            fishData.find(
                (fish) =>
                    fish.id === card.dataset.fish
            );

        if (!selectedFish) return;

        openFishDetail(selectedFish);
    });
}


/* ---------- FICHA → CATÁLOGO ---------- */

if (backToFishCatalog && fishScreen) {

    backToFishCatalog.addEventListener(
        "click",
        () => {
            showScreen(fishScreen);
        }
    );
}
/* ========================================
   ESTRELLAS PERSONALES DE PECES
======================================== */

const fishStarStorageKey = "heartopia-fish-stars";

let personalFishStars = {};

try {
    personalFishStars = JSON.parse(
        localStorage.getItem(fishStarStorageKey)
    ) || {};
} catch (error) {
    personalFishStars = {};
}

let currentFishId = null;


/* MOSTRAR ESTRELLAS DE UN PEZ */

function renderPersonalStars(fishId) {

    if (!fishDetailStars) return;

    currentFishId = fishId;

    const selectedStars =
        Number(personalFishStars[fishId]) || 0;

    const buttons =
        fishDetailStars.querySelectorAll("button[data-stars]");

    buttons.forEach((button) => {

        const starNumber =
            Number(button.dataset.stars);

        const isSelected =
            starNumber <= selectedStars;

        button.textContent =
            isSelected ? "★" : "☆";

        button.classList.toggle(
            "selected",
            isSelected
        );

        button.setAttribute(
            "aria-pressed",
            String(starNumber === selectedStars)
        );
    });
}


/* GUARDAR UNA NUEVA CALIDAD */

if (fishDetailStars) {

    fishDetailStars.addEventListener("click", (event) => {

        const button =
            event.target.closest("button[data-stars]");

        if (!button || !currentFishId) return;

        const clickedStars =
            Number(button.dataset.stars);

        const previousStars =
            Number(personalFishStars[currentFishId]) || 0;

        const newStars =
            clickedStars === previousStars
                ? 0
                : clickedStars;

        if (newStars === 0) {
            delete personalFishStars[currentFishId];
        } else {
            personalFishStars[currentFishId] = newStars;
        }

        try {
            localStorage.setItem(
                fishStarStorageKey,
                JSON.stringify(personalFishStars)
            );
        } catch (error) {
            console.warn(
                "No se pudo guardar el progreso de peces.",
                error
            );
        }

        renderPersonalStars(currentFishId);

        /* PEQUEÑO DESTELLO AL SELECCIONAR */

        button.classList.remove("star-sparkle");

        void button.offsetWidth;

        button.classList.add("star-sparkle");

        updateFishProgress();
    });
}

/* ACTUALIZAR PROGRESO AL CARGAR LA APP */
updateFishProgress();
