class dataManger {

    constructor(){
        this.activeSensitivityArr=[]
        this.sensitivityArr=[]
    }
    
    setSensitivity(sensitivity){
        if(!this.activeSensitivityArr.includes(sensitivity))
        this.activeSensitivityArr.push(sensitivity)
    }

    getActiveSensitivityArr(){
        return this.activeSensitivityArr
    }
    setActiveSensitivityArr(sensitivityArr){
        this.activeSensitivityArr=sensitivityArr
    }

    clearActiveSensitivityArr(){
        this.activeSensitivityArr=[]
    }
    
    setSensitivityArr(sensitivityArr){
        this.sensitivityArr=sensitivityArr
    }
    
    getSensitivityArr(){
        return this.sensitivityArr
    }

}