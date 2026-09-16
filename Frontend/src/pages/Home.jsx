import BestSeller from "../components/BestSeller"
import Category from "../components/Category"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <div className="mt-10">
      <Hero />
      <Category />
      <BestSeller />
    </div>
  )
}

export default Home