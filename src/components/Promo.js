import imag from "../images/keyodhoo-drone-13-7-m.jpg"
function Promo(){
    return (
        <div className="promo-selection">
            <div>
            <img src={imag} alt="This is a images" width="300px" height="auto"/>
                <h1 style={{color: "purple", textAlign: "center"}}>Don't miss the deal!!</h1>
            </div>
            <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    )
}
export default Promo;