import { createContext, useState } from "react";

const ThemeContext = createContext();

export const TeamProvider = ({children}) =>{
    const[theme, setTheme] = useState('dark')

    const values = {
        theme,
        setTheme,
    }

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export default ThemeContext;