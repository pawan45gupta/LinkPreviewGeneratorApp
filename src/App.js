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

  function onChange(e) {
    setUrls(Array.from(getUrls(e.target.value)));
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
  }  
  return (
    <div className="App">
      <TextBox onChange={onChange}/>
      { previewData ? previewData.map(data => {
         return <Preview key={data.domain} data={data} />;
        }) : null
      }
    </div>
  );
}

export default App;
