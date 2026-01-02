import './Hero.css'
//import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'
const Hero = ({heroCount,heroData,setHeroCount,setPlayStatus,playStatus}) => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className='hero-play'>
                <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt=""/>
                <p className='text'>Click the video icon</p>
            </div>
        </div>
    )
}

export default Hero