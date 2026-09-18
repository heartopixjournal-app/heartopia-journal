const welcomeScreen = document.getElementById("welcomeScreen");
const homeScreen = document.getElementById("homeScreen");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    welcomeScreen.classList.remove("active");
    homeScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* FECHA ACTUAL */

const currentDate = document.getElementById("currentDate");

const today = new Date();

currentDate.textContent = today.toLocaleDateString(
    "es-CL",
    {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
);
/* ========================================
   NAVEGACIÓN: INICIO ↔ COLECCIÓN
======================================== */

const collectionScreen =
    document.getElementById("collectionScreen");

const openCollectionButton =
    document.getElementById("openCollectionButton");

const collectionHomeButton =
    document.getElementById("collectionHomeButton");


openCollectionButton.addEventListener("click", () => {

    homeScreen.classList.remove("active");
    collectionScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


collectionHomeButton.addEventListener("click", () => {

    collectionScreen.classList.remove("active");
    homeScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
/* ========================================
   NAVEGACIÓN: COLECCIÓN → PECES
======================================== */

const fishScreen = document.getElementById("fishScreen");
const openFishCollection = document.getElementById("openFishCollection");
const backToCollection = document.getElementById("backToCollection");

if (openFishCollection && fishScreen && collectionScreen) {
    openFishCollection.addEventListener("click", () => {
        collectionScreen.classList.remove("active");
        fishScreen.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    });
}

if (backToCollection && fishScreen && collectionScreen) {
    backToCollection.addEventListener("click", () => {
        fishScreen.classList.remove("active");
        collectionScreen.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    });
}
