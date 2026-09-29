/* ========================================
   HEARTOPIA JOURNAL
   BASE DE DATOS — PECES
======================================== */

const fishData = [

        {
        id: "mejillon",
        nombre: "Mejillón",
        categoria: "pesca",

        nivelPesca: 4,
        sombra: "Pequeño",
        categoriaHeartodex: "Común",

        ubicacion: "Lago suburbano",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["lluvia", "arcoiris"],
        estrellas: 2,

        valorVenta: {
            1: 100,
            2: 150,
            3: 200,
            4: 400,
            5: 800
        },

        recetas: [],

        anecdota: "Caracola de tonos verdes y amarillo, con carne llena de nutrientes.",
        imagen: ""
    },

    {
        id: "cigala-noruega",
        nombre: "Cigala noruega",
        categoria: "pesca",

        nivelPesca: 3,
        sombra: "Pequeño",
        categoriaHeartodex: "Común",

        ubicacion: "Lago del bosque",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 1,

        

        valorVenta: {
            1: 100,
            2: 150,
            3: 200,
            4: 400,
            5: 800
        },

        recetas: [
            "Mariscos Variados Lujosos",
            "Copa de camarón con aguacate",
            "Pinzas fritas con camarón y queso"
        ],

        anecdota: "Con su dura coraza y las dos grandes pinzas, nunca da un paso atrás ante ningún peligro.",
        imagen: ""
    },

    {
        id: "lobina-florida",
        nombre: "Lobina de Florida",
        categoria: "pesca",

        nivelPesca: 2,
        sombra: "Mediano",
        categoriaHeartodex: "Común",

        ubicacion: "Lago del bosque",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 4,

        valorVenta: {
            1: 230,
            2: 345,
            3: 460,
            4: 920,
            5: 1840
        },

        recetas: [],

        anecdota: "Un pez carnívoro famoso por su ferocidad. Suele acechar entre la vegetación acuática, y ataca en cuanto pasa una presa.",
        imagen: ""
    },
    {
        id: "cangrejo-arroyo",
        nombre: "Cangrejo de arroyo",
        categoria: "pesca",
       nivelPesca: 4,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 100, 2: 150, 3: 200, 4: 400, 5: 800 },
recetas: [],
        ubicacion: "Lago suburbano",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        
        anecdota: "Come carne con pinzas, delicadamente, pedacito a pedacito.",
        imagen: ""
    },

    {
        id: "cigala-azul-nordica",
        nombre: "Cigala Azul Nórdica",
        categoria: "pesca",
       nivelPesca: 8,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 250, 2: 375, 3: 500, 4: 1000, 5: 2000 },
recetas: [
    "Plato frío de cigalas azules",
    "Copa de camarón con aguacate",
    "Pinzas fritas con camarón y queso"
],
        ubicacion: "Lago del bosque",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
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
        
        anecdota: "Del mar cercano, de carne tierna y sabrosa.",
        imagen: ""
    },

    {
        id: "listado",
        nombre: "Listado",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Grande",
categoriaHeartodex: "Común",
valorVenta: { 1: 210, 2: 315, 3: 420, 4: 840, 5: 1680 },
recetas: [],
        ubicacion: "Mar",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Las pequeñas protuberancias detrás de la aleta dorsal son su «truco secreto» para nadar como un rayo.",
        imagen: ""
    },

    {
        id: "pez-sable",
        nombre: "Pez sable",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Grande",
categoriaHeartodex: "Común",
valorVenta: { 1: 105, 2: 157, 3: 210, 4: 420, 5: 840 },
recetas: [],
        ubicacion: "Mar susurrante",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Larga y blanca, como una cinta flotando en el mar.",
        imagen: ""
    },

    {
        id: "camaron-marino",
        nombre: "Camarón marino",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 },
recetas: [
    "Arroz frito con camarones y espárragos de mar",
    "Sopa cremosa de tomate y mariscos",
    "Sushi de camarón frito recomendado por Bancho"
],
        ubicacion: "Mar oriental",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Aunque viven en el mar, los camarones son habituales en mesas de todo el mundo.",
        imagen: ""
    },

    {
        id: "jurel-japones",
        nombre: "Jurel japonés",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 },
recetas: [],
        ubicacion: "Mar de ballena",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        
        anecdota: "Pequeño, ágil y valiente; vive junto a las medusas sin miedo.",
        imagen: ""
    },

    {
        id: "pez-payaso",
        nombre: "Pez payaso",
        categoria: "pesca",
       nivelPesca: 3,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 100, 2: 150, 3: 200, 4: 400, 5: 800 },
