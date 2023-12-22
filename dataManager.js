const {consts} = require('./config')
const { faker } = require('@faker-js/faker');

const arrangedArr = function(data){
    const filteredArr = []
       data.results.forEach(element => {
           let recipeObj={
               recipeID : element.idMeal,
               recipeTitle : element.title,
               ingredients : element.ingredients,
               thumbnail : element.thumbnail,
               href : element.href,
               name : faker.person.fullName(),
               randomStar : faker.number.int({ max: 5 })

           }      
           filteredArr.push(recipeObj)
       })
       return filteredArr
   }

   module.exports = {
    arrangedArr: arrangedArr,

}
