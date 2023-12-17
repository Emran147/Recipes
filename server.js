const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const axios = require("axios")
const app = express()

const recipesbyingredients = 'https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/'
const recipesbyID ='https://recipes-goodness-elevation.herokuapp.com/recipes/id/'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

//app.use(express.static(path.join(__dirname,'dist')))
//app.use(express.static(path.join(__dirname,'node_modules')))


app.get("/recipebyname/:recipeName", function(req, res) {
    const gredient = req.params.recipeName;
    axios.get(recipesbyingredients + gredient)
        .then((result) => {
            res.send(filterFunc(result.data))
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
    const newObj = {
        recipeTitle : data.title,
        reciperID : data.idMeal
    }
    return newObj
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

app.get('/',function(req,res){
    res.send('hello brb')
})





const port = 3000

const listenFunc =function(port){
    console.log('server is running in port : ' + port)
    
}

app.listen(port , listenFunc(port))