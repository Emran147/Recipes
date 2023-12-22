class dataManger {

    constructor(){
        this.sensitivityArr=[]
    }
    
    setSensitivity(sensitivity){
        if(!this.sensitivityArr.includes(sensitivity))
        this.sensitivityArr.push(sensitivity)
    }

    getSensitivityArr(){
        return this.sensitivityArr
    }

    clearSensitivityArr(){
        this.sensitivityArr=[]
    }
}