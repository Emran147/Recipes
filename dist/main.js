const dataArrange = new dataManger()
 
const ingredientSearch = function() {
    const ingredientInput = $('#ingredientInput').val();
    $.get(`/recipebyname/${ingredientInput}`)
        .then((data) => {
            dataArrange.setRecipes(data)
            renderFunc(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
}



const getCheckboxValues = function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    if(checkedValues.includes('option1')){
        renderFunc(dataArrange.getFreeGluten())
    }    
}

const recipeImg= function(firstIngredient){
    alert(firstIngredient)
}


const renderFunc = function(data){
    const renderer = new Renderer('container', 'container-template')
    renderer.render(data)
  }