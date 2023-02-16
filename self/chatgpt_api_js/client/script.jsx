import bot from './assets/bot.svg'
import user from './assets/user.svg'
import 'bootstrap/dist/css/bootstrap.css'

// import { Modal,ModalHeader } from 'reactstrap'
import React, {useState} from 'react'
import { Modal,ModalHeader, ModalBody,Row } from 'reactstrap';

const form = document.querySelector('form')
const chatContainer = document.querySelector('#chat_container')

let loadInterval

function loader(element) {
    element.textContent = ''

    loadInterval = setInterval(() => {
        // Update the text content of the loading indicator
        element.textContent += '.';

        // If the loading indicator has reached three dots, reset it
        if (element.textContent === '....') {
            element.textContent = '';
        }
    }, 300);
}

function typeText(element, text) {
    let index = 0

    let interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index)
            index++
        } else {
            clearInterval(interval)
        }
    }, 20)
}

// generate unique ID for each message div of bot
// necessary for typing text effect for that specific reply
// without unique ID, typing text will work on every element
function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
}

function chatStripe({isAi, value, uniqueId}) {
     const [modal, setmodal] = useState(false)
    return (
        
        <div>
        <Modal
            size='lg'
            isOpen={modal}
            toggle={() => setmodal(!modal)}
                >

            <ModalHeader toggle={() => setmodal(!modal)}>
           popup
           </ModalHeader>
           <ModalBody>
                <div className={`wrapper ${isAi && 'ai'}`}>
            <div className="chat">
                <div className="profile">
                    <img 
                      src="${isAi ? bot : user} "
                      alt="${isAi ? 'bot' : 'user'}" 
                    />
                </div>
                <div className="message" id={uniqueId}>{value}</div>
            </div>
        </div>
        </ModalBody>
        </Modal>
        <button className='position-absolute top-100' onClick={() => setmodal(true)}>
               opento
           </button>
       </div>
       
    
    )
}

const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(form)

    // user's chatstripe
    chatContainer.innerHTML += chatStripe(false, data.get('prompt'))

    // to clear the textarea input 
    form.reset()

    // bot's chatstripe
    const uniqueId = generateUniqueId()
    chatContainer.innerHTML += chatStripe(true, " ", uniqueId)

    // to focus scroll to the bottom 
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // specific message div 
    const messageDiv = document.getElementById(uniqueId)

    // messageDiv.innerHTML = "..."
    loader(messageDiv)
//http://localhost:5000
//https://codex-im0y.onrender.com/
    const response = await fetch('http://localhost:5001', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: data.get('prompt')
        })
    })

    clearInterval(loadInterval)
    messageDiv.innerHTML = " "

    if (response.ok) {
        const data = await response.json();
        const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 

        typeText(messageDiv, parsedData)
    } else {
        const err = await response.text()

        messageDiv.innerHTML = "Something went wrong"
        alert(err)
    }
}

form.addEventListener('submit', handleSubmit)
form.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        handleSubmit(e)
    }
})