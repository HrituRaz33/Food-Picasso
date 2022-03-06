const searchFood=()=>{
    const searchField =document.getElementById('search-field');
    const searchText = searchField.value;
    // const searchResult= document.getElementById('search-result');
    
    
    if(searchField.value == ''){
      const bottomSrarchResult = document.getElementById('bottom-search-result');
      const div = document.createElement('div');
        div.innerHTML=`
        <p style="color: orangered;" class="fw-bold text-center">Sorry!! did't find any meal</p>
        `;
        // console.log('Sorry!! We did not find');
        bottomSrarchResult.innerHTML='';
        bottomSrarchResult.appendChild(div);
        const searchResult= document.getElementById('search-result');
      searchResult.innerHTML='';
        
    }
    // 
    else{
      const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
      fetch(url)
      .then(res => res.json())
      .then(data =>displaySearchResult(data.meals));
    }
}

const displaySearchResult =(meals)=>{
    // console.log(meals) 
    const searchResult= document.getElementById('search-result');
    const mealDetail = document.getElementById('p').style.display='none';
    mealDetail.innerHTML='';
    // searchResult.innerHTML='';
    if(meals == null){
      const bottomSrarchResult = document.getElementById('bottom-search-result');
      bottomSrarchResult.innerHTML='';
        const div = document.createElement('div');
        div.innerHTML=`
        <p style="color: orangered;" class="fw-bold text-center">Sorry!! did't find any meal</p>
        `;
        // console.log('Sorry!! We did not find');
        searchResult.innerHTML='';
        searchResult.appendChild(div);
    }
    else{
      const searchResult= document.getElementById('search-result');
      const bottomSrarchResult = document.getElementById('bottom-search-result');
      bottomSrarchResult.innerHTML='';
      searchResult.innerHTML='';
        meals.forEach(meal=>{
            // console.log(meals);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
            <div class="card mb-3">
              <img src="${meal.strMealThumb}" class="card-img-top text-warning" alt="...">
                <p class="fw-bold text-center">${meal.strMeal}</p>
                <button id="recepi-button" onclick="loadMealDetail('${meal.idMeal}')" class="btn-change4 rounded-3">Button</button>
            </div>
            `;
            searchResult.appendChild(div);
        })
    }
}

const loadMealDetail= (mealId) =>{
  const mealDetail = document.getElementById('p').style.display='block';
  const searchResult= document.getElementById('search-result').style.display='none';
    // console.log(mealId);
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then (res =>res.json())
    .then (data =>displayMealDetails(data.meals[0]));
    }


    const displayMealDetails= (meal) =>{
        // console.log(meal);
        const mealDetail = document.getElementById('p');
        console.log(meal.strInstructions);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML=`
        <div class="text-center">
        <button type="button" class="close-button mt-2">
          <i id="cross-button" onclick="crossButton() class="fa-solid fa-circle-xmark"></i>
        </button>
    </div>
    <div class="text-center w-100 mx-auto">
      <h3>${meal.strMeal}</h3>
      <p class="category-name rounded mx-auto">${meal.strCategory}</p>
      <h3>Instructions:</h3>
      <p>${meal.strInstructions}</p>
    </div>
    <div class="text-center">
      <img class="pic-size rounded-circle" src="${meal.strMealThumb}" alt="">
    </div>
   <div class="text-center">
    <a class="btn p-0 btn-design rainbow rainbow-1 my-3" href="###">Watch Video</a>
   </div>
        `;
        mealDetail.appendChild(div);
    }

    const crossButton =()=>{
       
    }
