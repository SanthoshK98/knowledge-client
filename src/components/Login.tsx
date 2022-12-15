import {Stack, TextField, Typography, Button, IconButton} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
 
  const handleSubmit = async(e:any)=>{
    e.preventDefault()
    try{
      let response = await fetch('http://localhost:5000/loginUser',{
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email,password})
      })
      response = await response.json()
      console.log(response)
      if(response?.status){

        navigate('/')
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Stack spacing={2} sx={{
        width:'75%',
        border: '1px solid',
        margin:'20px',
        padding:'20px',
    }}>
        <Typography variant='h5'>Login</Typography>
        <TextField label='Email' size='small' sx={{width:'75%'}} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField label='Password' type='password' size='small' sx={{width:'75%'}} onChange={(e)=>setPassword(e.target.value)}/>
        <Stack direction='row' spacing={2}>
            <Button variant='contained' size='small' sx={{width:'33%'}} onClick={handleSubmit}>Login</Button> 
            <Button variant='contained' size='small' sx={{width:'33%'}} startIcon={<GoogleIcon color='inherit'/>}>Login with Google</Button> 
            {/* <IconButton color='primary' aria-label='send'>
                <GoogleIcon/>
            </IconButton> */}
        </Stack>
        
    </Stack>
  )
}
