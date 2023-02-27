const Intro = (props) => {
    const stl = {
        backgroundColor: props.color
    }
    return ( 
        <div style={stl} className="blog-post-intro">
            <h2>{props.compHeading}</h2>
            <div>
                <p>{props.compText}</p>
                <h5>{Math.floor(Math.random() * 10) + 2}</h5>
                <p className="link">Read more...</p>
            </div>
        </div>
     );
}

export default Intro;