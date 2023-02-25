function Intro1(props) {
    const color = {
        color: props.textColor
    }
     return (
            <div className="blog-post-intro">
                <h2 style={color}>I've become a React developer! {props.name}</h2>
                <div>
                    <p>{props.text}</p>
                    <p className="link">Read more...</p>
                </div>
            </div>
        );
    };
    
    export default Intro1;