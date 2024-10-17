import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <main className='w-full flex flex-col justify-center items-center'>

      <h1>Page Not Found</h1>
      <button onClick={() => navigate('/')} className='max-w-md bg-slate-300 hover:bg-slate-400 text-cyan-500 font-bold py-2 px-4 rounded-md'>Back to Home</button>
    </main>
  )
}

export default NotFound
