import './styles/style.scss'
import shortid from 'shortid'

var inputs = document.querySelectorAll('.login-input')
var username = document.getElementById('username')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var birth = document.getElementById('birth')


    inputs.addEventListener('keydown', function (event) {
        var type = event.target.type
        
    })

function isText (){
    if (type === 'text') {
            isSixWords(event)
        }
function isSixWords(event) {
}
    
        event.target.parentElement.forEach(dd => {
            appendChild('<p>It\'s too short (minimum is 6 characters)</p>')
        })
function input2() { }
function inputDate() { }
