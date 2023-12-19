const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const axios = require("axios")
const app = express()

const recipesbyingredients = 'https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/'


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))



app.get("/recipebyname/:ingredient", function(req, res) {
    const gredient = req.params.ingredient
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

app.post("/recipes",function( req , res  ){
    const freeGlutenArr = filtergluten(req.body) 
    res.send(freeGlutenArr) 
})



const filterFunc = function(data){
 const filteredArr = []
    data.results.forEach(element => {
        let recipeObj={
            recipeID : element.idMeal,
            recipeTitle : element.title,
            ingredients : element.ingredients,
            thumbnail : element.thumbnail,
            href : element.href
        }      
        filteredArr.push(recipeObj)
    })
    return filteredArr
}


app.get('/',function(req,res){
    res.send('hello brb')
})


const port = 3000

const listenFunc =function(port){
    console.log('server is running in port : ' + port)
    
}

app.listen(port , listenFunc(port))