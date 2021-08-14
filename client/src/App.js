import logo from './logo.svg';
import './App.css';
import React, {useState } from "react";
import { useRootStore } from "./RootContext"
import { useObserver } from "mobx-react"

function App() { 
  const [link, setLink] = useState("")
  const rootStore = useRootStore()

  return useObserver(() => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input value={link} onChange={e => setLink(e.target.value)} type="text" />
          <button onClick={e => rootStore.linksStore.addLink(link)}>Add link</button>
        </p>
        {rootStore.linksStore.links.map(link => 
          <li key={link.id} >
            {link.url}
          </li>
          )}
      </header>
    </div>
  ));
}

export default App;
