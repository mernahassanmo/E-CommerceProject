let meals = [];

let getRecipe = async (recipe) => {
  try {
    let Data = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${recipe}`
    );
    if (Data.status == 200) {
      let finalResults = await Data.json();
      meals = await finalResults.recipes;
      console.log(meals);
      Display();
    }
    // console.log(Data);
  } catch (error) {
    console.log(error);
  }
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Display = () => {
  let box = ``;
  for (let i = 0; i < meals.length; i++) {
    let price = randomIntFromInterval(10, 20);

    box += `<div  class="col-md-6 col-lg-4 col-xl-3 p-2  text-center ">
        <div id="item-${i}" class="item ">
        <div id='price'>${price}$</div>
        <img
          src=${meals[i].image_url}
          class="w-100 rounded mb-1 "
          alt=""
        />
        <h2 class='h5'>${meals[i].title}</h2>
        </div>
      </div> `;
  }
  document.getElementById("mealsContainer").innerHTML = box;

  for (let i = 0; i < meals.length; i++) {
    document.getElementById(`item-${i}`).addEventListener("click", (e) => {
      // console.log(e);
      onNavigateToDetailsPage(meals[i]);
    });
  }
};

getRecipe("pizza");

const onNavigateToDetailsPage = (meal) => {
  console.log(meal);
  localStorage.setItem("selectedMeal", JSON.stringify(meal));
  window.open("../Details/details.html");

  //
  //localStorage.setItem('user', JSON.stringify(user));
  //add this function as a click event listener
  //onClick:
  // save the selected meal||item to localStorage
  // navigate to detailsPage
  // get item from the localStorage
  // display it
};

let navList = document.getElementsByClassName("navList");

// console.log(navList);

for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", (e) => {
    getRecipe(e.target.innerHTML);
    console.log(e.target.innerHTML);
  });
}

let searchBar = document.getElementById(`searchBar`);
console.log(searchBar.value);

searchBar.addEventListener("keyup", () => {
  
  console.log( searchBar.value);
  // searchBar.value.toLowerCase().include()
  // getRecipe()

});
