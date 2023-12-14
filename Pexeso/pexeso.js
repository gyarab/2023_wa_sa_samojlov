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

for (let cislo = 0; cislo < images.length; cislo++) {
  images.id = images[cislo];
}

// zdvojnasobeni fotek
var vsechno = images.concat(images);

var shuffledArray = vsechno.sort(() => 0.5 - Math.random());

for (let x = 0; x < shuffledArray.length; x++) {
  var objekt = document.createElement("div");
  objekt.style.background = "black";
  objekt.style.borderRadius = "15%";
  document.getElementById("obrazky").appendChild(objekt);

  var img = document.createElement("img");
  img.src = shuffledArray[x];
  img.style.visibility = "hidden";

  var kartaID = objekt.id;

  objekt.id = shuffledArray[x];
  objekt.appendChild(img);

  var array = [];

  (function (imgElement) {

    objekt.addEventListener("click", function () {

      if (imgElement.style.visibility === "visible") {
        imgElement.style.visibility = "hidden";
      } else {
        imgElement.style.visibility = "visible";
      }

      kartaID = shuffledArray[x];
      array.push(kartaID);

      if (array.length == 2) {
        if (array[0] == array[1]) {
          console.log("HOT");

          array.forEach(function (id) {
            var element = document.getElementById(id).remove();
            if (element) {
              element.remove();
            }
          });
        } else {
          var divAll = document.querySelectorAll("div");
          var imagesAll = document.querySelectorAll("img");

          divAll.forEach(function (div) {
            div.style.pointerEvents = "none";
          });

          imagesAll.forEach(function (img) {
            
            setTimeout(() => {
              img.style.visibility = "hidden";
          
              divAll.forEach(function (div) {
                div.style.pointerEvents = "auto";
              });
            }, 2000);
            
          });
          
        }
        array = [];
      }

      console.log(array);
    });
  })(img);
}
