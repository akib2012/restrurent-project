console.log("connected bhiya");

/* show moadal in the ui */

function  carddetails(foo) {
    // console.log(foo)
    const my_modal_5 = document.getElementById("my_modal_5");
    const newModal = document.createElement("div");
    my_modal_5.innerHTML = "";
    newModal.innerHTML = `<div  class="modal-box">
            <h3 class="text-lg font-bold">${foo.title}</h3>
            <img class="w-40 h-40 rounded-2xl" src="${foo.foodImg}" alt="">
            <p class="py-4">${foo.category}</p>
            <div class="modal-action">
                <form method="dialog">
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>`;
    my_modal_5.showModal();
    my_modal_5.appendChild(newModal);
    
    
    

}





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
        newFoodsSections.innerHTML = `<div  class="p-5 m-4 bg-white flex gap-3 shadow rounded-xl">
                    <div class="img flex-1">
                        <img src="${food.foodImg}" alt=""
                            class="w-[160px] rounded-xl h-[160px] object-cover" />
                    </div>
                    <div class="flex-2">
                        <h1 class="text-xl font-bold">
                            ${food.title}
                        </h1>

                        <div onclick='carddetails(${JSON.stringify(food)})' class="badge badge-warning">${food.category}</div>

                        <div class="divider divider-end">
                            <h2 class="text-yellow-600 font-semibold">
                                $ <span class="price">${food.price}</span> BDT
                            </h2>
                        </div>

                        <button onclick='addtoCadr(${JSON.stringify(food)})' class="btn btn-warning">
                            <i class="fa-solid fa-square-plus"></i>
                            Add This Item
                        </button>
                    </div>
                </div>`;
        foodsSections.appendChild(newFoodsSections);
    });
    
}






/* per  load and display the food as the cetagoris name  */

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
        newFoodsSections.innerHTML = `<div  class="p-5 m-4 bg-white flex gap-3 shadow rounded-xl ">
                    <div class="img flex-1">
                        <img src="${food.foodImg}" alt=""
                            class="w-[160px] rounded-xl h-[160px] object-cover" />
                    </div>
                    <div class="flex-2">
                        <h1 class="text-xl font-bold">
                            ${food.title}
                        </h1>

                        <div onclick='carddetails(${JSON.stringify(food)})' class="badge badge-warning">${food.category}</div>

                        <div class="divider divider-end">
                            <h2 class="text-yellow-600 font-semibold">
                                $ <span class="price">${food.price}</span> BDT
                            </h2>
                        </div>

                        <button onclick='addtoCadr(${JSON.stringify(food)})' class="btn btn-warning">
                            <i class="fa-solid fa-square-plus"></i>
                            Add This Item
                        </button>
                    </div>
                </div>`;
        foodsSections.appendChild(newFoodsSections);
    });
    
}



/* ******  show the price menu to the add to card cards        ********** */

const addtoCadr = (pricemenu) => {
    const oldCard = document.getElementById("cart-container");
    const newCard = document.createElement("div");
    newCard.innerHTML = `<div onclick="carddetails()" id="deletBtn" class="p-1 bg-white flex gap-3 shadow rounded-xl relative mb-4 dltbtn">
                    <div class="img">
                        <img src="${pricemenu.foodImg}" alt=""
                            class="w-[50px] rounded-xl h-[50px] object-cover" />
                    </div>
                    <div class="flex-1">
                        <h1 class="text-xs font-bold">
                            ${pricemenu.title}
                        </h1>

                        <div class="">
                            <h2 class="text-yellow-600 font-semibold">
                                $ <span id="fPrice" class="price">${pricemenu.price}</span> BDT
                            </h2>
                        </div>
                    </div>
                    <div
                         id="dlt"  class="w-6 h-6 flex justify-center items-center bg-red-600 rounded-full absolute -top-1 -right-1 text-white" >
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>`;
    oldCard.appendChild(newCard);


    let totalPrice = document.getElementById("ttprice").innerText;

    // let foodPrice = `${pricemenu.price}`;  /// here should be varibe let cause this variable should be changabe in every time!!
    let foodPrice = document.getElementById("fPrice").innerText;

    let fianlPrice = Number(totalPrice) + Number(foodPrice);
    document.getElementById("ttprice").innerText = fianlPrice;



    document.getElementById("dlt").addEventListener("click",
        function () {
            document.getElementById("deletBtn").innerHTML = "";
        }
    )
}





/* show card detils in a modal */






randomload();
loadcetagoridata();
