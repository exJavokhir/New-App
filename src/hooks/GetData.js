import { useEffect, useState } from "react";
import {request} from '../api/request'

const GetData = (url)=>{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    useEffect(()=>{
        request(`${url}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => setData(res.data))
            .then(()=> setLoading(false))
            .catch(err => setError(err))
    }, [url])
    return [loading, data, error]
}

export default GetData