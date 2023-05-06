import { useState } from "react";
import { v4 as uuid } from "uuid";



const useAxios = (baseUrl) => {

  const [data, setData] = useState([])


  const fetchData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    setData(d => [
      ...d,
      { ...json, id: uuid() }
    ])
  }

  return [data, fetchData]
}



export default useAxios
