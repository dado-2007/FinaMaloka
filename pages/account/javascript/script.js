// const button = document.querySelector('.submit')


function consistForm() {
    var form = document.forms[0]
    var selectedElement = form.querySelector('.text-field')   
    var selectedValue = selectedElement.value
    alert(selectedValue)
}

// document.addEventListener("submit", (e) => {
//     e.preventDefault()
// })