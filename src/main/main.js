
// import App from './../App'

import {render, html} from 'lit/html.js'

class Main{
  init(){   
    console.log("Main init")
    this.el = document.querySelector('main')
    this.render() 
  }

  render(){
    const templateHTML = html`   
        <div>The Main Content</div>
    `
    render(templateHTML, this.el)
  }
}

export default new Main()