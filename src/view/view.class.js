const divMessagesUI = document.getElementById('messages');
const tbody =  document.getElementById('almacen').getElementsByTagName('tbody')[0]

class View{
    renderNewProduct(product) {
        let tr = document.createElement('tr')
        tr.innerHTML = `<td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.units}</td>
                        <td>${product.price}</td>
                        <td>${product.productImport().toFixed(2)}€</td>`    
        tbody.appendChild(tr)                                     
    }

    renderEditProduct(product) {
        let totalTbody = tbody.childElementCount
        for (let i = 0; i < totalTbody; i++) {
            let tbodyTr = tbody.children[i]
            if(tbodyTr.firstElementChild.textContent == product.id){   
            const tr = document.createElement('tr')
            tr.innerHTML = `<td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.units}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>${product.productImport().toFixed(2)}€</td>`  
            tbody.replaceChild(tr,tbodyTr)
            }
        }
    }

    renderDelProduct(id) {
        let totalTbody = tbody.childElementCount
        let elementoEliminar = '';
        for (let i = 0; i < totalTbody; i++) {
            let tr = tbody.children[i]
            if(tr.firstElementChild.textContent == id){   
            elementoEliminar = tr
            }
        }
        tbody.removeChild(elementoEliminar)
    }

    renderStoreImport(total) {
        document.getElementById('total').textContent = total.toFixed(2) + ' €'
    }

    renderErrorMessage(message) {
        let newMessageDiv = document.createElement('div')
        newMessageDiv.className = "col-sm-12 alert alert-danger alert-dismissible fade show"
        newMessageDiv.innerHTML = `
            <span><strong>ATENCIÓN: </strong>${message}</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" onclick="this.parentElement.remove()"></button>`
        
        divMessagesUI.appendChild(newMessageDiv)
    }
}

module.exports = View;
