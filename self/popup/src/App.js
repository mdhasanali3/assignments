import React,{useState} from 'react';
import { Modal,ModalHeader, ModalBody,Row } from 'reactstrap';
import bot from './assets/bot.svg'
import user from './assets/user.svg'
import send from './assets/send.svg'
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import './style.css'
import './assets/unnamed.gif'
// import './assets/bot.png'
/////////////////

function App() {
  const [modal, setmodal] = useState(false)
 
  const [response, setResponse] = useState('');
  const [prompt, setPrompt] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

   
  axios.post("http://localhost:5001/", { prompt })
                                      .then(res => {
                                          setResponse(res.data.bot)
                                        console.log(res.data.bot,' json res full')
                                        // console.log(res.data.text,'res text')
                                        // console.log(res.data.choices[0].text,' choices[0].text')
                                      })
                                      .catch(err => console.warn(err,' error '))


  };
  return (
   
      <><div><h1>adkjhslllllldflkghsdfjkgfds</h1>
            <Modal 
                size='lg'
                isOpen={modal}
                toggle={() => setmodal(!modal)}
                    >

                <ModalHeader toggle={() => setmodal(!modal)}>
                    popup
                  </ModalHeader>

                  <ModalBody>
             
                  <div>
         
      <form onSubmit={handleSubmit} >       

    <div className='user'>
      <img src={user} /><input className='textarea'
        placeholder="  Ask me anything..."
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className='sbtn' type="submit"> <img src={send} /></button>
     </div>
     <div className='bot'><img src={bot} />{response}</div>
     
      </form>
    </div>

                  </ModalBody>
                </Modal>
                  
              <button className='position-absolute top-100' onClick={() => setmodal(true)}>
                        opento 
                </button>
            </div>
            
            </>
  );
}


/////////////////

/*
const handleSubmit = async (e) => {
  e.preventDefault()

  const data = new FormData(form)

  // user's chatstripe
  chatContainer.innerHTML += App(false, data.get('prompt'))

  // to clear the textarea input 
  form.reset()

  // bot's chatstripe
  const uniqueId = generateUniqueId()
  chatContainer.innerHTML += App(true, " ", uniqueId)

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


*/////////////////
export default App;
