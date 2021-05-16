const form = document.querySelector('.reg')
const reg_username = document.getElementById('reg_username')
const reg_email = document.getElementById('reg_email')
const reg_password = document.getElementById('reg_password')
const allInputs = document.getElementsByTagName('input')
form.addEventListener('submit', (e) => {
e.preventDefault()
if(lengthOfInput(reg_email) <= 3){
    errorMessage()
}

})

const valueOf = (text) =>{
return text.value
}

const lengthOfInput = (text) => {
    return text.value.length
}
const errorMessage = () => {
reg_email.classList.add('errormargin')
var message = document.createElement('p')


configuration(reg_email, message)
}

function configuration(parent, child){
    child.textContent = "Email is not valid"
    child.style.color = "red"
    child.style.alignSelf = "center"
    parent.parentNode.insertBefore(child, parent.nextSibling)

}