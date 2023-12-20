const axios = require("axios");
const recipesbyingredients = 'https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/';

function getRecipesByIngredient(ingredient) {
    return axios.get(recipesbyingredients + ingredient)
}

module.exports = {
    getRecipesByIngredient
};
