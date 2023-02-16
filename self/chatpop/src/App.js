import logo from './logo.svg';
import './App.css';
// import openai from 'openai';
// import express from 'express'
import { useState, useEffect } from 'react';
// import * as dotenv from 'dotenv'
// import cors from 'cors'
// import { Configuration, OpenAIApi } from 'openai'
import axios from "axios";

// dotenv.config()

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const app = express()
// app.use(cors())
// app.use(express.json())

function App() {

  const [response, setResponse] = useState('');
  const [prompt, setPrompt] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a request to the server with the prompt
    // axios
    //   .post("http://localhost:5001/", { prompt })
    //   .then((res) => {
    //     // Update the response state with the server's response
    //     setResponse(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
//     const response = await fetch('http://localhost:5001', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//           prompt: prompt      })
//   })

//   // clearInterval(loadInterval)
//   // messageDiv.innerHTML = " "

//   if (response.ok) {
//       const data = await response.json();
//       const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 
//       setResponse(data.choices[0].text);
// console.log(data)

//       // typeText(messageDiv, parsedData)
//   } else {
//       const err = await response.text()
// console.log("Something went wrong")
//       // messageDiv.innerHTML = "Something went wrong"
//       alert(err)
//   }
// const response = await openai.createCompletion
// ({
//   model: "text-davinci-003",
//   prompt: `${prompt}`,
//   temperature: 0.1, // Higher values means the model will take more risks.
//   max_tokens: 100, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
//   top_p: 0.8, // alternative to sampling with temperature, called nucleus sampling
//   frequency_penalty: 0.0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
//   presence_penalty: 0.0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.

//   stop:["\"\"\""]})

// console.log( response.data)
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );

} 

export default App;
