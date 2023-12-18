

const ingredientSearch =function(){
    const ingredientInput = $('#ingredientInput').val() 
    $.get(`/recipebyname/${ingredientInput}`).then((data)=>{
        renderFunc(data)
    })
}

const getCheckboxValues = function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    console.log("Checked Values:", checkedValues);
}

const recipeImg= function(firstIngredient){
    alert(firstIngredient)
}


const renderFunc = function(dataObj){
    const renderer = new Renderer('container', 'container-template')
    renderer.render(dataObj)
  }