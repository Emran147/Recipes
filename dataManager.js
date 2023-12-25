const arrangedArr = function(data){
    const filteredArr = []
       data.results.forEach(element => {
           let recipeObj={
               recipeID : element.idMeal,
               recipeTitle : element.title,
               ingredients : element.ingredients,
               thumbnail : element.thumbnail,
               href : element.href,
           }      
           filteredArr.push(recipeObj)
       })
       return filteredArr
   }

   module.exports = {
    arrangedArr: arrangedArr,

}
