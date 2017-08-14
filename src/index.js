import './styles/style.scss'
import shortid from 'short-id'

var inputs = document.querySelectorAll('.login-input')
var username = document.getElementById('username')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var birth = document.getElementById('birth') 



username.addEventListener('keydown', function(event) {
    var originalHTML = username.innerHTML
    var length = event.target.value.length + 1
    var dd = document.getElementById('username-dd')
    var text = document.createTextNode('It\'s too short (minimum is 6 characters)')
    if(length < 6) {
        dd.appendChild(text)
        username.innerHTML = originalHTML
    }
    else if(length >= 6){
        dd.removeChild(text)
    }
})

/* 

        var type = typeof event.target.value
        console.log(type)
        if (type === 'number') {
            console.log('YES')
        }



function isText (){
    
function isSixWords(event) {
}
    
        event.target.parentElement.forEach(dd => {
            appendChild('<p>It\'s too short (minimum is 6 characters)</p>')
        })
function input2() { }
function inputDate() { }*/
