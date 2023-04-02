// Descripción Empleadas

const empleadasAgencia = [
    {
        id: 0,
        nombre: "Ana María",    
        edad: 42,         
        descripcion: "Es venezolana, de 42 años, casada hace 20 años, con 2 hijos. Se recibió hace años de psicóloga, pero jamás ejerció porque decidió quedarse en casa a criarlos. Ahora que ya han crecido, desea comenzar su profesión y aportar al hogar económicamente. Su sueño es comprarse una casa.",
        atributos: [  "Paciente" ],
        fase: 1,
        avatar: "/../assets/avatares/anamaria.jpg",
        staff: true
    },
    {
        id: 1,
        nombre: "Aylén",    
        edad: 27,         
        descripcion: "Proviene de una familia de clase baja, por lo que al terminar la secundaria tuvo que comenzar a trabajar. Tiene 28 años. Siempre disfrutó mucho de dialogar con la gente y contribuir con el bienestar barrial participando en diversas actividades. Comenzó a estudiar una  Licenciatura en Trabajo Social a sus 20, pero debido al poco tiempo que puede dedicarle a su carrera, se encuentra cursando su tercer año. Su sueño es recibirse.",
        atributos: [  "Empática" ],
        fase: 1,
        avatar: "/../assets/avatares/aylen.jpg",
        staff: true
    },
    {
        id: 2,
        nombre: "Isabella",    
        edad: 30,         
        descripcion: "Tiene 30 años. Comenzó a trabajar a los 15 años en el negocio de su familia como cajera. Esto la llevó a estudiar para contadora pública. Harta de las demandas de su familia, al recibirse decidió abandonar la empresa para buscar su propio camino. Desea independizarse de su familia.",
        atributos: [  "Determinada", "Empática" ],
        fase: 2,
        avatar: "/../assets/avatares/isabella.jpg",
        staff: false
    },
    {
        id: 3,
        nombre: "Lucía",    
        edad: 26,         
        descripcion: "Tiene 26 años. Es deportista y trabaja en un gimnasio, dando clases. Cuando era adolescente vivía compitiendo y sus padres la presionaban mucho para ganar, por lo que exigía su cuerpo de más. Esto la llevó a lesionarse y se vió forzada a abandonar las competencias. Decidida a convertirse en deportóloga, comenzó a estudiar medicina. Su objetivo es ayudar a que otros atletas se cuiden y no sufran lo mismo que ella.",
        atributos: [  "Empática" ],
        fase: 2,
        avatar: "/../assets/avatares/lucia.png",
        staff: false
    },
    {
        id: 4,
        nombre: "Silvia",    
        edad: 68,         
        descripcion: "Tiene 68 años. Es Licenciada en Ciencias de la Educación. Pese a estar jubilada continúa trabajando, investigando y capacitando docentes. Enviudó hace varios años y jamás volvió a enamorarse. Prefiere dedicar su tiempo libre a sus nietos, su mayor fuente de adoración. Su sueño es transmitir su vocación de enseñar.",
        atributos: [  "Empática", "Elocuente", "Determinada" ],
        fase: 3,
        avatar: "/../assets/avatares/silvia.jpg",
        staff: false
    },
    {
        id: 5,
        nombre: "Verónica",    
        edad: 28,         
        descripcion: "Tiene 28 años.Se recibió recientemente de abogada, con honores. Proveniente de una familia de clase alta, vivió siempre bajo el amparo de sus padres. Al abandonar a su ex prometido en el altar porque no lo amaba, sus padres la exiliaron de la familia. Su sueño es comenzar a valerse por sí misma.",
        atributos: [ "Elocuente", "Determinada" ],
        fase: 3,
        avatar: "/../assets/avatares/vero.jpg",
        staff: false
    },
    {
        id: 6,
        nombre: "Clara",    
        edad: 28,         
        descripcion: "Tiene 29 años. Estudia música y trabaja como acompañante terapéutica. Proveniente de una familia de clase media, es adoptada e hija única. Adora a los niños y las fiestas navideñas. Su sueño es convertirse en psicoterapeuta y construir la familia grande que no tuvo.",
        atributos: [ "Paciente" ],
        fase: 3,
        avatar: "/../assets/avatares/clara.png",
        staff: false
    },
]

