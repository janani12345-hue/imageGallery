import one from "./assets/image/plants5.png";
import two from "./assets/image/plants6.png";
import three from "./assets/image/plants7.png"
import four from "./assets/image/plants8.png"
import five from "./assets/image/pots.jpg.png"
import six from "./assets/image/pots3.jpg.png"
import "./style.css"
function Gallery(){
    return(
        <div>
            <h1 style={{color:"purple",textAlign:"center"}}>ImageGallery</h1>

        <div className="ImageGallery">
            
            <div className="gal">
                <img src={one} alt="image1"></img>
                <p>Lady palm pot</p>
            </div>
            <div className="gal">
                <img src={two} alt="image2"></img>
                <p>Peace Lily pot</p>
            </div>
            <div className="gal">
                <img src={three} alt="image3"></img>
                <p>Rubber pot</p>
            </div>
            <div className="gal">
                <img src={four} alt="image4"></img>
                <p>Spider pot</p>
            </div>
            <div className="gal">
                <img src={five} alt="image5"></img>
                <p>Peace Lily pot</p>
            </div>
            <div className="gal">
                <img src={six} alt="image6"></img>
                <p>Rubber pot</p>
            </div>

        </div>
        </div>
    )
}
export default Gallery