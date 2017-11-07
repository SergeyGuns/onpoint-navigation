/** Class React-app-adapter. */
class ReactAppAdapter {
  constructor({scenario}) {
    this.__scenario = scenario
    this.__currSlide = '01'
    this.__nextSlide 
  }

  getNextSlide() {
    let currIndex = this.__scenario.indexOf(this.__currSlide)
    if (currIndex !== -1 && this.__scenario[currIndex + 1]) {
      return this.__currSlide = this.__scenario[currIndex + 1]
    } else {
      return false
    }
  }

  to(route) {
    console.log('routeTo',route)
    return route
  }


  
}

export default ReactAppAdapter