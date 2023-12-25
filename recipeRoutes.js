const express = require('express')
const axiosManager = require('./axiosManager')
const dataManager = require('./dataManager')
const  consts  = require('./config')
const router = express.Router()
const SensitivityUtilities  = require('./recipesUtlities')


router.post("/:ingredient", function(req, res) {
    let sensArr = JSON.parse(req.body.sensArr)
    const ingredient = req.params.ingredient
    axiosManager.getRecipesByIngredient(ingredient)
        .then((result) => {
            let newObj = dataManager.arrangedArr(result.data)
            newObj = SensitivityUtilities.filterRecipesBySensitivities(sensArr,newObj)
            res.send(newObj)
        })
        .catch((error) => {
            console.error("Error fetching data:", error)
            res.status(500).send("Error fetching data")
        })
})



router.get("/getsensitives", function(req,res){
    let sensitives = Object.keys(consts.sensitives)
    res.send(sensitives)
})





module.exports = router;
