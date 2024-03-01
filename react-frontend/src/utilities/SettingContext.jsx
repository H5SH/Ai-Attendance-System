import { createContext, useState } from "react";


export const SetDataContext = createContext()

function SettingContext({ children }){

    const [students, setStudents] = useState([])

    return (
        <SetDataContext.Provider
        value={{
            students,
            setStudents
        }}
        >
            {children}
        </SetDataContext.Provider>
    )
}

export { SettingContext }