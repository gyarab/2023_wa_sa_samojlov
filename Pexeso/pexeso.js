let el = document.getElementById("stav-hry");

let counter = 5;

function odpocet() {
  el.innerHTML = counter;
  counter--;

  if (counter > 0) {
    setTimeout(odpocet, 1000);
  }
}

setTimeout(odpocet, 1000);

el.innerHTML = "Nová hra";

var images = [
  "img/kocka.jpg",
  "img/pes.jpeg",
  "img/tygr.jpg",
  "img/chameleon.jpg",
];

// zdvojnasobeni fotek
var vsechno = images.concat(images);

var shuffledArray = vsechno.sort( () => .5 - Math.random() );;

// vypsani fotek do tridy obrazky
/*for (let x = 0; x < shuffledArray.length; x++) {
    var img = document.createElement("img");
    img.src = shuffledArray[x];
    img.style.visibility = 'hidden';
    //document.getElementById("obrazky").appendChild(img);

    var objekt = document.createElement("div");
    objekt.style.background = 'black';
    document.getElementById("obrazky").appendChild(objekt);
}*/
let cislo = 0;

for (let x = 0; x < shuffledArray.length; x++) {
    var objekt = document.createElement("div");
    objekt.style.background = 'black';
    objekt.style.borderRadius = '25%';
    document.getElementById("obrazky").appendChild(objekt);

    var img = document.createElement("img");
    img.src = shuffledArray[x];
    img.style.pointerEvents = 'none';
    img.style.visibility = 'hidden';
    objekt.appendChild(img);

    
    (function(imgElement) {
        objekt.addEventListener('click', function() {
            
            if (imgElement.style.visibility === 'visible') {

                imgElement.style.visibility = 'hidden';
            } else {
                imgElement.style.visibility = 'visible';
            }
        });
    })(img);

}
