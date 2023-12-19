class dataManger {

    constructor(recipes){
        this.recipes=recipes
        this.glutenIngredients = ["Flour","Bread","spaghetti","Biscuits","Beer"]
        this.dairyIngredients = ["Cream","Cheese","Milk","Butter","Creme","Ricotta","Mozzarella","Custard","Cream Cheese"]
    }

    getFreeGluten() {
        return this.recipes.filter(recipe => {
            return !this.glutenIngredients.some(glutenIngredient => recipe.ingredients.includes(glutenIngredient))
        })
    }
    

    getFreeDairy(){
        return this.recipes.filter(recipe => {
            return !this.dairyIngredients.some(dairyIngredient => recipe.ingredients.includes(dairyIngredient))
        })

    }

    getHealthy(){

    }

    setRecipes(recipes){
        this.recipes=recipes
    }

    getRecipes(){
        return this.recipes
    }
}