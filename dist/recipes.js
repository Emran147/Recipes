const dataArrange = new dataManger()
let numberOfItemsInPage = 5
let startItem =0 

const ingredientSearch = function(ingredientInput) {
    let sensArr = dataArrange.getActiveSensitivityArr()
    $.post(`/recipebyname/${ingredientInput}`,{ sensArr : JSON.stringify(sensArr)} , function(response){
        let recipes = []
        if(response.length>5)
        {   
                  recipes = response.slice(startItem,numberOfItemsInPage)
        }
         else {
            recipes = response
         }
        renderFunc(recipes,dataArrange.getSensitivityArr()) 
    } )
        
}

const nextFunc = function(){
    numberOfItemsInPage+=5
    startItem+=5
    ingredientSearch(dataArrange.getIngredient())

}
const previuosFunc= function(){
    numberOfItemsInPage-=5
    startItem-=5
    ingredientSearch(dataArrange.getIngredient())

}


const searchBtn = function() {
    const ingredientInput = $('#ingredientInput').val()
    dataArrange.setIngredient(ingredientInput)
    if (!ingredientInput.replace(/\s/g, '').length)
    {
        alert('check the input')
    }
    else{
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
