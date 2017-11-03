import Navigation from './Navigation'
import ReactAppAdapter from './reactAppAdapter'
import scenario from './scenario'

let nav = new Navigation({ 
  navigationType: 'singlePage', 
  adapter: new ReactAppAdapter({ scenario: scenario })
})
console.log(nav)
console.log(nav.toNext())
console.log(nav)