// import App from './../App'

import {render, html} from 'lit/html.js'

class Header{
  init(){   
    console.log("Header init")
    this.el = document.querySelector('header')
    this.render() 
  }


  render(){
    const templateHTML = html`   
        <div>The Header Content</div>
    `
    render(templateHTML, this.el)
  }
}

export default new Header()