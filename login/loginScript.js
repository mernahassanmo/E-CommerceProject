
let empty = document.getElementsByClassName("empty");
let filled = document.getElementsByClassName("filled");
const filledStarPath = "../images/Filled_star.png";
const emptyStarPath = "../images/empty_star.png";
let prevStarsCount = 0;

const setStars = (empty, index) => {
  for (let j = 0; j < empty.length; j++) {
    if (j <= index) {
      empty[j].setAttribute("src", filledStarPath);
    } else {
      empty[j].setAttribute("src", emptyStarPath);
    }
  }
};
const undoHoverEffect = (stars) => {
  setStars(stars , prevStarsCount);
};

for (let i = 0; i < empty.length; i++) {
  empty[i].addEventListener("click", () => {
    setStars(empty, i);
    prevStarsCount = i;
  });
}
for (let i = 0; i < empty.length; i++) {
  empty[i].addEventListener("mouseover", () => {
    setStars(empty, i);

  });
}

for (let i = 0; i < empty.length; i++) {
  empty[i].addEventListener("mouseleave", () => {    
    undoHoverEffect(empty);
  });
}
 

const printPath = (stars) => {
  for (let i = 0; i < stars.length; i++) {
    console.log(stars[i].getAttribute("src"));
  }
};


document.getElementById('orderBtn').addEventListener('click',getLocation=()=>{
  navigator.geolocation.getCurrentPosition(showPosition);

})
function showPosition(position) {
  console.log(position); // hello

  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  // var userLocation = lat + ", " + lon;
  console.log(lat, lon);
  // window.open("http://maps.google.com/maps?q=" + lat + ",+" + lon);
  window.open('../../thankU/demo.html')
}


 function goToLocation(){
          var url = 'http/maps.google.com/maps?q='
      }
