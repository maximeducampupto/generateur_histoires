var liste = {

    noms: [
        "Michel Varuk",
        "Jim Carrey",
        "Emma Watson",
        "Renaud",
        "Jacques",
        "Bernadette",
        "Léa",
        "Nina",
        "Michel",
        "H.P Lovecraft",
        "Bill Gates",
        "Albert Einstein",
        "Vivala",
        "Eminem",
        "Paul Rudd",
        "Johnny Depp",
        "The Rock",
        "Julien Lepers",
        "Hugh Jackman",
        "Gotaga",
        "Philippe Etchebest"
    ],

    objets: [
        "ordinateur",
        "téléphone",
        "dé à coudre",
        "clavier",
        "tasse",
        "sabre",
        "cuillière",
        "manette",
        "vélo",
        "téléphone portable",
        "montre",
        "décapsuleur",
        "ballon de foot",
        "pièces jaunes",
        "lunettes",
        "fourchette",
        "tasse",
        "avion",
        "miche de pain",
        "ordinateur",
        "clavier"
    ],

    temperatures: [
        10,
        30,
        -50,
        5,
        69,
        18,
        -30,
        -40,
        69,
        70,
        5,
        28,
        37,
        100,
        12,
        25,
        37,
        25,
        28,
        24,
        30,
    ],

    lieux: [
        "Floyon",
        "Wignehies",
        "Tokyo",
        "Reykjavik",
        "Le Touquet",
        "Fourmies",
        "Palais de l'Elysée",
        "Mairie de Paris",
        "Mc Do",
        "Burger King",
        "Chuttes du Niagara",
        "Hide Park",
        "Barcelona",
        "Paris",
        "Bondy",
        "Rio de Janeiro",
        "Big Ben",
        "Mont Fuji",
        "KFC",
        "Paris",
        "Montcuq"
    ],

    verbes: [
        "code",
        "copie",
        "nage",
        "monte",
        "développe",
        "joue",
        "vote",
        "anarque",
        "mange",
        "mange",
        "accompli",
        "communique",
        "coordonne",
        "aime",
        "code",
        "boit",
        "souleve",
        "évolue",
        "s'envoie",
        "enfourne",
        "monte"
    ],

    nom : null,
    objet : null,
    temp : null,
    lieu : null,
    verbe : null,
    histoire: [],

    generate: function(username)
    {
       this.getRandomWords();

       this.histoire =
           [`${this.nom} habite à ${this.lieu}, c'est un petit coin sympa où il fait souvent ${this.temp} degrés. ${this.nom} est un fan de ${this.objet} qu'il ${this.verbe} plusieurs fois par jour.`];

        this.getRandomWords("restrict");

       this.histoire.push(
           `C'est justement à ${this.lieu} que ${this.nom} ${this.verbe} également des ${this.objet}s`
       );

       this.histoire.push(
           `Parfois, lorsque tout le monde dort, ${this.nom} s'amuse à crier dans les rues:${this.generateQuote(username)}`
       );

        this.display();

    },

    getRandomWords(param)
    {
        let random = Math.floor(Math.random() * 21);

        if (!param)
        {
            this.nom = this.noms[random];
            this.lieu = this.lieux[random];
        }

        this.objet = this.objets[random];
        this.temp = this.temperatures[random];
        this.verbe =  this.verbes[random];
    },

    display: function()
    {

        for (var i = 0; i <= 2; i++)
        {
            let p = document.createElement('p');
            p.innerHTML = this.histoire[i];
            document.getElementById('histoire').appendChild(p);
        }
    },

    generateQuote: function(username)
    {
        let quote = '"',
            noms = [username, this.nom];
        for (let i = 0; i < 10; i++)
        {
            let random = Math.floor(Math.random() * 2);
            quote += `${noms[random].toUpperCase()}! `;
        }

        quote += '"';
        return quote;
    }

};

document.getElementById('generer').addEventListener('click', function() {
    let username = document.getElementById('username').value;

    if (username.length > 0)
    {
        liste.generate(username);
    }
});

