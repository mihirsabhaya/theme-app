import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    currentTheme:"light",
    isSidebarOpen : false
}

const themeSlice = createSlice({
    name :"theme" , 
    initialState,
    reducers:{
        toggleSidebar(state){
            return void(state.isSidebarOpen = !state.isSidebarOpen)
        }
    }
})

export const {toggleSidebar} = themeSlice.actions
export default themeSlice.reducer