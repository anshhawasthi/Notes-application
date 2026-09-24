import React, {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data);
  }

  useEffect(function(){
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx){
      return <div key={idx}>
          <a href={elem.url}>

            <div className='h-40 w-44 overflow-hidden rounded-xl bg-white'>
              <img className='h-full object-cover' src={elem.download_url} alt="" />

            </div>
            <h2>{elem.author}</h2>
          </a>
        </div>
    })
  }

  return (
    <div className='h-screen w-screen overflow-auto bg-black text-white p-4'>

      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='p-4 flex justify-center gap-6 bg-black'>
        <button 
        style={{opacity : index == 1 ? 0.5 : 1}}
        onClick={()=>{
          if(index > 1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        className='bg-amber-400 text-black text-sm rounded px-4 py-1 cursor-pointer active:scale-95 font-semibold'>Prev</button>

        <h3 className='font-semibold'>Page {index}</h3>

        <button 
        onClick={()=>{
          setUserData([])
          setIndex(index+1)
        }} 
        className='bg-amber-400 text-black text-sm rounded px-4 py-1 cursor-pointer active:scale-95 font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App
