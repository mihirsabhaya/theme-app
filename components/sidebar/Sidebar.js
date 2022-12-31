import React, { useEffect, useState } from 'react'
import {IoClose} from "react-icons/io5"
import { useSelector , useDispatch } from 'react-redux'
import { toggleSidebar } from '../../redux/themeSlice'



const Sidebar = () => {

    const dispatch = useDispatch()
    const isSidebarOpen = useSelector((state)=> state.theme.isSidebarOpen)   

  return (
    <div className={`sidebar ${isSidebarOpen ? "sidebarOpen" :"sidebarClose"}`}>
        <div className='sidebar_content relative'>
            <div className='sidebarClose_Icon flex justify-center items-center absolute right-2 top-2 cursor-pointer'>
                <button onClick={()=> dispatch(toggleSidebar())} className="text-black"><IoClose /></button>
            </div>
        </div>

        <style jsx>
            {`
              .sidebar{
                width:350px;
                background-color:lightgray;
                height:100vh;
                position:absolute;
                top:0px;
                transition: all 0.3s linear;
                background-color: var(--sidebar-bg) !important;
              }
              .sidebarOpen{
                transform:translate(0%);
                transition: all 0.3s linear
              }
              .sidebarClose_Icon{
                height:40px;
                width:40px;
                background-color:white;
              }
              .sidebarClose_Icon button{
                font-size:30px
              }
              .sidebarClose{
                transform : translate(-100%);
                transition: all 0.s linear;
              }
            `}
        </style>

    </div>
  )
}

export default Sidebar