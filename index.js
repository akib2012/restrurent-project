console.log("connected bhiya");


/* here categori item added and disply the ui */

/* load data */
const loadcetagoridata = () => {
    const url = "https://taxi-kitchen-api.vercel.app/api/v1/categories";
    fetch(url)
        .then(res => res.json())
        .then(cetegoris => cetegorisDisplay(cetegoris.categories));

}

/* dis play the cetegoris */


const cetegorisDisplay = (cetegoriss) => {
    const categoryBtn = document.getElementById("category_btn");

    cetegoriss.forEach(cetegori => {

        const newcategoryBtn = document.createElement("button");
        newcategoryBtn.classList.add("btn", "shadow", "btn-block", "btn-category", "flex", "items-center", "justify-center");

        // here pass the specific id ehen the clicke specific food name >>
        newcategoryBtn.addEventListener("click", () => {
            loadperticularData(cetegori.id);
        });


        newcategoryBtn.innerHTML = `<img
              src="${cetegori.categoryImg}"
              alt=""
              class="w-5 h-5 px-20% rounded-2xl"
            />${cetegori.categoryName}
          </button>`;
        categoryBtn.appendChild(newcategoryBtn);



    });



}



/* randome item load and show the display here */

const randomload = () => {
    const ranuri = "https://taxi-kitchen-api.vercel.app/api/v1/foods/random";
    fetch(ranuri)
        .then(res => res.json())
        .then(data => showRandomeFoods(data.foods))
}


const showRandomeFoods = (foodss) => {
    const foodsSections = document.getElementById("food-container");
    foodss.forEach(food => {
        const newFoodsSections = document.createElement("div");
        // newFoodsSections.innerHTML = "";
        newFoodsSections.innerHTML = `<div class="p-5 m-4 bg-white flex gap-3 shadow rounded-xl">
                    <div class="img flex-1">
                        <img src="${food.foodImg}" alt=""
                            class="w-[160px] rounded-xl h-[160px] object-cover" />
                    </div>
                    <div class="flex-2">
                        <h1 class="text-xl font-bold">
                            ${food.title}
                        </h1>

                        <div class="badge badge-warning">${food.category}</div>

                        <div class="divider divider-end">
                            <h2 class="text-yellow-600 font-semibold">
                                $ <span class="price">${food.price}</span> BDT
                            </h2>
                        </div>

                        <button class="btn btn-warning">
                            <i class="fa-solid fa-square-plus"></i>
                            Add This Item
                        </button>
                    </div>
                </div>`;
        foodsSections.appendChild(newFoodsSections);
    });
}






/* her load and display the food as the cetagoris name  */

const loadperticularData = (id) => {
    const uri = `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`
    fetch(uri)
        .then(res => res.json())
        .then(data => displayategoriFood(data.foods))
}

const displayategoriFood = (fooids) => {
    const foodsSections = document.getElementById("food-container");
    foodsSections.innerHTML = "";
    fooids.forEach(food => {
        const newFoodsSections = document.createElement("div");
        // newFoodsSections.innerHTML = "";
        newFoodsSections.innerHTML = `<div class="p-5 m-4 bg-white flex gap-3 shadow rounded-xl ">
                    <div class="img flex-1">
                        <img src="${food.foodImg}" alt=""
                            class="w-[160px] rounded-xl h-[160px] object-cover" />
                    </div>
                    <div class="flex-2">
                        <h1 class="text-xl font-bold">
                            ${food.title}
                        </h1>

                        <div class="badge badge-warning">${food.category}</div>

                        <div class="divider divider-end">
                            <h2 class="text-yellow-600 font-semibold">
                                $ <span class="price">${food.price}</span> BDT
                            </h2>
                        </div>

                        <button class="btn btn-warning">
                            <i class="fa-solid fa-square-plus"></i>
                            Add This Item
                        </button>
                    </div>
                </div>`;
        foodsSections.appendChild(newFoodsSections);
    });




}






randomload();
loadcetagoridata();
