import './Background.css'
//import video from '../../assets/video.mp4'
import plane from '../../assets/plane.mp4'
import img from '../../assets/img.jpeg'
//import bg from '../../assets/bg.jpg'

const Background = ({playStatus,heroCount}) => {

   if (playStatus) {
    return (
        <video className='background' autoPlay loop muted>
            <source src={plane} type='video/mp4'/>
        </video>
    ) 
   }
   else if(heroCount===0)
    {
        return <img src ={img} className='background1' alt="image1"/>
    }
    else if(heroCount===1)
    {
        return <img src ={bg} className='background2' alt="image1"/>
    }
    return null
}

export default Background