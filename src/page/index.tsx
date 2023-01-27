import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const HomePage = lazy(() => import('./home'))

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
  )
}

export default Routing