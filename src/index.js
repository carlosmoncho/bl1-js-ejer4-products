'use strict'

const Controller = require("./controller/controller.class")

let myController =  new Controller
window.addEventListener('load', () => {

  document.getElementById('new-prod').addEventListener('submit', (event) => {
    event.preventDefault()
    const name = document.getElementById('newprod-name').value
    const price = document.getElementById('newprod-price').value
    myController.addProductToStore({ name, price })   
  })

  document.getElementById('del-prod').addEventListener('submit', (event) => {
    event.preventDefault()
    const delProductId = document.getElementById('delprod-id').value
    myController.deleteProductFromStore(delProductId)
  })

  document.getElementById('stock-prod').addEventListener('submit', (event) => {
    event.preventDefault()
    const id = document.getElementById('stockprod-id').value
    const units = Number(document.getElementById('stockprod-units').value)  
    myController.changeProductStock({ id, units })   
  })

})
