import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("Couldnt fetch data")
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setErr(null)
            })
            .catch(err => {
                setIsPending(false)
                setErr(err.message)
            })
    }, [url])

    return {data, isPending, err}
}

export default useFetch