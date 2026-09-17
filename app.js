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
