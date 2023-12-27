const axios = require("axios");
const recipesbyingredients = 'https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/';
const gifurl = 'https://api.giphy.com/v1/gifs/search?q=food&api_key=nGpXyhX2xMKqWEE0RKP8bz27Jqdrs88g&limit=20'

function getRecipesByIngredient(ingredient) {
    return axios.get(recipesbyingredients + ingredient)
}

function getGifArray(){
   return  axios.get(gifurl)   
 
}
module.exports = {
    getRecipesByIngredient,
    getGifArray
};
