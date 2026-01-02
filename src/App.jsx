import { useState } from 'react'
import Background from "./components/Background/Background"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"


const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"What you like"},
    {text1:"Indulge",text2:"your passions"},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />

    </div>
  )
}

export default App
