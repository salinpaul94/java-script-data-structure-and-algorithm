let movie = "Lord of the Rings";
// let movie = "Batman v Surperman";  throws error, variable movie already declared

function starWarsFan() {
  const movie = "Star Wars";
  return movie;
}

function marvelFan() {
  movie = "The Averages";
  return movie;
}

function blizzardFan() {
  const isFan = true;
  let phrase = "Warcraft";
  console.log("Before if: " + phrase);
  if (isFan) {
    let phrase = "initial text";
    phrase = "For the Horde!";
    console.log("Inside if: " + phrase);
  }
  phrase = "For the Alliance!";
  console.log("After if: " + phrase);
}

console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
blizzardFan();

// Lord of the Rings
// Star Wars
// The Averages
// Before if: Warcraft
// Inside if: For the Horde!
// After if: For the Alliance!
