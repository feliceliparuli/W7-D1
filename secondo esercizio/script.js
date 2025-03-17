const petName = document.getElementById("exampleInputPetName");
const ownerName = document.getElementById("exampleInputOwnerName");
const species = document.getElementById("exampleInputSpecies");
const breed = document.getElementById("exampleInputBreed");
console.log(breed);

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  verifySameOwner = function (pet) {
    if ((this.ownerName = pet.ownerName)) {
      return true;
    }
  };
}
let allPets = [];
const form = document.getElementById("petForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("INVIO");
  const pet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );
  console.log("Pet salvato!", pet);

  allPets.push(pet);
  console.log(allPets);
  form.reset();
});
