/** Class Navigation. */
class Navigation {
  /**
  * Create a point.
  * @param {string} navigationType - The navigation type 'notSinglePage' or 'singlePage'
  */
  constructor({navigationType = 'notSinglePage', adapter}) {
    this.__adapter = adapter
    this.__type = navigationType
    if (this.__type === 'notSinglePage') {
      console.warn('Navigation.__type=', this.__type)
    } else if (this.__type !== 'singlePage') {
      console.warn('navigationType must be singlePage or notSinglePage')
    }
  }

  toNext() {
    return this.__adapter.to(this.__adapter.getNextSlide())
  }
} 

export default Navigation