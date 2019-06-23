import React from 'react';
import fetch from 'isomorphic-fetch';

async function onClick () {
  const data = await fetch('http://work.mediasmart.io?page=1&page_size=20', {
    headers: {
       authorization: 'mediasmart2019'
     }
    });
    console.log(JSON.stringify(data.json()))
  // alert((await data.json()).message);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo" alt="logo">#</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;