const searchFood=()=>{
    const searchField =document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.innerHTML='';
    // 
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displaySearchResult(data.meals));
}

const displaySearchResult =(meals)=>{
    console.log(meals);
    const searchResult= document.getElementById('search-result');
    meals.forEach(meal=>{
        console.log(meals);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card mb-3">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <p class="font-weight-bold text-center">${meal.strMeal}</p>
            <button class="btn-change4 rounded-3">Button</button>
        </div>
        `;
        searchResult.appendChild(div);
    })
}