const clientesAgencia = [
    {
        id: 0,
        nombre: "Mariano",    
        edad: 36,         
        descripcion: "Tiene 36 años y es taxista. Su única familia es su hermana, una conocida de Aylén, que logró convencerlo de que se acercara a la clínica (agencia). Es un padre divorciado, que si bien paga la cuota de alimentos, se niega a ver a su hija, porque su exmujer no le permite llevarsela de la casa. Quiere mantener una relación con la niña, pero no sabe cómo hacerlo ante esta situación.",
        atributos: [ "Egoísta" ],
        fase: 1,
        avatar: "/../assets/avatares/mariano.jpg",        
    },
    {
        id: 1,
        nombre: "David",    
        edad: 18,         
        descripcion: "Tiene 18 años. Trabaja en el negocio de su padre y lleva 3 años en pareja con su novia. Durante su paso por la secundaria, se veían y mensajeaban a diario. Sin embargo, al comenzar la universidad, su novia dejó de verlo tan seguido y ya no le contesta los mensajes con la frecuencia de antes. David teme que su pareja lo esté engañando y no sabe si dejarla o no.",
        atributos: [ "Ansioso" ],
        fase: 1,
        avatar: "/../assets/avatares/david.jpg",        
    },
    {
        id: 2,
        nombre: "Oscar",    
        edad: 51,         
        descripcion: "Tiene 51 años y es programador. Se mudó a Argentina en búsqueda de un futuro mejor junto a su esposa, Ana María. Acostumbrado a que ella se ocupe de los cuidados de la casa y sus hijos, se pasa el día renegando de que el hogar ya no funciona como antes. Quiere que las cosas vuelvan a la “normalidad”.",
        atributos: [ "Egoísta", "Inseguro" ],
        fase: 2,
        avatar: "/../assets/avatares/oscar.jpg",        
    },
    {
        id: 3,
        nombre: "Cecilia",    
        edad: 37,         
        descripcion: "Tiene 37 años y sufre de ansiedad social. No tiene pareja y su hermana menor se casa a fin de mes y le pidió que sea su dama de honor. Quiere enfrentar su miedo para no perderse el acontecimiento pero, le aterra estar rodeada de tanta gente.",
        atributos: [ "Ansiosa" ],
        fase: 2,
        avatar: "/../assets/avatares/cecilia.jpg",        
    },
    {
        id: 4,
        nombre: "Victoria",    
        edad: 57,         
        descripcion: "Tiene 57 años y maneja su propia agencia inmobiliaria. Históricamente no ha tenido una buena relación con su hermana, la única familia que le queda. Sin embargo, ésta ha enfermado y necesita dinero que no tiene para pagar su tratamiento. Victoria se debate si debería ayudarla o no.",
        atributos: [ "Egoísta" ],
        fase: 2,
        avatar: "/../assets/avatares/victoria.jpg",        
    },
    {
        id: 5,
        nombre: "Iván",    
        edad: 31,         
        descripcion: "Tiene 31 años y lleva tres meses en una empresa nueva. Recientemente le encargaron hacer algunos viajes, pero es un pésimo conductor. Iván no sabe si pedirle a su jefe que lo cambie de área por miedo a que lo despidan, o arriesgarse a hacer los viajes de todos modos.",
        atributos: [ "Inseguro" ],
        fase: 2,
        avatar: "/../assets/avatares/ivan.jpg",        
    },
    {
        id: 6,
        nombre: "Ulises",    
        edad: 21,         
        descripcion: "Tiene 21 años. Estudia derecho, pues proviene de una familia de abogados y no quiere decepcionar a su padre. Sin embargo, a escondidas, estudia también artes visuales, su verdadera pasión. Llevo dos años haciendo esta doble vida, pero no cree ser capaz de seguir manteniendo el ritmo. Sabe que su situación es insostenible y se debate acerca de qué carrera dejar.",
        atributos: [ "Inflexible", "Inseguro", "Ansioso" ],
        fase: 3,
        avatar: "/../assets/avatares/ulises.jpg",        
    },
    {
        id: 7,
        nombre: "Lautaro",    
        edad: 24,         
        descripcion: "Tiene 24 años y estudia traductorado de inglés. Lleva dos años en pareja con una compañero que está por recibirse. Su novio ha ganado una beca para continuar sus estudios en otro país y quiere aceptarla, pero también desea mantener su relación con él. Lautaro no quiere pedirle a su pareja que se quede, pero tampoco se cree capaz de mantener una relación a distancia.",
        atributos: [ "Egoísta" ],
        fase: 3,
        avatar: "/../assets/avatares/lautaro.jpg",        
    },
    {
        id: 8,
        nombre: "Antonella",    
        edad: 37,         
        descripcion: "Tiene 37 años y es ingeniera en sistemas. Pese a ser muy inteligente, no consigue empleo en su ámbito de estudios porque falla continuamente en las entrevistas. Lleva seis meses buscando trabajo y está cada vez más angustiada. Necesita ayuda para prepararse mejor para afrontar la situación.",
        atributos: [ "Insegura" ],
        fase: 3,
        avatar: "/../assets/avatares/antonella.jpg",        
    },
    {
        id: 8,
        nombre: "Leonardo",    
        edad: 35,         
        descripcion: "Tiene 35 años y es padre soltero. Perdió a su madre hace algunos años, víctima de cáncer de pulmón. Por el bien de su hija, se prometió dejar el cigarrillo. Sin embargo, cada vez que lo intenta, reincide al poco tiempo, pues todos en su oficina fuman. Quiere ser fiel a su promesa pero cada vez tiene menos fé de lograrlo.",
        atributos: [ "Ansioso" ],
        fase: 3,
        avatar: "/../assets/avatares/leonardo.jpg",        
    },

]




