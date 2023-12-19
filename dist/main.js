const dataArrange = new dataManger()
 
const ingredientSearch = function(ingredientInput) {
    $.get(`/recipebyname/${ingredientInput}`)
        .then((data) => {
            dataArrange.setRecipes(data)
            renderFunc(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
}

const searchBtn = function() {
    const ingredientInput = $('#ingredientInput').val();
    if (!ingredientInput.replace(/\s/g, '').length)
    {
        alert('check the input')
    }
    else{
    $('header').html(`${ingredientInput}`)
    ingredientSearch(ingredientInput);
    clearCheckboxes(); // Call function to clear checkboxes
    }
}

const clearCheckboxes = function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}


const getCheckboxValues = function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    const checkedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
    if (checkedValues.includes('option1') && checkedValues.includes('option2')) {
        renderFunc(dataArrange.getFreeGlutenAndDairy())
    } else if (checkedValues.includes('option1')) {
        renderFunc(dataArrange.getFreeGluten())
    } else if (checkedValues.includes('option2')) {
        renderFunc(dataArrange.getFreeDairy())
    }
    else{
        renderFunc(dataArrange.getRecipes())
    }
}


const recipeImg= function(firstIngredient){
    alert(firstIngredient)
}


const renderFunc = function(data){
    const renderer = new Renderer('container', 'container-template')
    renderer.render(data)
  }