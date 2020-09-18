document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
    {
      name: "gerrit",
      img: "img/1.png"
    },
    {
      name: "krabs",
      img: "img/2.png"
    },
    {
      name: "leendert",
      img: "img/3.png"
    },
    {
      name: "octo",
      img: "img/4.png"
    },
    {
      name: "parel",
      img: "img/5.png"
    },
    {
      name: "patrick",
      img: "img/6.png"
    },
    {
      name: "plankton",
      img: "img/7.png"
    },
    {
      name: "puff",
      img: "img/8.png"
    },
    {
      name: "spongebob",
      img: "img/9.png"
    },
    {
        name: "gerrit",
        img: "img/1.png"
      },
      {
        name: "krabs",
        img: "img/2.png"
      },
      {
        name: "leendert",
        img: "img/3.png"
      },
      {
        name: "octo",
        img: "img/4.png"
      },
      {
        name: "parel",
        img: "img/5.png"
      },
      {
        name: "patrick",
        img: "img/6.png"
      },
      {
        name: "plankton",
        img: "img/7.png"
      },
      {
        name: "puff",
        img: "img/8.png"
      },
      {
        name: "spongebob",
        img: "img/9.png"
      },
  ];

    //Shuffle Deck
    shuffleDeck(cardArray);

    //Selecteer de (class) grid
    const grid = document.querySelector('.grid');
    //Gekozen kaarten (lege array)
    var cardsChosen = [];
    //Gekozen kaarten ID (lege array)
    var cardsChosenId = [];
    //Gewonnen kaarten (lege array)
    const cardsWon = [];

    //Maak de bord.
    function createBoard() {
        //for loop, waarvan cardarray 18 kaarten bezit.
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img");
            //<img data-id="x" src="img/...png">
            card.setAttribute("src", "img/blank.png");
            //genereer alle data-id's voor 
            card.setAttribute("data-id", i);
            //Maak de kaarten clickable
            card.addEventListener("click", flipCard);
            //Voeg alle images toe.
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
      //Selecteer alle img elementen
      var cards = document.querySelectorAll("img");
      
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];
    
        if(optionOneId == optionTwoId) {
          //Als je op dezelfde data-id attribute klikt dan komt er niks in verandering.
            cards[optionOneId].setAttribute("src", "img/blank.png");
            cards[optionTwoId].setAttribute("src", "img/blank.png");
            alert("Same Image");

        } else if (cardsChosen[0] === cardsChosen[1]) {
          /*Als er twee dezelfde kaarten zijn gevonden dan is er een match!
          We voegen blanco.png toe en dan verwijderen we de eventListener om
          niet meer op diezelfde plaats te kunnen klikken
          */
            alert("Match founded!");
            cards[optionOneId].setAttribute("src", "img/blanco.png");
            cards[optionTwoId].setAttribute("src", "img/blanco.png");
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);

            /*We 'pushen' de gekozen kaarten in de cardsWon array, zodat we weten welke
            kaarten er gewonnen zijn.
            */
            cardsWon.push(cardsChosen);

         } else {
           //Verkeerde kaart? Weer terug naar blank.png
            cards[optionOneId].setAttribute("src", "img/blank.png");
            cards[optionTwoId].setAttribute("src", "img/blank.png");
            alert("Sorry, try again.");
        }
        /*Initialiseer hier de arrays. Als we dat niet doen dan kunnen
        we niet de volgende kaarten gaan checken.
        */
        cardsChosen = [];
        cardsChosenId = [];

  }

    function flipCard() {
      //pak de attribute van data-id
        var cardId = this.getAttribute("data-id");
        /*
        cardsChosen is momenteel een lege array, maar als je het pusht
        dan is cardChosen een kopie van de vorige array
        */
        cardsChosen.push(cardArray[cardId].name)
        //pusht de cardid in de cardsChosenId array
        cardsChosenId.push(cardId)
        //Zet de attribute
        this.setAttribute("src", cardArray[cardId].img)
        //Als je twee kaarten gekozen hebt...
        if (cardsChosen.length === 2) {
          //Nu kijk je voor een match...
            setTimeout(checkForMatch, 500);
        }
    }

    function shuffleDeck(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

    createBoard();
});