recetas: [],
        ubicacion: "Mar antiguo",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Energética y adorable, se volvió una superestrella del mundo marino gracias a cierta famosa película oceánica.",
        imagen: ""
    },

    {
        id: "rodaballo",
        nombre: "Rodaballo",
        categoria: "pesca",
       nivelPesca: 2,
sombra: "Mediano",
categoriaHeartodex: "Pesca marina",
valorVenta: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: 2560 },
recetas: [],
        ubicacion: "Pesca marina",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Un tipo de pez plano, no muy agraciado, pero amable.",
        imagen: ""
    },

    {
        id: "platija-europea",
        nombre: "Platija europea",
        categoria: "pesca",
       nivelPesca: 4,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 230, 2: 345, 3: 460, 4: 920, 5: 1840 },
recetas: [],
        ubicacion: "Mar antiguo",
        actividad: "Diaria",
        horario: {
            inicio: 19,
            fin: 7,
            todoElDia: false
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 1,
        
        anecdota: "Como pez nocturno, su vista apenas le alcanza para buscar comida.",
        imagen: ""
    },

    {
        id: "caballa",
        nombre: "Caballa",
        categoria: "pesca",
       nivelPesca: 5,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 150, 2: 225, 3: 300, 4: 600, 5: 1200 },
recetas: [],
        ubicacion: "Mar de ballena",
        actividad: "Diaria",
        horario: {
            inicio: 13,
            fin: 1,
            todoElDia: false
        },
        clima: ["soleado", "arcoiris"],
        estrellas: 1,
        
        anecdota: "Un poco torpe, pero hermoso y único. Eso sí, le encanta dormir.",
        imagen: ""
    },

    {
        id: "langosta-europea",
        nombre: "Langosta europea",
        categoria: "pesca",
       nivelPesca: 5,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 230, 2: 345, 3: 460, 4: 920, 5: 1840 },
recetas: [
    "Copa de camarón con aguacate",
    "Pinzas fritas con camarón y queso"
],
        ubicacion: "Mar susurrante",
        actividad: "Diaria",
        horario: {
            inicio: 19,
            fin: 1,
            todoElDia: false
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        
        anecdota: "Gigante con garras de hierro. ¡Qué aspecto tan feroz!",
        imagen: ""
    },

    {
        id: "pez-globo-rio",
        nombre: "Pez globo de río",
        categoria: "pesca",
       nivelPesca: 6,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 230, 2: 345, 3: 460, 4: 920, 5: 1840 },
recetas: [],
        ubicacion: "Mar antiguo",
        actividad: "Diaria",
        horario: {
            inicio: 13,
            fin: 1,
            todoElDia: false
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Un pez que viaja entre ríos y mares, aunque su hogar habitual es el océano.",
        imagen: ""
    },

    {
        id: "tiburon-gato",
        nombre: "Tiburón gato",
        categoria: "pesca",
       nivelPesca: 6,
sombra: "Grande",
categoriaHeartodex: "Pesca marina",
valorVenta: { 1: 535, 2: 802, 3: 1070, 4: 2140, 5: 4280 },
recetas: [],
        ubicacion: "Pesca marina",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Sus ojos brillan bajo la luz de la luna, como los de un gatito.",
        imagen: ""
    },

    {
        id: "pez-remo-gigante",
        nombre: "Pez remo gigante",
        categoria: "pesca",
       nivelPesca: 7,
sombra: "Dorado",
categoriaHeartodex: "Pesca marina",
valorVenta: { 1: 535, 2: 802.5, 3: 1070, 4: 2140, 5: 4280 },
recetas: [],
        ubicacion: "Pesca marina",
        actividad: "Diaria",
        horario: {
            inicio: 7,
            fin: 19,
            todoElDia: false
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        
        anecdota: "Algunos lo llaman mensajero del palacio dragón; otros, demonio del fondo. Aún se sabe muy poco sobre él.",
        imagen: ""
    },

    {
        id: "besugo-negro",
        nombre: "Besugo negro",
        categoria: "pesca",
       nivelPesca: 7,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 230, 2: 345, 3: 460, 4: 920, 5: 1840 },
recetas: [],
        ubicacion: "Mar susurrante",
        actividad: "Diaria",
        horario: {
            inicio: 19,
            fin: 7,
            todoElDia: false
        },
        clima: ["lluvia", "arcoiris"],
        estrellas: 1,
        
        anecdota: "Tranquilo, incluso en la oscuridad más profunda.",
        imagen: ""
    },
       {
        id: "perca-rio",
        nombre: "Perca de río",
        categoria: "pesca",
      nivelPesca: 1,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 75, 2: 112, 3: 150, 4: 300, 5: 600 },
