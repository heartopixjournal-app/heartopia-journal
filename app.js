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
