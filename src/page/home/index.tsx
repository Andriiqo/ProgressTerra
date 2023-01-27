import { useEffect } from "react"
import { authorization } from "../../app/store/slice/authSlice"
import { getInfoBonus } from "../../app/store/slice/bonusSlice"
import { useAppDispatch } from "../../shared/hooks/useAppDispatch"
import { HomeContent } from "../../shared/ui"
import { Layout } from "../../widgets/layout"

const Home = () => {
  const dispatch = useAppDispatch()

  const getData = async () => {
    await dispatch(authorization())
    await dispatch(getInfoBonus())
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <Layout>
      <HomeContent/>
    </Layout>
  )
}

export default Home