recetas: [],
        ubicacion: "Río",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        
        anecdota: "Vive en aguas dulces. Tan común como sabrosa, seguro la has probado.",
        imagen: ""
    },

    {
        id: "cacho-europeo",
        nombre: "Cacho europeo",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 75, 2: 112, 3: 150, 4: 300, 5: 600 },
recetas: [],
        ubicacion: "Lago",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 5,
        
        anecdota: "Amante de los lagos tranquilos. Debe de tener un carácter apacible.",
        imagen: ""
    },

    {
        id: "sardina",
        nombre: "Sardina",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 },
recetas: [],
        ubicacion: "Mar",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 4,
        
        anecdota: "Pececillo blanco azulado, fácil de encontrar en el mar.",
        imagen: ""
    },

        {
        id: "barbo",
        nombre: "Barbo",
        categoria: "pesca",
      nivelPesca: 1,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 75, 2: 112, 3: 150, 4: 300, 5: 600 },
recetas: [],
        ubicacion: "Río de aguas bajas",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 1,
        
        anecdota: "Es un barbo, no un bobo... ¡ni un pez gordo!",
        imagen: ""
    },
   
    {
        id: "perca-dorada-manchada",
        nombre: "Perca dorada manchada",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 },
recetas: [],
        ubicacion: "Río del crepúsculo",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        
        anecdota: "Una perca especial con grandes manchas de color verde oscuro en el cuerpo.",
        imagen: ""
    },

    {
        id: "pez-minnow",
        nombre: "Pez minnow",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 },
recetas: [],
        ubicacion: "Río sereno",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Tiene un cuerpo delgado y escamas finas.",
        imagen: ""
    },

    {
        id: "camaron-azul",
        nombre: "Camarón azul",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 },
recetas: [
    "Sushi de camarón frito recomendado por Bancho"
],
        ubicacion: "Río",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Se encuentra en muchos ríos. Se esconde entre algas para evitar el sol.",
        imagen: ""
    },

    {
        id: "blenido-rio",
        nombre: "Blénido de río",
        categoria: "pesca",
       nivelPesca: 5,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 150, 2: 225, 3: 300, 4: 600, 5: 1200 },
recetas: [],
        ubicacion: "Río del crepúsculo",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 1,
        
        anecdota: "Lleva dos florecitas danzantes en la cabeza.",
        imagen: ""
    },

       {
        id: "rana-europea",
        nombre: "Rana europea",
        categoria: "pesca",
      nivelPesca: 3,
sombra: "Azul",
categoriaHeartodex: "Cola de Sirena",
valorVenta: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: 2560 },
recetas: [],
        ubicacion: "Lago",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Heredera de la rana de estanque y la de pantano, se distribuye ampliamente en todo tipo de lagos.",
        imagen: ""
    },
   
    {
        id: "tenca",
        nombre: "Tenca",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 },
recetas: [],
        ubicacion: "Lago del bosque",
        actividad: "Diaria",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "De cuerpo resbaloso. Se dice que las tencas enfermas se frotan entre sí para curarse, por eso las llaman «pez doctor».",
        imagen: ""
    },
       {
        id: "quimera-del-atlantico",
        nombre: "Quimera del Atlántico",
        categoria: "pesca",
          nivelPesca: 4,
sombra: "Azul",
categoriaHeartodex: "Cola de Sirena",
valorVenta: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: 2560 },
recetas: [],
        ubicacion: "Mar",
        actividad: "Diarias",
        horario: {
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Mariposa del mar... con una colita y aguijones ocultos.",
        imagen: ""
    },

    {
        id: "espinoso-de-mar",
        nombre: "Espinoso de mar",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 },
recetas: [],
        ubicacion: "Mar antiguo",
        actividad: "Diarias",
        horario: {
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Aunque pequeño, es un gran cazador de pececitos y plancton.",
        imagen: ""
    },

    {
        id: "salmonete-listado",
        nombre: "Salmonete listado",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Dorado",
categoriaHeartodex: "Pesca marina",
valorVenta: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: 2560 },
recetas: [],
        ubicacion: "Pesca marina",
        actividad: "Diarias",
        horario: {
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 4,
        
        anecdota: "Tiene bigotes largos como una cabra: una apariencia muy sabia.",
        imagen: ""
    },

    {
        id: "jurel-real",
        nombre: "Jurel real",
        categoria: "pesca",
       nivelPesca: 2,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 155, 2: 232.5, 3: 310, 4: 620, 5: 1240 },
recetas: [],
        ubicacion: "Mar susurrante",
        actividad: "Diarias",
        horario: {
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 4,
        
        anecdota: "También llamado «falso jurel», porque se parece al jurel japonés pero no están emparentados.",
        imagen: ""
    },

    {
        id: "caballito-de-mar",
        nombre: "Caballito de mar",
        categoria: "pesca",
       nivelPesca: 2,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 100, 2: 150, 3: 200, 4: 400, 5: 800 },
