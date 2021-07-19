import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = ()=>{
    return(
        <div className="ml4 absolute">
            <Tilt className="Tilt br2 shadow-2 tc" options={{ max : 50 }} style={{ height: 110, width: 110 }} >
            <img alt="brain" src={brain} className="Title-inner pt1"></img>
            </Tilt>
        </div>
    )
}

export default Logo;