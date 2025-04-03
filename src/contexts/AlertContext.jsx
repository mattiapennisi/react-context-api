import { createContext, useContext, useState } from "react"

const AlertContext = createContext()

export function AlertProvider({ children }) {
    const [alert, setAlert] = useState('')

    return (
        <>
            <AlertContext.Provider value={{
                alert,
                setAlert,
            }}>
                {children}
            </AlertContext.Provider>
        </>
    )
}

export function useAlert() {
    const context = useContext(AlertContext)
    
    return context
}

export default AlertContext