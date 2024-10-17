import React from 'react'
import { Appdispatch, useAppSelector } from './lib/redux/store'
import { useDispatch } from 'react-redux'
import { increment } from './lib/redux/counterSlice'


const Root = () => {
 const dispatch = useDispatch<Appdispatch>()
    const {count} = useAppSelector((state)=>state.counter)
  return (
    <main className='w-full min-h-screen flex flex-col  items-center'>
      <h1>BoilerPlate</h1>
        <div className='flex flex-col items-center justify-center'>
            <h2>{count}</h2>
            <button className='bg-slate-300 p-1.5 rounded' onClick={()=>dispatch(increment())}>TAMBAH</button>
        </div>
    </main>
  )
}

export default Root
