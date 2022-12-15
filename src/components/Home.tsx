import { Stack } from "@mui/material"
import { useLocation } from "react-router-dom"

export const Home = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div>Home</div>
  )
}
