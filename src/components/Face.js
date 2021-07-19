import './Face.css'
const Face = ({imgurl, box})=>{
    
    return(
        <div className="center">
            <div className="absolute mt2">

                <img src={imgurl} alt="" width="500px" height="auto" id='inputimg' ></img>
                {/* <div className="bounding-box"
                    style={mesure}></div> */}
                {box.map(mark => mark)}
            </div>
        </div>
    )
}
export default Face