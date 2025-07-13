import MainLayout from './sitelayout/site_layout.js'

class App {
  constructor(){
    this.name = "Template"
    this.version = "1.0.0"
    this.currentPage = "preview"
    this.rootEl = document.getElementById("root")
    
  }

  init() { 
    console.log('app init')
    while (this.rootEl.lastChild) {
        this.rootEl.removeChild(this.rootEl.lastChild)
    }
    
    //import and run 
    MainLayout.init()
  } 

}

export default new App()