recetas: [],
        ubicacion: "Mar de ballena",
        actividad: "Diarias",
        horario: {
            inicio: 1,
            fin: 19,
            todoElDia: false
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 4,
        
        anecdota: "Extraño, hermoso, y de movimientos lentos.",
        imagen: ""
    },

    {
        id: "pez-rape",
        nombre: "Pez rape",
        categoria: "pesca",
       nivelPesca: 2,
sombra: "Dorado",
categoriaHeartodex: "Pesca marina",
valorVenta: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: 2560 },
recetas: [],
        ubicacion: "Pesca marina",
        actividad: "Diarias",
        horario: {
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        
        anecdota: "Lleva un farol que atrae la cena.",
        imagen: ""
    },

    {
        id: "pulpo-comun",
        nombre: "Pulpo común",
        categoria: "pesca",
       nivelPesca: 2,
sombra: "Mediano",
categoriaHeartodex: "Pesca marina",
valorVenta: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: 2560 },
recetas: [],
        ubicacion: "Pesca marina",
        actividad: "Diarias",
        horario: {
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Un pulpo mediano, persigue la luz en la oscuridad.",
        imagen: ""
    },

    {
        id: "salmon-del-atlantico",
        nombre: "Salmón del Atlántico",
        categoria: "pesca",
       nivelPesca: 3,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 155, 2: 232.5, 3: 310, 4: 620, 5: 1240 },
recetas: [],
        ubicacion: "Mar de ballena",
        actividad: "Diarias",
        horario: {
            todoElDia: false,
            tramos: [
                { inicio: 1, fin: 7 },
                { inicio: 13, fin: 1 }
            ]
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        
        anecdota: "Uno de los miembros más comunes de la familia del salmón. Su carne anaranjada es rica en vitaminas, deliciosa cruda o cocida.",
        imagen: ""
    },

    {
        id: "pulpo-pigmeo-del-atlantico",
        nombre: "Pulpo pigmeo del Atlántico",
        categoria: "pesca",
       nivelPesca: 2,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 150, 2: 225, 3: 300, 4: 600, 5: 1200 },
recetas: [],
        ubicacion: "Mar susurrante",
        actividad: "Diarias",
        horario: {
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 4,
        
        anecdota: "Mini... pero con dignidad.",
        imagen: ""
    },

    {
        id: "cangrejo-ermitano",
        nombre: "Cangrejo ermitaño",
        categoria: "pesca",
       nivelPesca: 3,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 100, 2: 150, 3: 200, 4: 400, 5: 800 },
recetas: [],
        ubicacion: "Mar oriental",
        actividad: "Diarias",
        horario: {
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "¿Quién dijo que alquilar una casa cuesta dinero? El cangrejo ermitaño, experto en mudanzas, opina lo contrario.",
        imagen: ""
    },
       {
        id: "coregono-blanco",
        nombre: "Coregono blanco",
        categoria: "pesca",
          nivelPesca: 1,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 105, 2: 157, 3: 210, 4: 420, 5: 840 },
recetas: [],
        ubicacion: "Lago del Monte termal",
        actividad: "Diarias",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 1,
        
        anecdota: "De cuerpo delgado. Una vez que encuentra su hogar ideal, no se muda a la ligera.",
        imagen: ""
    },

    {
        id: "carpa-cruciana",
        nombre: "Carpa cruciana",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 75, 2: 112, 3: 150, 4: 300, 5: 600 },
recetas: [],
        ubicacion: "Lago suburbano",
        actividad: "Diarias",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "Cuenta la historia que los carpines nacen dorados, y se oscurecen con el tiempo.",
        imagen: ""
    },

    {
        id: "alburno-comun",
        nombre: "Alburno común",
        categoria: "pesca",
       nivelPesca: 1,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 },
recetas: [],
        ubicacion: "Lago",
        actividad: "Diarias",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 4,
        
        anecdota: "¿Molesto? ¿O solo haciendo puchero?",
        imagen: ""
    },

     {
        id: "alburno-binaculado",
        nombre: "Alburno binaculado",
        categoria: "pesca",
        nivelPesca: 1,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 },
recetas: [],
        ubicacion: "Lago suburbano",
        actividad: "Diarias",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        
        anecdota: "Es bello y tranquilo. No busca su comida, espera a que llegue sola.",
        imagen: ""
    },
    {
        id: "locha-china",
        nombre: "Locha china",
        categoria: "pesca",
       nivelPesca: 2,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 100, 2: 150, 3: 200, 4: 400, 5: 800 },
