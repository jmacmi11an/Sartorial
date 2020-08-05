

const blackBoots = {type: "shoes"}
const blackCafeRacerJacket = {type: "jacket"}
const blackTShirt = {type: "top"}
const blueBlazer = {type: "jacket"}
const blueChambrayShirt = {type: "top"}
const blueJeans = {type: "bottoms"}
const bluePolo = {type: "top"}
const blueShirt = {type: "top"}
const blueTShirt = {type: "top"}
const greySweater = {type: "sweater"}
const greyTrousers = {type: "bottoms"}
const khakiChinos = {type: "bottoms"}
const whiteShirt = {type: "top"}
const whiteSneakers = {type: "shoes"}
const whiteTShirt = {type: "top"}


const filteredWardrobe = function(object) {
  const filtered = [];
  Object.keys(object)
    .reduce(key => {
      object[key] === true
    })
    console.log(filtered)

  }


    (
      function(key){
        filtered.push(object[key] === true);
      }
    )
    return filtered;
}

array.map
