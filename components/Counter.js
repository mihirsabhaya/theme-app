import React from 'react'
import {useSelector  , useDispatch} from "react-redux"
import { increment , decrement } from '../redux/counterSlice'

const Counter = () => {

    const counter = useSelector((state)=> state.counter)
    const dispatch = useDispatch()
  return (
    <div className='flex items-center w-40 justify-between'>
        <button className='border rounded-md focus:border-blue-300 h-10 w-10' onClick={()=> dispatch(decrement())}>-</button>
        <p>{counter.count}</p>
        <button className='border rounded-md focus:border-blue-300 h-10 w-10' onClick={()=> dispatch(increment())}>+</button>
    </div>
  )
}

export default Counter