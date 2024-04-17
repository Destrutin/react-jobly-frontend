import  {useState, useEffect} from "react";

const useLocalStorage = (key, defaultValue) => {
    const [status, setStatus] = useState(() => {
        let value = JSON.parse(window.localStorage.getItem(key) || defaultValue)
        return value;
    })
    useEffect(() => {
        window.localStorage.setItem(key, status)
    }, [status])
    return [status, setStatus]
}

export default useLocalStorage;