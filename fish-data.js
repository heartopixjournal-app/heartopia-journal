/* ========================================
   HEARTOPIA JOURNAL
   BASE DE DATOS — PECES
======================================== */

const fishData = [

    {
        id: "mejillon",
        nombre: "Mejillón",
        categoria: "pesca",
        ubicacion: "Lago suburbano",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["lluvia", "arcoiris"],
        estrellas: 2,
        pesos: {
            1: "0.15–0.18 kg",
            2: "0.18–0.21 kg",
            3: "0.21–0.24 kg",
            4: "0.24–0.27 kg",
            5: "0.27–0.30 kg"
        },
        anecdota: "Caracola de tonos verdes y amarillo, con carne llena de nutrientes.",
        imagen: ""
    },

    {
        id: "cigala-noruega",
        nombre: "Cigala noruega",
        categoria: "pesca",
        ubicacion: "Lago del bosque",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 1,
        pesos: {
            1: "0.15–0.18 kg",
            2: "0.18–0.21 kg",
            3: "0.21–0.24 kg",
            4: "0.24–0.27 kg",
            5: "0.27–0.30 kg"
        },
        anecdota: "Con su dura coraza y las dos grandes pinzas, nunca da un paso atrás ante ningún peligro.",
        imagen: ""
    },

    {
        id: "lobina-florida",
        nombre: "Lobina de Florida",
        categoria: "pesca",
        ubicacion: "Lago del bosque",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 4,
        pesos: {
            1: "1–1.4 kg",
            2: "1.4–1.8 kg",
            3: "1.8–2.2 kg",
            4: "2.2–2.6 kg",
            5: "2.6–3 kg"
        },
        anecdota: "Un pez carnívoro famoso por su ferocidad. Suele acechar entre la vegetación acuática, y ataca en cuanto pasa una presa.",
        imagen: ""
    },

    {
        id: "cangrejo-arroyo",
        nombre: "Cangrejo de arroyo",
        categoria: "pesca",
        ubicacion: "Lago suburbano",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        pesos: {
            1: "2–2.6 kg",
            2: "2.6–3.2 kg",
            3: "3.2–3.8 kg",
            4: "3.8–4.4 kg",
            5: "4.4–5 kg"
        },
        anecdota: "Come carne con pinzas, delicadamente, pedacito a pedacito.",
        imagen: ""
    },

    {
        id: "cigala-azul-nordica",
        nombre: "Cigala Azul Nórdica",
        categoria: "pesca",
        ubicacion: "Lago del bosque",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        pesos: {
            1: "0.15–0.18 kg",
            2: "0.18–0.21 kg",
            3: "0.21–0.24 kg",
            4: "0.24–0.27 kg",
            5: "0.27–0.30 kg"
        },
        anecdota: "Azul por fuera, pero siempre será un cangrejo de agua dulce.",
        imagen: ""
    },

    {
        id: "lubina-marina",
        nombre: "Lubina marina",
        categoria: "pesca",
        ubicacion: "Mar",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        pesos: {
            1: "2–2.6 kg",
            2: "2.6–3.2 kg",
            3: "3.2–3.8 kg",
            4: "3.8–4.4 kg",
            5: "4.4–5 kg"
        },
        anecdota: "Del mar cercano, de carne tierna y sabrosa.",
        imagen: ""
    },

    {
        id: "listado",
        nombre: "Listado",
        categoria: "pesca",
        ubicacion: "Mar",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        pesos: {
            1: "80–94 kg",
            2: "94–108 kg",
            3: "108–122 kg",
            4: "122–136 kg",
            5: "136–150 kg"
        },
        anecdota: "Las pequeñas protuberancias detrás de la aleta dorsal son su «truco secreto» para nadar como un rayo.",
        imagen: ""
    },

    {
        id: "pez-sable",
        nombre: "Pez sable",
        categoria: "pesca",
        ubicacion: "Mar susurrante",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        pesos: {
            1: "2–2.6 kg",
            2: "2.6–3.2 kg",
            3: "3.2–3.8 kg",
            4: "3.8–4.4 kg",
            5: "4.4–5 kg"
        },
        anecdota: "Larga y blanca, como una cinta flotando en el mar.",
        imagen: ""
    },

    {
        id: "camaron-marino",
        nombre: "Camarón marino",
        categoria: "pesca",
        ubicacion: "Mar oriental",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        pesos: {
            1: "0.15–0.18 kg",
            2: "0.18–0.21 kg",
            3: "0.21–0.24 kg",
            4: "0.24–0.27 kg",
            5: "0.27–0.30 kg"
        },
        anecdota: "Aunque viven en el mar, los camarones son habituales en mesas de todo el mundo.",
        imagen: ""
    },

    {
        id: "jurel-japones",
        nombre: "Jurel japonés",
        categoria: "pesca",
        ubicacion: "Mar de ballena",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        pesos: {
            1: "0.02–0.03 kg",
            2: "0.03–0.04 kg",
            3: "0.04–0.05 kg",
            4: "0.05–0.06 kg",
            5: "0.06–0.07 kg"
        },
        anecdota: "Pequeño, ágil y valiente; vive junto a las medusas sin miedo.",
        imagen: ""
    }

];
