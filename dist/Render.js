class Renderer {
  constructor(containerId, templateId) {
    this.container = $(`#${containerId}`);
    this.template = $(`#${templateId}`).html();
    this.filtersContainer = $('.filterContainer');
    if (!this.container.length || !this.template) {
      throw new Error('Container or template ID not found.');
    }
  }

  render(dataArr, sensitivityArr) {
    try {
      this.clearContainer();
      const compiledTemplate = Handlebars.compile(this.template);
      const context = {
        dataArr: dataArr,
        sensitivityArr: sensitivityArr
      }
      const renderedHTML = compiledTemplate(context);
      this.container.html(renderedHTML);
    } catch (error) {
      console.error('Rendering error:', error);
    }
  }

  clearContainer() {
    this.container.empty();
  }
  

}
