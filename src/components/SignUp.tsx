import {
  Stack,
  TextField,
  Typography,
  Button,
  IconButton,
  FormHelperText,
  FormControl,FormLabel, FormControlLabel, RadioGroup, Radio, Snackbar, AlertProps, Alert
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm } from "react-hook-form";
import { ReactNode, useState, forwardRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref){
      return <Alert elevation={6} ref={ref} {...props}/>
    }
)

export const SignUp = () => {
  const [open, setOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  console.log(`{ Open: ${open}}`)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClose = (e?: React.SyntheticEvent | Event, reason?:string)=>{
    if(reason === 'clickaway'){
      return
    }
    setOpen(false)
  }
  const onSubmit = async (data:any)=>{
    console.log(data)
    try{
      let response = await fetch('http://localhost:5000/addUser',{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      })
      response = await response.json()
      console.log(response)
      if(response?.status){
        setOpen(true)
        
        reset()
        // if(!open){
        //   navigate('/login',{state:"Hello"})
        // }
        

      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Stack
      spacing={2}
      sx={{
        width: "75%",
        border: "1px solid",
        margin: "20px",
        padding: "20px",
      }}
    >
      <Typography variant="h5">SignUp</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
        <TextField
            label="Name"
            size="small"
            sx={{ width: {
              xs: "90%",
              lg: "75%"
            } }}
            placeholder="Enter your Name"
            {...register("userName", { required: "Username is required"})}
            error={!!errors?.userName}
            helperText={errors.userName?.message as ReactNode}
          />
          <TextField
            label="Email"
            size="small"
            sx={{ width: "75%" }}
            placeholder="Enter your Email"
            {...register("email", { required: "Email is required" })}
            error={!!errors?.email}
            helperText={errors.email?.message as ReactNode }
          />
          {/* {errors?.email && (<FormHelperText color='red'>Error</FormHelperText>)}   */}
          <TextField
            label="Password"
            type="password"
            size="small"
            sx={{ width: "75%" }}
            placeholder="Enter your Password"
            {...register("password", {required: "Password is required"})}
            error={!!errors?.password}
            helperText={errors.password?.message as ReactNode}
          />
          <TextField
            label="Confirm Password"
            type="password"
            size="small"
            sx={{ width: "75%" }}
            placeholder="Enter your Password"
            {...register("cpassword",{required: "Confirm Password is required"})}
            error={!!errors?.cpassword}
            helperText={errors.cpassword?.message as ReactNode}
          />
          <TextField
            label="Mobile Number"
            size="small"
            sx={{ width: "75%" }}
            placeholder="Enter your Phone Number"
            {...register("phone",{required: "Phone number is required"})}
            error={!!errors?.phone}
            helperText={errors.phone?.message as ReactNode}
          />
          <TextField
            label="Age"
            type="number"
            size="small"
            sx={{ width: "75%" }}
            placeholder="Enter your Age"
            {...register("age",{required: "Age is required"})}
            error={!!errors?.age}
            helperText={errors.age?.message as ReactNode}
          />
          <FormControl
            
            error={!!errors?.gender}
          >
            <FormLabel id="gender-label" sx={{
              textAlign: "left"
            }}>
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender-label"
            >
              <FormControlLabel control={<Radio {...register("gender",{required: "Gender is required"})}/>} label="Male" value="male"/>
              <FormControlLabel control={<Radio {...register("gender",{required: "Gender is required"})}/>} label="Female" value="female"/>
              <FormControlLabel control={<Radio {...register("gender",{required: "Gender is required"})}/>} label="Others" value="others"/>
            </RadioGroup>
            <FormHelperText>{errors.gender?.message as ReactNode}</FormHelperText>
          </FormControl>
          <Stack direction="row" spacing={2}>
            <Button 
              variant="contained" 
              size="small" 
              sx={{ width: "37%" }} 
              type='submit'
            >
              SignUp
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{ width: "37%" }}
              startIcon={<GoogleIcon color="inherit" />}
            >
              SignUp with Google
            </Button>
            {/* <IconButton color='primary' aria-label='send'>
                <GoogleIcon/>
            </IconButton> */}
          </Stack>
        </Stack>
      </form>
      {/* <Snackbar 
      message="Registered Successfully, Redirecting to login page..."
      autoHideDuration={6000}
      open={open}
      onClose={handleClose}
      anchorOrigin= {{
        vertical: "bottom",
        horizontal: "center"
      }}
      /> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
        Registered Successfully, Redirecting to login page...
        </SnackbarAlert>
      </Snackbar>
    </Stack>
  );
};
