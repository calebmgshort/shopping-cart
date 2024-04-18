import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';



function App() {
  const [itemCount, setItemCount] = useState(0);
  return (
    <>
      <Box>
        <Navbar itemCount={itemCount}></Navbar>
        <Toolbar />
        <Outlet context={[setItemCount]}/>
      </Box>
    </>
  )
}

export default App
