const dataArrange = new dataManger()

const ingredientSearch = function(ingredientInput) {
    let sensArr = dataArrange.getSensitivityArr()
    $.post(`/recipebyname/${ingredientInput}`,{ sensArr : JSON.stringify(sensArr)} , function(response){
        renderFunc(response) 
    } )
        
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
    clearCheckboxes()
    dataArrange.clearSensitivityArr()
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
        
    if (checkedValues.includes('option1')) {
        dataArrange.setSensitivity('gluten')
    }
    if (checkedValues.includes('option2')) {
        dataArrange.setSensitivity('dairy')
    }

}


const recipeImg= function(firstIngredient){
    alert(firstIngredient)
}

const renderFunc = function(data){
    const renderer = new Renderer('container', 'recipes-template')
    renderer.render(data)
  }