// Diálogos Aylen Stage 1

const stageUnoAylen = [
    {
        value: "¡Buen día Mariano! Me Llamo Aylén. ¿Cómo estás?",
        img: false,
        name: "Aylén"
    },
    {
        value: "Mariano mira a todos lados, pero permanece en silencio. Tiene el ceño fruncido",
        img: "cara molesto",
        name: ""
    },
    {
        value: "¿Cómo puedo ayudarte? Me contó tu hermana que estabas teniendo problemas con...",
        img: false,
        name: "Aylén"
    },
    {
        value: "¡Yo no tengo ningún problema!",
        img: "exaltado",
        name: "Mariano"
    },
    {
        value: "Perdón, me expresé mal, quise decir...",
        img: false,
        name: "Aylen"
    },
    {
        value: "¡Ella es la que tiene problemas! ¡Todo es un problema con ella!",
        img: "exaltado",
        name: "Mariano"
    },
    {
        value: "¿Con tu hermana...?",
        img: false,
        name: "Aylén"
    },
    {
        value: "¡No! ¡Con Sandra! Si quiero ver a la nena porque quiero ver a la nena, si no quiero ver a la nena, porque no quiero ver a la nena.",
        img: "exaltado",
        name: "Mariano"
    },
    {
        value: "¿Sandra es la mamá de tu hija?",
        img: false,
        name: "Aylén"
    },
    {
        value: "Sí",
        img: "neutro",
        name: "Mariano"
    },
    {
        value: "Bien. ¿Podrías explicarme mejor qué pasó con Sandra?",
        img: false,
        name: "Aylén"
    },
    {
        value: "Nos separamos hace 3 meses y no me deja llevarme a la nena a ningún lado. Pretende que la vaya a ver a su casa. ¡A su casa!",
        img: "molesto",
        name: "Mariano"
    },
    {
        value: [
            {
                opcion: "Wow. ¡Qué egoísta tu ex mujer! ¿Quién se cree que es para poner las condiciones en las cuales vos podés ver a tu hija?",
                puntaje: 0
            },
            {
                opcion: "¿Podrías explicarme por qué te exige que la veas sólo en su casa?",
                puntaje: 2
            },
            {
                opcion: "Tal vez podrías hablar con ella, tratar de llegar a un acuerdo, en el que pase algunos días en tu casa y otros en la de ella.",
                puntaje: 1
            }
        ],
        img: false
    }, 
    {
        value: "Dice que todavía es muy chica, que si no la ve se angustia y se larga a llorar.",
        img: "neutro",
        name: "Mariano"
    },
    {
        value: "Dice que todavía es muy chica, que si no la ve se angustia y se larga a llorar.",
        img: "neutro",
        name: "Mariano"
    },
    {
        value: "Perdón, pero... ¿Cuántos años tiene tu nena?",
        img: false,
        name: "Aylén"
    },
    {
        value: "Cumplió el año hace un par de semanas.",
        img: "neutro",
        name: "Mariano"
    },
    {
        value: "Y antes de que se separaran, ¿Pasabas mucho tiempo a solas con tu nena?",
        img: false,
        name: "Aylén"
    },
    {
        value: "¡Ojalá! Me la pasaba trabajando. Ella dejó su laburo para cuidarla.",
        img: "molesto",
        name: "Mariano"
    },
    {
        value: [
            {
                opcion: "¿No te parece que quizás estás malinterpretado la situación? Desde donde yo lo veo, te pide que la visites en su casa, su hogar, para cuidarla. Así, en caso de que la nena se angustie, puede darte una mano.",
                puntaje: 2
            },
            {
                opcion: "¡Qué exagerada! ¡Como si hoy en día fuera necesario renunciar a tu trabajo para criar a un hijo! ¿En qué año se quedó?",
                puntaje: 0
            },
            {
                opcion: "Entiendo tu enojo, pero creo que tampoco debe ser fácil para ella. Pensá que está acostumbrada a pasar todo el día con la nena y la idea de tenerla lejos la debe aterrar.",
                puntaje: 1
            }
        ],
        img: false
    },
    {
        value: "Supongo que quiere ser una buena madre.",
        img: "cansado",
        name: "Mariano"
    },
    {
        value: "Supongo que quiere ser una buena madre.",
        img: "cansado",
        name: "Mariano"
    },
    {
        value: "Cuando ella era chica sus viejos nunca estaban en la casa y ella se crió con niñeras. Creo que no quiere que nuestra hija pase por lo mismo.",
        img: "triste",
        name: "Mariano"
    },
    {
        value: [
            {
                opcion: "Si no quiere que tu hija pase por lo mismo que ella, también tiene que entender que la nena necesita a sus dos padres. Si vos no te sentís cómodo yendo a la casa de ella y ella no se siente cómoda dejándo que te la lleves, tal vez deberían buscar un punto medio. Un lugar que les sirva a ambos para poder compartir con la nena hasta que sea más grande.",
                puntaje: 1
            },
            {
                opcion: "Quizás deberías hablar con ella nuevamente. Si la nena se angustia cuando no la ve, también debe ser porque no está acostumbrada a pasar tiempo sin ella. ¿Y si le propones que te acompañe a tus salidas con ella? Así paulatinamente va a sentirse más cómoda con vos y tu ex mujer es capaz de ver que no hay nada de qué preocuparse.",
                puntaje: 2
            },
            {
                opcion: "Que sus padres la abandonaran de chica no es tu culpa. Está depositando sus inseguridades en vos y negándote la posibilidad de ser un mejor padre que el que ella tuvo. ¿Cómo vas a generar un vínculo con la nena si no te deja verla?",
                puntaje: 0
            }
        ],
        img: false
    }, 
    {
        value: "Se queda en silencio y pensativo durante un momento.",
        img: "depende del cálculo de las elecciones propuestas",
        name: ""
    },
    {
        value: "Se queda en silencio y pensativo durante un momento.",
        img: "depende del cálculo de las elecciones propuestas",
        name: ""
    },
    {
        value: "Creo que... me diste mucho para pensar. Voy a hablarlo con mi hermana y veré mejor qué hago. Gracias.",
        img: "depende del calculo de las respueestas obtenidas",
        name: "Mariano"
    },
    {
        value: "Mariano se levanta de su silla y estrecha tu mano. Aylén sonríe satisfecha.",
        img: "depende del cálculo de las elecciones propuestas",
        name: ""
    }
]

