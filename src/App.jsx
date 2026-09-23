import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState()
  const [details, setDetails] = useState()

  const [task, setTask] = useState([])

  const SubmitHandler = (e) => {   
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)    
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e)=>{
        SubmitHandler(e);        
      }}
       className='flex p-10 gap-4 lg:w-1/2 items-start flex-col'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        <input type="text" placeholder='Enter Title' className='border-2 font-medium w-full px-5 py-2 outline-none rounded' value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <textarea placeholder='Write details' name="" id="" className='border-2 font-medium w-full flex items-start px-5 py-5 h-32 flex-row outline-none rounded' value={details} onChange={(e)=>{
          setDetails(e.target.value)
        }}></textarea>
        <button className='bg-amber-50 font-medium active:bg-white active:scale-95 cursor-pointer w-full text-black px-5 py-1 outline-none'>Add Note</button>
      </form>

      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start mt-6 gap-5 h-[90%] overflow-auto'>
          {task.map(function(elem, idx) {
            return <div key={idx} className="flex flex-col justify-between items-start relative bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLPnW7YWMbLsXu_OPx0AzE4A5fDNXEEo_Bf7ynff9VA&s=10')] bg-cover rounded-2xl text-black py-9 pb-4 px-4 h-52 w-40">
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-800'>{elem.details}</p>
              <button onClick={() => {
                deleteNote(idx)
              }} className='bg-red-800 text-white cursor-pointer active:scale-95 active:bg-red-900 py-1 rounded text-xs font-bold w-full'>Delete</button>
            </div>
          })}          
        </div>
      </div>

    </div>
  )
}

export default App
