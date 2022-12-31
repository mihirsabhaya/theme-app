import React from 'react'
import { HiBars3BottomLeft } from "react-icons/hi2"
import { toggleSidebar } from '../../redux/themeSlice'
import { useDispatch } from 'react-redux'
import ThemeToggle from '../ThemeToggle'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <header className='h-14 shadow-sm px-3 flex items-center justify-between'>
      <div>
        <HiBars3BottomLeft onClick={()=> dispatch(toggleSidebar())} style={{ fontSize: "30px" }} className="cursor-pointer" />
      </div>
      <h1>LOGO</h1>
      <div >
        <ThemeToggle />
      </div>

      <style jsx>
        {`
        `}
      </style>
    </header>
  )
}

export default Header