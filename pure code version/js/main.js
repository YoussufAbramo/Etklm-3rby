var obj_api = [];
var food_recipe = [];

function get_category(category){
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${category}`);
  xhr.send();

  xhr.addEventListener("readystatechange", function()
  {
    if(this.readyState === this.DONE)
    {
      console.log(JSON.parse(xhr.response));
      obj_api = JSON.parse(xhr.response);
      print_api();
    }
  });
};

get_category("Mushrooms");
var nav_links = document.querySelectorAll(".nav-item .nav-link");
for(var i = 0; i < nav_links.length; i++)
  {
    nav_links[i].addEventListener("click", function(e)
      {
        var selected_category = e.target.innerText;
        get_category(selected_category);
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
      }
    )
  };

function print_api() {
  var api_content = ``;
  for (var i = 0; i < 4; i++)
  {
    api_content += `
    <div class="col-md-3 col-sm-6 rounded-3 bg-white text-dark mx-1">
      <img src="${obj_api.recipes[i].image_url}" alt="${obj_api.recipes[i].title}" class="img-fluid rounded-top-3">
      <div class="ps-4 pe-3 py-3">
        <h3>${obj_api.recipes[i].title}</h3>
        <a class="text-decoration-none" href="${obj_api.recipes[i].publisher_url}" target="_blank">${obj_api.recipes[i].publisher}</a>
      </div>
      <div class="actions d-flex justify-content-between mt-2">
        <a class="btn btn-primary btn_recipe" target="_blank">Recipe?</a>
        <a href="${obj_api.recipes[i].source_url}" class="btn btn-dark" target="_blank">Read More</a>
      </div>
    </div>
    `
    food_recipe.push(`https://forkify-api.herokuapp.com/api/get?rId=${obj_api.recipes[i].recipe_id}`);
  }
  console.log(food_recipe);
  document.getElementById("content").innerHTML = api_content;
};