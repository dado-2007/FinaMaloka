const submit_input = document.querySelector('.submit')

if(document.activeElement === submit_input) {
    submit_input.style.border = "none"
}

function throwInputError() {
    alert("Please type your first name.")
}

var userNames = []

function consistForm0() {
    var form = document.forms[0]
    var textField0 = form.querySelector('.user-name-input')
    var textFromField0 = textField0.value
    if(textFromField0.trim() != "") {
        userNames.push(textFromField0)
    } else {
        throwInputError()
    }
}