// soal 1
let luas = (panjang,lebar) => panjang * lebar;
let keliling = (panjang,lebar) => (panjang + lebar) * 2;

console.log(luas(2,1));
console.log(keliling(2,1));

// soal 2
const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName: () => console.log(firstName + " " + lastName)
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 

// soal 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}

const {firstName, lastName, address, hobby} = newObject

// Driver code
console.log(firstName, lastName, address, hobby)

// soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]
//Driver Code
console.log(combined)

// soal 5
const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet
var after = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`
console.log(after);