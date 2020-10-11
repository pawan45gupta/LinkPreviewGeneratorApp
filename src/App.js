import React, { useState } from 'react';
import './App.css';
import TextBox from './Components/TextBox';
import getUrls from 'get-urls';
import axios from 'axios';
import Preview from './Components/Preview';

function App() {
  const [urls, setUrls] = useState([]);
  const [previewData, setPreviewData] = useState([]);
  const serverURI = 'http://localhost:4000/getPreviewData';

  function debounce(func, delay) { 
    let debounceTimer; 
    return function() { 
        const context = this;
        const args = arguments; 
            clearTimeout(debounceTimer); 
            debounceTimer = setTimeout(() => func.apply(context, args), delay); 
    } 
  }
  function onChange(e) {
    let text = e.target.value.replace('http://','').replace('www.','').replace('https://','');
    if(Array.from(getUrls(text)).length > 0) {
      axios({
        url: serverURI,
        method: 'post',
        data: urls
      })
      .then(function (response) {
          setPreviewData(response.data);
      })
      .catch(function (error) {
          console.log(error);
      }); 
    } else {
      setPreviewData([]);
    }
    setUrls(Array.from(getUrls(e.target.value)));
  }  
  return (
    <div className="App">
      <TextBox onChange={(e) => debounce(onChange(e),1000)}/>
      { previewData ? previewData.map(data => {
         return <Preview key={data.domain} data={data} />;
        }) : null
      }
    </div>
  );
}

export default App;
