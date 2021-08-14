import React from "react"
import { useLocalStore } from "mobx-react"
import { createLinksStore } from './LinksStore'

const LinksContext = React.createContext(null)
export const LinksProvider = ({ children }) => {
    const linksStore = useLocalStore(createLinksStore)
    return <LinksContext.Provider value={linksStore}>
        {children}
    </LinksContext.Provider>
}

export const useLinksStore = () => React.useContext(LinksContext)
