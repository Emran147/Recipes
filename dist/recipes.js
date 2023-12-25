const dataArrange = new dataManger()

const ingredientSearch = function(ingredientInput) {
    let sensArr = dataArrange.getActiveSensitivityArr()
    $.post(`/recipebyname/${ingredientInput}`,{ sensArr : JSON.stringify(sensArr)} , function(response){
        renderFunc(response,dataArrange.getSensitivityArr()) 
    } )
        
}

 

const searchBtn = function() {
    const ingredientInput = $('#ingredientInput').val()
    if (!ingredientInput.replace(/\s/g, '').length)
    {
        alert('check the input')
    }
    else{
    $('.ingredientTitle').html(ingredientInput)    
    ingredientSearch(ingredientInput)
    clearCheckboxes()
    dataArrange.clearActiveSensitivityArr()
    }
}

const clearCheckboxes = function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    })
}

const  getsensitivesArr = function(){
    $.get(`/recipebyname/getsensitives`).then(result=>{
    dataArrange.setSensitivityArr(result)
    renderFunc([],dataArrange.getSensitivityArr())
  })
}

getsensitivesArr()

const getCheckboxValues = function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    const checkedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
    dataArrange.setActiveSensitivityArr(checkedValues)
}


const recipeImg= function(firstIngredient){
    alert(firstIngredient)
}

const renderFunc = function(data,sensitivityArr){
    const renderer = new Renderer('container', 'recipes-template')
    renderer.render(data,sensitivityArr)
  }