recetas: [],
        ubicacion: "Lago suburbano",
        actividad: "Diarias",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "De cuerpo liso y ágil, se mueve entre las grietas rocosas con total libertad. Ante el susto, se pega a la pared antes de reaccionar.",
        imagen: ""
    },

    {
        id: "pez-luna-de-lodo",
        nombre: "Pez luna de lodo",
        categoria: "pesca",
       nivelPesca: 3,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 100, 2: 150, 3: 200, 4: 400, 5: 800 },
recetas: [],
        ubicacion: "Lago del bosque",
        actividad: "Diarias",
        horario: {
            inicio: 7,
            fin: 1,
            todoElDia: false
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        
        anecdota: "Un pececillo color barro, escondido entre el barro... ¡Qué trabalenguas!",
        imagen: ""
    },

    {
        id: "eperlano",
        nombre: "Eperlano",
        categoria: "pesca",
       nivelPesca: 2,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 100, 2: 150, 3: 200, 4: 400, 5: 800 },
recetas: [],
        ubicacion: "Lago de la pradera",
        actividad: "Diarias",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 3,
        
        anecdota: "También llamado «pez capelín», huele ligeramente a pepino fresco.",
        imagen: ""
    },

    {
        id: "perca-ruffe",
        nombre: "Perca ruffe",
        categoria: "pesca",
       nivelPesca: 3,
sombra: "Pequeño",
categoriaHeartodex: "Común",
valorVenta: { 1: 100, 2: 150, 3: 200, 4: 400, 5: 800 },
recetas: [],
        ubicacion: "Lago del Monte termal",
        actividad: "Diarias",
        horario: {
            inicio: 13,
            fin: 1,
            todoElDia: false
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 2,
        
        anecdota: "Pez carnívoro que vive en lagos cálidos.",
        imagen: ""
    },

    {
        id: "eglefino",
        nombre: "Eglefino",
        categoria: "pesca",
       nivelPesca: 8,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 230, 2: 345, 3: 460, 4: 920, 5: 1840 },
recetas: [],
        ubicacion: "Mar oriental",
        actividad: "Diarias",
        horario: {
            todoElDia: false,
            tramos: [
                { inicio: 1, fin: 7 },
                { inicio: 13, fin: 1 }
            ]
        },
        clima: ["soleado", "arcoiris"],
        estrellas: 1,
        
        anecdota: "Prefiere permanecer inmóvil en el fondo marino poco profundo. Pero cuando tiene hambre, se mueve por todas partes en busca de comida.",
        imagen: ""
    },

    {
        id: "timalo",
        nombre: "Tímalo",
        categoria: "pesca",
       nivelPesca: 6,
sombra: "Mediano",
categoriaHeartodex: "Común",
valorVenta: { 1: 230, 2: 345, 3: 460, 4: 920, 5: 1840 },
recetas: [],
        ubicacion: "Lago suburbano",
        actividad: "Diarias",
        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },
        clima: ["soleado", "lluvia", "arcoiris"],
        estrellas: 1,
        
        anecdota: "Sus escamas reflejan un violeta de ensueño. ¡Qué lindo!",
        imagen: ""
    },
       {
        id: "locha-moteada",
        nombre: "Locha moteada",
        categoria: "pesca",

        nivelPesca: 1,
        sombra: "Pequeño",
        categoriaHeartodex: "Común",

        ubicacion: "Rio del gran tronco",
        actividad: "Diaria",

        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },

        clima: ["arcoiris", "soleado", "lluvia"],
        estrellas: 0,

        valorVenta: {
            1: 50,
            2: 75,
            3: 100,
            4: 200,
            5: 400
        },

        recetas: [],

        maestria: {
            novato: 200,
            experto: 600,
            maestro: 1200
        },

        anecdota: "Ligero, asustadizo... y muy escurridizo. ¡Que no se te escape!",
        imagen: ""
    },

    {
        id: "lucioperca",
        nombre: "Lucioperca",
        categoria: "pesca",

        nivelPesca: 3,
        sombra: "Mediano",
        categoriaHeartodex: "Común",

        ubicacion: "Rio del gran tronco",
        actividad: "Diaria",

        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },

        clima: ["arcoiris", "soleado"],
        estrellas: 0,

        valorVenta: {
            1: 230,
            2: 345,
            3: 460,
            4: 920,
            5: 1840
        },

        recetas: [],

        maestria: {
            novato: 100,
            experto: 300,
            maestro: 600
        },

        anecdota: "Le encanta la carne, por eso engorda con facilidad.",
        imagen: ""
    },

    {
        id: "tilapia",
        nombre: "Tilapia",
        categoria: "pesca",

        nivelPesca: 3,
        sombra: "Azul",
        categoriaHeartodex: "Cola de Sirena",

        ubicacion: "Río",
        actividad: "Diaria",

        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },

        clima: ["arcoiris", "soleado", "lluvia"],
        estrellas: 0,

        valorVenta: {
            1: 320,
            2: 480,
            3: 640,
            4: 1280,
            5: 2560
        },

        recetas: [],

        maestria: {
            novato: 100,
            experto: 300,
            maestro: 600
        },

        anecdota: "Es tan sabroso que lo llaman «el salmón blanco».",
        imagen: ""
    },

    {
        id: "carpa-europea",
        nombre: "Carpa Europea",
        categoria: "pesca",

        nivelPesca: 4,
        sombra: "Mediano",
        categoriaHeartodex: "Común",

        ubicacion: "Rio de crepusculo",
        actividad: "Diaria",

        horario: {
            inicio: 13,
            fin: 1,
            todoElDia: false
        },

        clima: ["arcoiris", "soleado"],
        estrellas: 0,

        valorVenta: {
            1: 230,
            2: 345,
            3: 460,
            4: 920,
            5: 1840
        },

        recetas: [],

        maestria: {
            novato: 100,
            experto: 300,
            maestro: 600
        },

        anecdota: "Un pez lleno de energía con una enorme fuerza. Al morder el anzuelo, salta intentando escapar. ¡Ten cuidado o la perderás!",
        imagen: ""
    },

    {
        id: "carpa-mariposa",
        nombre: "Carpa mariposa",
        categoria: "pesca",

        nivelPesca: 4,
        sombra: "Grande",
        categoriaHeartodex: "Común",

        ubicacion: "Lago de la pradera",
        actividad: "Diaria",

        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },

        clima: ["arcoiris", "lluvia"],
        estrellas: 0,

        valorVenta: {
            1: 320,
            2: 480,
            3: 640,
            4: 1280,
            5: 2560
        },

        recetas: [],

        maestria: {
            novato: 100,
            experto: 300,
            maestro: 600
        },

        anecdota: "El «hada del agua», elegante y pura, es muy sensible y necesita cuidados delicados.",
        imagen: ""
    },

    {
        id: "lota",
        nombre: "Lota",
        categoria: "pesca",

        nivelPesca: 4,
        sombra: "Grande",
        categoriaHeartodex: "Común",

        ubicacion: "Río Sereno",
        actividad: "Diaria",

        horario: {
            inicio: 13,
            fin: 1,
            todoElDia: false
        },

        clima: ["arcoiris", "soleado", "lluvia"],
        estrellas: 0,

        valorVenta: {
            1: 230,
            2: 345,
            3: 460,
            4: 920,
            5: 1840
        },

        recetas: [],

        maestria: {
            novato: 100,
            experto: 300,
            maestro: 600
        },

        anecdota: "Detecta olores con su \"bigote\" corto y curioso.",
        imagen: ""
    },

    {
        id: "pez-gobio",
        nombre: "Pez Gobio",
        categoria: "pesca",

        nivelPesca: 4,
        sombra: "Pequeño",
        categoriaHeartodex: "Común",

        ubicacion: "Mar oriental",
        actividad: "Diaria",

        horario: {
            inicio: 7,
            fin: 19,
            todoElDia: false
        },

        clima: ["arcoiris", "soleado", "lluvia"],
        estrellas: 0,

        valorVenta: {
            1: 150,
            2: 225,
            3: 300,
            4: 600,
            5: 1200
        },

        recetas: [],

        maestria: {
            novato: 100,
            experto: 300,
            maestro: 600
        },

        anecdota: "Con sus aletas pectorales, se adhiere a las rocas con facilidad y no se deja arrastrar por la corriente.",
        imagen: ""
    },

    {
        id: "pirana-vientre-rojo",
        nombre: "Piraña de vientre rojo",
        categoria: "pesca",

        nivelPesca: 4,
        sombra: "Mediano",
        categoriaHeartodex: "Común",

        ubicacion: "Rio del gran tronco",
        actividad: "Diaria",

        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },

        clima: ["arcoiris", "soleado", "lluvia"],
        estrellas: 0,

        valorVenta: {
            1: 230,
            2: 345,
            3: 460,
            4: 920,
            5: 1840
        },

        recetas: [],

        maestria: {
            novato: 100,
            experto: 300,
            maestro: 600
        },

        anecdota: "Su vientre rojo es natural, no es que se haya quemado.",
        imagen: ""
    },

    {
        id: "renacuajo",
        nombre: "Renacuajo",
        categoria: "pesca",

        nivelPesca: 4,
        sombra: "Pequeño",
        categoriaHeartodex: "Común",

        ubicacion: "Lago del monte termal",
        actividad: "Diaria",

        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },

        clima: ["arcoiris", "lluvia"],
        estrellas: 0,

        valorVenta: {
            1: 100,
            2: 150,
            3: 200,
            4: 400,
            5: 800
        },

        recetas: [],

        maestria: {
            novato: 150,
            experto: 450,
            maestro: 900
        },

        anecdota: "Pequeño ahora, rana en verano. Salvo que...alguien lo pesque antes.",
        imagen: ""
    },

    {
        id: "rutilo",
        nombre: "Rutilo",
        categoria: "pesca",

        nivelPesca: 5,
        sombra: "Pequeño",
        categoriaHeartodex: "Común",

        ubicacion: "Lago Suburbano",
        actividad: "Diaria",

        horario: {
            inicio: 1,
            fin: 1,
            todoElDia: true
        },

        clima: ["arcoiris", "soleado", "lluvia"],
        estrellas: 0,

        valorVenta: {
            1: 150,
            2: 225,
            3: 300,
            4: 600,
            5: 1200
        },

        recetas: [],

        maestria: {
            novato: 100,
            experto: 300,
            maestro: 600
        },

        anecdota: "Ojos rojos... ¿alguien lo hizo llorar?",
        imagen: ""
    }, 
   {
    id: "trucha",
    nombre: "Trucha",
    categoria: "pesca",

    nivelPesca: 5,
    sombra: "Mediano",
    categoriaHeartodex: "Común",

    ubicacion: "Río del crepúsculo",
    actividad: "Diaria",
    horario: {
        inicio: 1,
        fin: 1,
        todoElDia: true
    },

    clima: ["soleado", "lluvia", "arcoiris"],
    estrellas: 0,

    valorVenta: {
        1: 230,
        2: 345,
        3: 460,
        4: 920,
        5: 1840
    },

    recetas: [],

    maestria: {
        novato: 100,
        experto: 300,
        maestro: 600
    },

    anecdota: "Un pez de agua dulce muy común. Su carne es tierna y sabrosa.",
    imagen: ""
},

