function populateUfs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {
        for(var item of states){
            ufSelect.innerHTML += `<option value="${item.id}">${item.nome}</option>`
        }
    })
}

populateUfs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState]

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then(res => res.json())
    .then(cities => {

        for(var item of cities){
            citySelect.innerHTML += `<option value="${item.nome}">${item.nome}</option>`
        }
    
        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(){

    const itemLi = event.target

    //adicionar ou remover uma classe com js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex(item => {
        return item == itemId
    })

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter(item => {
            return item != itemId
        })

        selectedItems = filteredItems
    }
    else{
        selectedItems.push(itemId)
    }

    collectedItems.value = selectedItems
}