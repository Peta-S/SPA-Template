// import App from '../App'

import {render, html} from 'lit/html.js'

class Main{
  init(){   
    console.log("Footer init")
    this.el = document.querySelector('footer')
    this.render() 
  }

  render(){
    const templateHTML = html`   
        <div>The Footer Content</div>
    `
    render(templateHTML, this.el)
  }
}

export default new Main()