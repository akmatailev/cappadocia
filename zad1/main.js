let img = document.getElementById("img");
const photo = [
  "https://www.travellingking.com/wp-content/uploads/2022/09/Turkey-Rocks-in-Cappadocia-at-sunrise-in-Turkey.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvNut2TGMb8GltUGKlR3-gIhVhHGNa5jIoQ&usqp=CAU",
  "https://www.travellingking.com/wp-content/uploads/2022/09/Turkey-Rocks-in-Cappadocia-at-sunrise-in-Turkey.jpg",
];
let i = 0;
function prev() {
  if (i == -1) {
    i = 2;
  } else {
    img.src = photo[i];
    i--;
  }
}
function next() {
  if (i == 3) {
    i = 0;
  } else {
    img.src = photo[i];
    i++;
  }
}
let img2 = document.getElementById("img2");
const photo2 = [
  "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/88/29/fc.jpg",
  "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/88/29/fc.jpg",
  "https://lp-cms-production.imgix.net/2023-04/Cappadocia%20Turkey%20Pashaco%20shutterstock_1086845579%20RFC.jpg",
];
let a = 0;
function prevs() {
  if (a == -1) {
    a = 2;
  } else {
    img2.src = photo2[a];
    a--;
  }
}
function prevs() {
  if (a == 3) {
    a = 0;
  } else {
    img2.src = photo2[a];
    a++;
  }
}