// Diálogos Ana María Stage 1

const stageUnoAnaMaria = [
    {
        value: "Mariano toca la puerta",
        img: "no entró todavía",
        name: ""
    },
    {
        value: "¿Puedo pasar?",
        img: "no entró todavía",
        name: "Mariano"
    },
    {
        value: "Ana María está regando sus plantas mientras tararea una canción.",
        img: "no entró todavía",
        name: ""
    },
    {
        value: "Pasá, en un momento estoy con vos.",
        img: "no entró todavía",
        name: "Ana María"
    },
    {
        value: "Ana María continúa con su tarareo. Mariano mira su reloj mientras golpea con sus dedos el escritorio. Ana María se sienta frente a Mariano.",
        img: "imagen mariano nervioso",
        name: ""
    },
    {
        value: "Bien Mariano. Contame, ¿Cómo puedo ayudarte?",
        img: "nervioso",
        name: "Ana María"
    },
    {
        value: "No lo sé, dígame usted. Para eso le pago.",
        img: "fastidiado",
        name: "Mariano"
    },
    {
        value: "Tengo entendido que estás teniendo problemas con su ex-pareja por la custodia de su hija.",
        img: "fastidiado",
        name: "Ana María"
    },
    {
        value: "¿Ve? Ahí está mi punto. ¡Todos asumen que yo soy el que tiene problemas! Yo solo quiero una solución vieja, ¡estoy harto de los problemas!",
        img: "muy enojado",
        name: "Mariano"
    },
    {
        value: "Ana María permanece en silencio observando a Mariano, que aprieta su puño frustrado.",
        img: "mariano frustrado",
        name: ""
    },
    {
        value: "Yo sólo quiero ver a mi nena. Hace 3 meses que nos separamos y no me deja llevarla nena a ningún lado. Espera que la vaya a ver a su casa solamente. Y yo no tengo ganas de estar en su casa. ",
        img: "mariano muy frustrado",
        name: "Mariano"
    },
    {
        value: [
            {
                opcion: "¿Intentaste hablar esto con un abogado? Tal vez un profesional de la ley puede ayudarte mejor. ",
                puntaje: 0
            },
            {
                opcion: "Si ella te pide que la veas en su hogar, debe tener una buena razón para hacerlo. Nadie pone esa clase de límites arbitrariamente. ",
                puntaje: 1
            },
            {
                opcion: "Mientras ella tenga la custodia legal, vas a tener que adaptarte a sus reglas. Si lo que queres realmente es ver a tu hija, creo que el espacio donde lo hagas debería ser lo de menos.",
                puntaje: 1
            }
        ],
        img: false
    }, 
    {
        value: "¿Usted cree que no pensé en eso? Mi nena apenas tiene un año. Yo me paso todo el día trabajando para que no le falte nada. ",
        img: "mariano muy frustrado",
        name: "Mariano"
    },
    {
        value: "¿Usted cree que no pensé en eso? Mi nena apenas tiene un año. Yo me paso todo el día trabajando para que no le falte nada. ",
        img: "mariano muy frustrado",
        name: "Mariano"
    },
    {
        value: "Lo que menos quiero es llevar esto a una batalla legal. Pero con la excusa de que todavía está amamantando y que no está acostumbrada a estar sola conmigo, no me deja verla.",
        img: "mariano muy frustrado",
        name: "Mariano"
    },
    {
        value: [
            {
                opcion: "Que no le falte nada implica también que esté presente mientras crece. Quizás si hubieras trabajado menos y estado más en la casa para ayudarla, hoy no tendrías este problema. ",
                puntaje: 0
            },
            {
                opcion: "Su ex mujer tiene un punto. Si ella y su hija viven allí desde antes, ese es su hogar, su lugar seguro. Y es comprensible que quiera mantenerla allí mientras continúa amamantando. ",
                puntaje: 0
            },
            {
                opcion: "Entiendo que te sientes atrapado: o cedés antes sus demandas y no disfrutas de tiempo a solas con tu hija, o no la ves en absoluto.",
                puntaje: 1
            }
        ],
        img: false
    }, 
    {
        value: "Yo entiendo que no soy un padre perfecto. Hago lo mejor que puedo. Pero ella tampoco es la madre perfecta y yo no tengo la culpa de que sus viejos nunca hayan estado presentes mientras ella crecía.",
        img: "cansado",
        name: "Mariano"
    },
    {
        value: "Yo entiendo que no soy un padre perfecto. Hago lo mejor que puedo. Pero ella tampoco es la madre perfecta y yo no tengo la culpa de que sus viejos nunca hayan estado presentes mientras ella crecía.",
        img: "cansado",
        name: "Mariano"
    },
    {
        value: "Tampoco quiero que a mi nena le pase lo mismo, pero no me siento cómodo estando en mi vieja casa.",
        img: "cansado",
        name: "Mariano"
    },
    {
        value: [
            {
                opcion: "Mirá. Si el problema es que aún toma teta, podes pedirle que comience a darle mamadera. Accedes a las visitas en su hogar hasta que la nena se acostumbre y una vez que lo haga, pueden pactar que te las lleves por unas horas. ¿No?",
                puntaje: 1
            },
            {
                opcion: "Tu hija tiene necesidades. Y a menos que a vos te vayan a crecer milagrosamente pechos para amamantar, corresponde que este con su madre. Si querés estar presente, tu deber en este momento es dejar atrás tu incomodidad y ser un adulto.",
                puntaje: 0
            },
            {
                opcion: "Los dos están siendo unos egoístas. No se trata de lo que vos queres ni de lo que ella quiere. Se trata de lo que es mejor para su hija. Necesitan sentarse a dialogar sobre los cuidados de manera equitativa para encontrar un punto medio que les permita a ambos compartir con ella.",
                puntaje: 1
            }
        ],
        img: false
    },
    {
        value: "Mariano se queda en silencio y pensativo durante un momento.",
        img: "triste",
        name: ""
    },
    {
        value: "Mariano se queda en silencio y pensativo durante un momento.",
        img: "triste",
        name: ""
    },
    {
        value: "Creo que… Me diste mucho para pensar. Voy a hablarlo con mi hermana y veré mejor qué hago.",
        img: "triste",
        name: "Mariano"
    },
    {
        value: "Mariano se levanta de su silla y te mira derrotado.",
        img: "frustrado",
        name: "Mariano"
    },
    {
        value: "Gracias por tu tiempo.",
        img: "frustrado",
        name: "Mariano"
    },
    {
        value: "Ana María observa en su teléfono la foto de sus dos hijos. Una mueca de disgusto se dibuja en su cara.",
        img: "sin personaje",
        name: ""
    }        
]

