import { useContext } from "react"
import { CurrentContext } from "../context/CurrentContext"

//пользовательский хук, чтобы при вызове контекста 
//не прописывать каждый раз ''useContext(Context)''
export const useCurrentContext = () => useContext(CurrentContext);