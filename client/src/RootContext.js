import React from "react"
import { useLocalStore } from "mobx-react"
import { createRootStore } from './RootStore'

const RootContext = React.createContext(null)
export const RootProvider = ({ children }) => {
    const rootStore = useLocalStore(createRootStore)
    return <RootContext.Provider value={rootStore}>
        {children}
    </RootContext.Provider>
}

export const useRootStore = () => React.useContext(RootContext)