// Diálogos pre-cierre Stage 1

// Si asignaron caso a Ana María

const preCierreStage1AMaria = [
    {
        value: "Uff, qué dia agotador. Agradezco que los centennials no tengan miedo de hablar sobre cómo se sienten.",        
        name: "Aylén",
        img: "Aylén"
    },
    {
        value: "Imagino que salió todo bien entonces.",        
        name: "Vos",
        img: "Vos"
    },
    {
        value: "¿Sale ese vinito? 😉",
        img: "Aylén",
        name: "Aylén"
    },
    {
        value: "Yo paso chicas 😪",
        img: "ana maria",
        name: "Ana María"
    },
    {
        value: "¿Pasó algo Ana?",
        img: "Vos",
        name: "Vos"
    },
    {
        value: "No, bah no sé. Creo que me tomé muy personal el caso… Solamente quiero volver a casa a abrazar a los chicos.",
        img: "Ana María",
        name: "Ana María"
    },
    {
        value: "Tranqui, de a poco las cosas van a salir mejor 🙂",
        img: "Vos",
        name: "Vos"
    }
]

const preCierreStage1Aylen = [
    {
        value: "Es increíble como los chicos hoy hablan con todo el mundo menos con sus padres.",
        img: "Ana María",
        name: "Ana María"
    },
    {
        value: "¿Caso complicado?",
        img: "Aylén",
        name: "Aylén"
    },
    {
        value: "No, al contrario. Pan comido 😁",
        img: "Ana María",
        name: "Ana María"
    },
    {
        value: "Me alegro que estés disfrutando del trabajo Ana.",
        img: "Vos",
        name: "Vos"
    },
    {
        value: "¿Sale ese vinito entonces? 😉",
        img: "Aylén",
        name: "Aylén"
    },
    {
        value: "🥂",
        img: "Vos",
        name: "Vos"
    },
]

// Stage 2

