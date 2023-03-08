

function Card({image, title, body, width=100, height=100}) {
    return ( 
        <div style={{border:"2px orange solid", margin:"10px", padding:"10px"}}>
            <div className="card">
                <img src={image} alt="Photo2" width={width} height={height} />
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
     );
}

export default Card;