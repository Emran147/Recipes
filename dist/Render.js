class Renderer {
    constructor(containerId, templateId) {
      this.container = $(`#${containerId}`)
      this.template = $(`#${templateId}`).html()
  
      if (!this.container.length || !this.template) {
        throw new Error('Container or template ID not found.')
      }
    }
      render(dataArr) {       
      try {
        if(dataArr.length>0){
        this.clearContainer()
        const compiledTemplate = Handlebars.compile(this.template);
        console.log(dataArr)
        const renderedHTML = compiledTemplate({dataArr})
        this.container.html(renderedHTML)
        }
        else{
         $('#container').append('<h1>there is no ingredient with this name </h1>') 
        }
      } catch (error) {
        console.error('Rendering error:', error)
      }
    }
      clearContainer() {
      this.container.empty()
    //  $('#ingredientInput').val('')
    }
  }
  