{
    id: "almeja-perla-gigante",
    nombre: "Almeja de perla gigante",
    categoria: "pesca",

    nivelPesca: 6,
    sombra: "Grande",
    categoriaHeartodex: "Común",

    ubicacion: "Mar antiguo",
    actividad: "Diaria",
    horario: {
        inicio: 1,
        fin: 1,
        todoElDia: true
    },

    clima: ["soleado", "lluvia", "arcoiris"],
    estrellas: 0,

    valorVenta: {
        1: 535,
        2: 802,
        3: 1070,
        4: 2140,
        5: 4280
    },

    recetas: [],

    maestria: {
        novato: 100,
        experto: 300,
        maestro: 600
    },

    anecdota: "Una almeja enorme que puede producir perlas de gran tamaño.",
    imagen: ""
},

{
    id: "pez-rubio",
    nombre: "Pez Rubio",
    categoria: "pesca",

    nivelPesca: 6,
    sombra: "Mediano",
    categoriaHeartodex: "Común",

    ubicacion: "Mar oriental",
    actividad: "Diaria",
    horario: {
        inicio: 1,
        fin: 1,
        todoElDia: true
    },

    clima: ["soleado", "lluvia", "arcoiris"],
    estrellas: 0,

    valorVenta: {
        1: 230,
        2: 345,
        3: 460,
        4: 920,
        5: 1840
    },

    recetas: [],

    maestria: {
        novato: 100,
        experto: 300,
        maestro: 600
    },

    anecdota: "Tiene unas aletas pectorales que parecen alas abiertas.",
    imagen: ""
},

