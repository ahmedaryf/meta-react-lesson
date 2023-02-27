const Intro1 = (props) => {
    const color1 = {
        color: props.textColor,
        fontWeight: 900,
        letterSpacing: '4px',
        textAlign: 'center'
    }
     return (
            <div className="blog-post-intro">
                <h2 style={color1}>I've become a React developer! {props.name}</h2>
                <div>
                    <p>{props.text}</p>
                    <p className="link">Read more...</p>
                </div>
                <hr className="line"/>
            </div>
        );
    };
    
    export default Intro1;