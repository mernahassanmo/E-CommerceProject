// let checkedMeal = {};

const getCheckedMeal = () => {
 let checkedMeal = JSON.parse(localStorage.getItem("selectedMeal"));
  console.log(checkedMeal);
  displayMeal(checkedMeal);
};


// let selectedMeal = document.getElementById('selectedMeal');

const displayMeal = (checkedMeal) => {
  let box = ``;
  box += `<div  class="col-md-6 mx-auto   p-2  text-center ">
          <div id="item" class="item ">
          <img
            src=${checkedMeal.image_url}
            class="w-100 rounded-2 mb-1 "
            alt=""
          />
          <h2 class='h5'>${checkedMeal.title}</h2>
          </div>
        </div> `;

  document.getElementById("selectedMeal").innerHTML = box;
};

getCheckedMeal();

document.getElementById('enjoy').addEventListener('click',()=>{
  window.open('../login/login.html');  
})
