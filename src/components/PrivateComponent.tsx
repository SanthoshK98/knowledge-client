import { Outlet, Navigate } from "react-router-dom"

export const PrivateComponent = () => {
  const auth = false
  return (
    auth ? <Outlet/> : <Navigate to='/signup'/>
  )
}