{
    id: "salmon-keta",
    nombre: "Salmón Keta",
    categoria: "pesca",

    nivelPesca: 6,
    sombra: "Mediano",
    categoriaHeartodex: "Común",

    ubicacion: "Río",
    actividad: "Diaria",
    horario: {
        inicio: 1,
        fin: 1,
        todoElDia: true
    },

    clima: ["soleado", "lluvia", "arcoiris"],
    estrellas: 0,

    valorVenta: {
        1: 230,
        2: 345,
        3: 460,
        4: 920,
        5: 1840
    },

    recetas: [],

    maestria: {
        novato: 100,
        experto: 300,
        maestro: 600
    },

    anecdota: "Nada río arriba para regresar al lugar donde nació.",
    imagen: ""
},

{
    id: "anguila-europea",
    nombre: "Anguila Europea",
    categoria: "pesca",

    nivelPesca: 7,
    sombra: "Mediano",
    categoriaHeartodex: "Común",

    ubicacion: "Río sereno",
    actividad: "Diaria",
    horario: {
        inicio: 19,
        fin: 7,
        todoElDia: false
    },

    clima: ["lluvia", "arcoiris"],
    estrellas: 0,

    valorVenta: {
        1: 230,
        2: 345,
        3: 460,
        4: 920,
        5: 1840
    },

    recetas: [],

    maestria: {
        novato: 100,
        experto: 300,
        maestro: 600
    },

    anecdota: "Su cuerpo alargado y resbaladizo le permite desplazarse con facilidad entre las rocas.",
    imagen: ""
},

