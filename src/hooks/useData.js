import { useEffect, useState } from "react"
import apiClient from "../utils/api-client"

const useData = ( endPoint, customConfig ) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    
      useEffect(() => {
        setIsLoading(true)
        apiClient.get(endPoint, customConfig )
          .then(res => {
            setData(res.data)
            setIsLoading(false)
        })
          .catch(err => {
            setError(err.message)
            setIsLoading(false)
        })
      }, [])

      return {data, error, isLoading}
}

export default useData