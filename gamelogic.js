function displayWordSoFar(word, guesses) {
  // - [x] zet je testje op test.only (later weer weghalen)
  // - [x] loggen: wat is word, wat is guesses
  // console.log("Woord:", word);
  // console.log("Gokjes:", guesses);

  // - DOEL: javascript, ['a', 'b'] -> "_ _ _ _ _ _ _ _ _ _ "
  // - [x] javascript "splitten" split() -> ['j','a','v','a','s','c','r','i','p','t']
  const letterArray = word.split("");
  //console.log("Letters In Word:", letterArray);
  // - [x] een loop maken -> ['j','a','v','a','s','c','r','i','p','t']
  let output = "";
  for(i = 0; i < letterArray.length; i++) {
    const letterInWord = letterArray[i];
    //console.log("Letter to check:", letterInWord);
    // - [x] checken: zit de letter in guesses?
    const letterGuessed = guesses.includes(letterInWord);
    //console.log("Guessed?", letterGuessed);
    // - [x] if else
    // - [x] zo nee: "_ "
    if(!letterGuessed) {
      output = output + "_ ";
      //console.log(output);
    }
    if(letterGuessed) {
      output = output + letterInWord + " ";
    }
    //console.log(output);
   }

  // - [x] zo ja: "j " (niet j, maar de letter die we dan checken)
  // - [x] klaar? -> onze string die we hebben gemaakt returnen
  return output;
}

function isGameWon(word, guesses) {
  // DOEL:
  // word = "javascript" guesses ['j','a','v','s','c','r','i','p','t'] = true
  // word = "javascript" guesses [] , {"j", "a",] false
  // STRATEGIE:
  // Kunnen we 1 letter vinden die je niet hebt geraden? return False
  // Kunnen niet 1 letter vinden die je niet hebt geraden, return true
  // - [x] loggen: wat is word en guesses
  // - [x] logjes tussendoor.
  // - [x] word -> word.split(""): ['j','a','v','s','c','r','i','p','t']
  // - [] loopen over dat array met de letters van het woord. (['j','a','v','s','c','r','i','p','t']
  // - [] Voor elke letter in het woord, zit deze in guesses -> guesses.includes(letter)
  // - [] if
  // - [] in guesses true -> we gaan door
  // - [] in guesses false -> we stoppen, return false
  // - [] zijn we aan het einde van de loop? Einde vd functie, return true
  // - []
  // - []
  // - []
  // - []

  //console.log(word);
  //console.log(guesses);

  const letterWonArray = word.split("");
  //console.log("What gives this array?", letterWonArray);
  // let gameWonOutput = "";
  for(let i = 0; i < letterWonArray.length; i++) {
    //console.log("Game Won Output:" , gameWonOutput);
    const letterGameWon = letterWonArray[i]
    //console.log("Welke letter geeft het?:" , letterGameWon);

    const guessedGameWon = guesses.includes(letterGameWon);
    //console.log("Guessed Won:" , guessedGameWon);
    if(!guessedGameWon) {
      return false;
    }


    } return true;
}

function isGameLost(word, guesses) {
  // DOEL:
  // word = javascript guesses [javascript] -> true
  // word = javascript guesses = [q, w, e, a, t] -> false

  // STRATEGIE:
  // - [] fouten tellen
  // - [] 7 fout (of meer?) - return true
  // - [] minder dan 7 fout -> return false

  //const letterLostArray = word.split("");
  // console.log("wordt dit gelogd?:" , letterGameLost);
  // - [x] word -> word.split(""): ['j','a','v','s','c','r','i','p','t']
  let count = 0;

  // - [x] loopen over dat array met de letters van het woord. (['j','a','v','s','c','r','i','p','t']
  for(let i = 0; i < guesses.length; i++) {
    const guessedLetter = guesses[i];
    // console.log("What is the input?" , guessedLetter);
    // - [x] Voor elke letter in het woord, zit deze in guesses -> guesses.includes(letter)
    const isLetterGuessed = word.includes(guessedLetter);
    // console.log("Wrong input?:" , isLetterGuessed);
    if(!isLetterGuessed) {
      count++;
      // count = count +1;
    }

    // console.log("Is dit count?" , count);
  }
  if(count < 7) {
    return false;
  }
  if(count === 7){
    return true;
  }

  // - [x] for loop over guesses
  // - [] voor elke guess, zit deze guess (letter in het woord)
  // - [x] word.includes(guesses)
  // - [x] counter aanmaken -> start bij 0
  // - [x] If statement
  // - [x] Als true (doe niets)
  // - [x] Als false "+ doen" -> iets optellen - counter met 1 verhogen
  // - [] if statement aan het einde van de functie
  // - [x] if count === 7 -> return true
  // - [x] if count < 7 -> return false
  // - []

}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
