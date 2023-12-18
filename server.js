const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const axios = require("axios")
const app = express()

const recipesbyingredients = 'https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/'
const recipesbyID ='https://recipes-goodness-elevation.herokuapp.com/recipes/id/'


dairyIngredients = ["Cream","Cheese","Milk","Butter","Creme","Ricotta","Mozzarella","Custard","Cream Cheese"]
glutenIngredients = ["Flour","Bread","spaghetti","Biscuits","Beer"]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))



app.get("/recipebyname/:recipeName", function(req, res) {
    const gredient = req.params.recipeName
    let params = req.query
    axios.get(recipesbyingredients + gredient)
        .then((result) => {
            let newObj = filterFunc(result.data); 
            res.send(newObj)
        })
        .catch((error) => {
            console.error("Error fetching data:", error)
            res.status(500).send("Error fetching data")
        })
})



app.get("/recipebyid/:recipeID", function(req, res) {
    const gredient = req.params.recipeID;
    axios.get(recipesbyID + gredient)
        .then((result) => {
            res.send(filterIDsearch(result.data))
        })
        .catch((error) => {
            console.error("Error fetching data:", error)
            res.status(500).send("Error fetching data")
        })
})


const filterIDsearch = function(data){
    return  {
        recipeTitle : data.title,
        reciperID : data.idMeal
    }
    
}

const filterFunc = function(data){
 const newObj = {}
 newObj.result=[]
    data.results.forEach(element => {
        let recipeObj={
            reciperID : element.idMeal,
            recipeTitle : element.title,
            ingredients : element.ingredients,
            thumbnail : element.thumbnail,
            href : element.href
        }      
        newObj.result.push(recipeObj)
    })
    return newObj
}



const filtergluten = function(filteredObj) {
    const newObj = {
        result: filteredObj.result
            .filter(recipe => isGlutenFreeRecipe(recipe))
            .map(recipe => extractRecipeDetails(recipe))
    };
    return newObj;
};


const isGlutenFreeRecipe = recipe => {
    return !glutenIngredients.some(glutenIngredient => recipe.ingredients.includes(glutenIngredient));
};

const extractRecipeDetails = recipe => {
    return {
        reciperID: recipe.idMeal,
        recipeTitle: recipe.title,
        ingredients: recipe.ingredients,
        thumbnail: recipe.thumbnail,
        href: recipe.href
    };
};



app.get('/',function(req,res){
    res.send('hello brb')
})





const port = 3000

const listenFunc =function(port){
    console.log('server is running in port : ' + port)
    
}

app.listen(port , listenFunc(port))