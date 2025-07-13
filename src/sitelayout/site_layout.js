import Header from '../header/Header.js'
import Main from '../main/main.js'
import Footer from '../footer/footer.js'

import App from '../App.js'
import {render, html} from 'lit/html.js'

class MainLayout{
  init(){   
    document.title = App.name 
    // this.var = "some variable"

    //render last - unless you need a post render function like here ...
    this.render() 
    Header.init()
    Main.init()
    Footer.init()
  }


  render(){
    const templateHTML = html`   
        <header></header>
        <main></main>
        <footer></footer>
    `
    render(templateHTML, App.rootEl)
  }
}

export default new MainLayout()