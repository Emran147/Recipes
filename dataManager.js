const axiosManager = require('./axiosManager')

const arrangedArr = function(data,result2){
    const filteredArr = []
     for (let index = 0; index < data.results.length; index++) {
      //  console.log(result2.data.data[index].images.url)
        let recipeObj={
            recipeID : data.results[index].idMeal,
            recipeTitle : data.results[index].title,
            ingredients : data.results[index].ingredients,
            thumbnail : result2.data.data[index].images.original.url,
            href : data.results[index].href,
        } 
        filteredArr.push(recipeObj)

     }  


       return filteredArr
   }



   module.exports = {
    arrangedArr: arrangedArr,

}
