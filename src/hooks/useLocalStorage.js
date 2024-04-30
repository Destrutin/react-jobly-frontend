import  {useState, useEffect} from "react";

const useLocalStorage = (key, defaultValue = null) => {
    const [status, setStatus] = useState(() => {
        let value = JSON.parse(window.localStorage.getItem(key) || defaultValue)
        return value;
    })
    useEffect(() => {
        window.localStorage.setItem(key, status)
    }, [key, status])
    return [status, setStatus]
}

export default useLocalStorage;