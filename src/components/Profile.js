import image from "../images/keyodhoo-drone-13-7-m.jpg"

function Profile({width = 100, height = 100}) {
    return ( 
        <div>
            <img style={{borderRadius: "50%"}} src={image} alt="profile" width={width}  height={height}/>
        </div>
     );
}

export default Profile;