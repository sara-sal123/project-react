import { observer } from "mobx-react"
import { Button } from "@mui/material"
import { CheckLogin } from "../../data/dataServer"
import { useState } from "react"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import "./admin.css"
import BusinessData from "../businessData/BusinessData";
import Footer from "../footer/Footer";



const Login = (observer(() => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
     
        <BusinessData />
      

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
          opacity: '90%',
          backgroundColor: '   rgba(138, 137, 137, 0.902)'
         
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.3rem',
            padding: '4rem',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.7) ',
            borderRadius: '8px',
            backgroundColor: ' rgb(245, 235, 235)',
            opacity: '80%'
          }}
        >
          <TextField label="Name" id="outlined-start-adornment" value={name} onChange={(e) => setName(e.target.value)}
            sx={{ m: 1, width: '35ch' }}
            InputProps={{ startAdornment: <InputAdornment position="start"></InputAdornment>, }}
          />
          <FormControl sx={{ m: 1, width: '35ch', direction: 'ltr' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'}
              endAdornment={<InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword} edge="end"  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              }
              label="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button onClick={() => CheckLogin(name, password)}>to login</Button>
        </Box>
       
      </Box>
     
        <Footer />
   
      
     
    </>
  )
}))

export default Login
