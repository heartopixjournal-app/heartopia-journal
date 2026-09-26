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
    },

    {
        id: "pez-payaso",
        nombre: "Pez payaso",
        categoria: "pesca",
        ubicacion: "Mar antiguo",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        pesos: {
            1: "0.02–0.03 kg",
            2: "0.03–0.04 kg",
            3: "0.04–0.05 kg",
            4: "0.05–0.06 kg",
            5: "0.06–0.07 kg"
        },
        anecdota: "Energética y adorable, se volvió una superestrella del mundo marino gracias a cierta famosa película oceánica.",
        imagen: ""
    },

    {
        id: "rodaballo",
        nombre: "Rodaballo",
        categoria: "pesca",
        ubicacion: "Pesca marina",
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
        anecdota: "Un tipo de pez plano, no muy agraciado, pero amable.",
        imagen: ""
    },

    {
        id: "platija-europea",
        nombre: "Platija europea",
        categoria: "pesca",
        ubicacion: "Mar antiguo",
        actividad: "Diaria",
        horario: {
            inicio: 19,
            fin: 7,
            todoElDia: false
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
        anecdota: "Como pez nocturno, su vista apenas le alcanza para buscar comida.",
        imagen: ""
    },

    {
        id: "caballa",
        nombre: "Caballa",
        categoria: "pesca",
        ubicacion: "Mar de ballena",
        actividad: "Diaria",
        horario: {
            inicio: 13,
            fin: 1,
            todoElDia: false
        },
        clima: ["soleado", "arcoiris"],
        estrellas: 1,
        pesos: {
            1: "0.02–0.03 kg",
            2: "0.03–0.04 kg",
            3: "0.04–0.05 kg",
            4: "0.05–0.06 kg",
            5: "0.06–0.07 kg"
        },
        anecdota: "Un poco torpe, pero hermoso y único. Eso sí, le encanta dormir.",
        imagen: ""
    },

    {
        id: "langosta-europea",
        nombre: "Langosta europea",
        categoria: "pesca",
        ubicacion: "Mar susurrante",
        actividad: "Diaria",
        horario: {
            inicio: 19,
            fin: 1,
            todoElDia: false
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
        anecdota: "Gigante con garras de hierro. ¡Qué aspecto tan feroz!",
        imagen: ""
    },

    {
        id: "pez-globo-rio",
        nombre: "Pez globo de río",
        categoria: "pesca",
        ubicacion: "Mar antiguo",
        actividad: "Diaria",
        horario: {
            inicio: 13,
            fin: 1,
            todoElDia: false
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        pesos: {
            1: "1–1.4 kg",
            2: "1.4–1.8 kg",
            3: "1.8–2.2 kg",
            4: "2.2–2.6 kg",
            5: "2.6–3 kg"
        },
        anecdota: "Un pez que viaja entre ríos y mares, aunque su hogar habitual es el océano.",
        imagen: ""
    },

    {
        id: "tiburon-gato",
        nombre: "Tiburón gato",
        categoria: "pesca",
        ubicacion: "Pesca marina",
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
        anecdota: "Sus ojos brillan bajo la luz de la luna, como los de un gatito.",
        imagen: ""
    },

    {
        id: "pez-remo-gigante",
        nombre: "Pez remo gigante",
        categoria: "pesca",
        ubicacion: "Pesca marina",
        actividad: "Diaria",
        horario: {
            inicio: 7,
            fin: 19,
            todoElDia: false
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        pesos: {
            1: "100–120 kg",
            2: "120–140 kg",
            3: "140–160 kg",
            4: "160–180 kg",
            5: "180–200 kg"
        },
        anecdota: "Algunos lo llaman mensajero del palacio dragón; otros, demonio del fondo. Aún se sabe muy poco sobre él.",
        imagen: ""
    },

    {
        id: "besugo-negro",
        nombre: "Besugo negro",
        categoria: "pesca",
        ubicacion: "Mar susurrante",
        actividad: "Diaria",
        horario: {
            inicio: 19,
            fin: 7,
            todoElDia: false
        },
        clima: ["lluvia", "arcoiris"],
        estrellas: 1,
        pesos: {
            1: "1–1.4 kg",
            2: "1.4–1.8 kg",
            3: "1.8–2.2 kg",
            4: "2.2–2.6 kg",
            5: "2.6–3 kg"
        },
        anecdota: "Tranquilo, incluso en la oscuridad más profunda.",
        imagen: ""
    },
       {
        id: "perca-rio",
        nombre: "Perca de río",
        categoria: "pesca",
        ubicacion: "Río",
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
        anecdota: "Vive en aguas dulces. Tan común como sabrosa, seguro la has probado.",
        imagen: ""
    },

    {
        id: "cacho-europeo",
        nombre: "Cacho europeo",
        categoria: "pesca",
        ubicacion: "Lago",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 5,
        pesos: {
            1: "1–1.4 kg",
            2: "1.4–1.8 kg",
            3: "1.8–2.2 kg",
            4: "2.2–2.6 kg",
            5: "2.6–3 kg"
        },
        anecdota: "Amante de los lagos tranquilos. Debe de tener un carácter apacible.",
        imagen: ""
    },

    {
        id: "sardina",
        nombre: "Sardina",
        categoria: "pesca",
        ubicacion: "Mar",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 4,
        pesos: {
            1: "0.15–0.18 kg",
            2: "0.18–0.21 kg",
            3: "0.21–0.24 kg",
            4: "0.24–0.27 kg",
            5: "0.27–0.3 kg"
        },
        anecdota: "Pececillo blanco azulado, fácil de encontrar en el mar.",
        imagen: ""
    },

        {
        id: "barbo",
        nombre: "Barbo",
        categoria: "pesca",
        ubicacion: "Río de aguas bajas",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 1,
        pesos: {
            1: "1–1.4 kg",
            2: "1.4–1.8 kg",
            3: "1.8–2.2 kg",
            4: "2.2–2.6 kg",
            5: "2.6–3 kg"
        },
        anecdota: "Es un barbo, no un bobo... ¡ni un pez gordo!",
        imagen: ""
    },
   
    {
        id: "perca-dorada-manchada",
        nombre: "Perca dorada manchada",
        categoria: "pesca",
        ubicacion: "Río del crepúsculo",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        pesos: {
            1: "1–1.2 kg",
            2: "1.2–1.4 kg",
            3: "1.4–1.6 kg",
            4: "1.6–1.8 kg",
            5: "1.8–2 kg"
        },
        anecdota: "Una perca especial con grandes manchas de color verde oscuro en el cuerpo.",
        imagen: ""
    },

    {
        id: "pez-minnow",
        nombre: "Pez minnow",
        categoria: "pesca",
        ubicacion: "Río sereno",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        pesos: {
            1: "0.05–0.07 kg",
            2: "0.07–0.09 kg",
            3: "0.09–0.11 kg",
            4: "0.11–0.13 kg",
            5: "0.13–0.15 kg"
        },
        anecdota: "Tiene un cuerpo delgado y escamas finas.",
        imagen: ""
    },

    {
        id: "camaron-azul",
        nombre: "Camarón azul",
        categoria: "pesca",
        ubicacion: "Río",
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
            5: "0.27–0.3 kg"
        },
        anecdota: "Se encuentra en muchos ríos. Se esconde entre algas para evitar el sol.",
        imagen: ""
    },

    {
        id: "blenido-rio",
        nombre: "Blénido de río",
        categoria: "pesca",
        ubicacion: "Río del crepúsculo",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 1,
        pesos: {
            1: "0.05–0.07 kg",
            2: "0.07–0.09 kg",
            3: "0.09–0.11 kg",
            4: "0.11–0.13 kg",
            5: "0.13–0.15 kg"
        },
        anecdota: "Lleva dos florecitas danzantes en la cabeza.",
        imagen: ""
    },

       {
        id: "rana-europea",
        nombre: "Rana europea",
        categoria: "pesca",
        ubicacion: "Lago",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        pesos: {
            1: "1–1.4 kg",
            2: "1.4–1.8 kg",
            3: "1.8–2.2 kg",
            4: "2.2–2.6 kg",
            5: "2.6–3 kg"
        },
        anecdota: "Heredera de la rana de estanque y la de pantano, se distribuye ampliamente en todo tipo de lagos.",
        imagen: ""
    },
   
    {
        id: "tenca",
        nombre: "Tenca",
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
            1: "0.05–0.07 kg",
            2: "0.07–0.09 kg",
            3: "0.09–0.11 kg",
            4: "0.11–0.13 kg",
            5: "0.13–0.15 kg"
        },
        anecdota: "De cuerpo resbaloso. Se dice que las tencas enfermas se frotan entre sí para curarse, por eso las llaman «pez doctor».",
        imagen: ""
    }

];