{
    id: "killi-rayado",
    nombre: "Killi rayado",
    categoria: "pesca",

    nivelPesca: 7,
    sombra: "Pequeño",
    categoriaHeartodex: "Común",

    ubicacion: "Lago suburbano",
    actividad: "Diaria",
    horario: {
        todoElDia: false,
        tramos: [
            { inicio: 1, fin: 7 },
            { inicio: 13, fin: 1 }
        ]
    },

    clima: ["soleado", "arcoiris"],
    estrellas: 0,

    valorVenta: {
        1: 150,
        2: 225,
        3: 300,
        4: 600,
        5: 1200
    },

    recetas: [],

    maestria: {
        novato: 100,
        experto: 300,
        maestro: 600
    },

    anecdota: "Con rayas blanquinegras, sueña de una vida tranquila.",
    imagen: ""
},

{
    id: "pez-espinoso-tres-espinas",
    nombre: "Pez espinoso de tres espinas",
    categoria: "pesca",

    nivelPesca: 7,
    sombra: "Pequeño",
    categoriaHeartodex: "Común",

    ubicacion: "Río de aguas bajas",
    actividad: "Diaria",
    horario: {
        inicio: 1,
        fin: 1,
        todoElDia: true
    },

    clima: ["lluvia", "arcoiris"],
    estrellas: 0,

    valorVenta: {
        1: 150,
        2: 225,
        3: 300,
        4: 600,
        5: 1200
    },

    recetas: [],

    maestria: {
        novato: 100,
        experto: 300,
        maestro: 600
    },

    anecdota: "Cuando pelea, las tres espinas de su cuerpo se erigen para intimidar a sus oponentes.",
    imagen: ""
},

{
    id: "pez-sculpin",
    nombre: "Pez Sculpin",
    categoria: "pesca",

    nivelPesca: 7,
    sombra: "Pequeño",
    categoriaHeartodex: "Común",

    ubicacion: "Lago del Monte termal",
    actividad: "Diaria",
    horario: {
        inicio: 7,
        fin: 1,
        todoElDia: false
    },

    clima: ["lluvia", "arcoiris"],
    estrellas: 0,

    valorVenta: {
        1: 150,
        2: 225,
        3: 300,
        4: 600,
        5: 1200
    },

    recetas: [],

    maestria: {
        novato: 100,
        experto: 300,
        maestro: 600
    },

    anecdota: "Por lo general, se queda en el fondo del agua, demasiado perezoso para nadar.",
    imagen: ""
},

{
    id: "cangrejo-real",
    nombre: "Cangrejo Real",
    categoria: "pesca",

    nivelPesca: 8,
    sombra: "Grande",
    categoriaHeartodex: "Común",

    ubicacion: "Mar de ballena",
    actividad: "Diaria",
    horario: {
        inicio: 7,
        fin: 1,
        todoElDia: false
    },

    clima: ["arcoiris"],
    estrellas: 0,

    valorVenta: {
        1: 535,
        2: 802,
        3: 1070,
        4: 2140,
        5: 4280
    },

    recetas: [
        "Paella de mariscos",
        "Cangrejo rey al vapor",
        "Pinzas fritas con camarón y queso"
    ],

    maestria: {
        novato: 60,
        experto: 180,
        maestro: 360
    },

    anecdota: "Su tierna carne es rica en diversas proteínas y grasas saludables. Se recomienda cocinarla al vapor.",
    imagen: ""
},

{
    id: "pez-dorado",
    nombre: "Pez Dorado",
    categoria: "pesca",

    nivelPesca: 8,
    sombra: "Pequeño",
    categoriaHeartodex: "Común",

    ubicacion: "Lago de la pradera",
    actividad: "Diaria",
    horario: {
        inicio: 7,
        fin: 1,
        todoElDia: false
    },

    clima: ["lluvia", "arcoiris"],
    estrellas: 0,

    valorVenta: {
        1: 250,
        2: 375,
        3: 500,
        4: 1000,
        5: 2000
    },

    recetas: [],

    maestria: {
        novato: 60,
        experto: 180,
        maestro: 360
    },

    anecdota: "Con sus colores deslumbrantes y su elegante postura, es la reina de belleza del mundo de los peces.",
    imagen: ""
} 

];
