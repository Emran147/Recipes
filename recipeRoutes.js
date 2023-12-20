const express = require('express')
const axiosManager = require('./axiosManager')
const dataManager = require('./dataManager')

const router = express.Router()

router.get("/:ingredient", function(req, res) {
    const ingredient = req.params.ingredient
    axiosManager.getRecipesByIngredient(ingredient)
        .then((result) => {
            let newObj = dataManager.arrangedArr(result.data)
            res.send(newObj)
        })
        .catch((error) => {
            console.error("Error fetching data:", error)
            res.status(500).send("Error fetching data")
        })
})

module.exports = router;
