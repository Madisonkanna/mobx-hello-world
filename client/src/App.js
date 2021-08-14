import logo from './logo.svg';
import './App.css';
import React, {useState } from "react";
import { useLinksStore } from "./LinksContext"
import { useObserver } from "mobx-react"


function App() { 
  const [link, setLink] = useState("")
  const linksStore = useLinksStore()
  return useObserver(() => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input value={link} onChange={e => setLink(e.target.value)} type="text" />
          <button onClick={e => linksStore.addLink(link)}>Add link</button>
        </p>
        {linksStore.links.map(link => 
          <li key={link.id} >
            {link.url}
          </li>
          )}
      </header>
    </div>
  ));
}

export default App;
