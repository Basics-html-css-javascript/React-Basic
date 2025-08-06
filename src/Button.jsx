function Button(){
    const handleClick = () =>{
        alert("Butoon Clicked!")
    }
    return(
        <button
            style={{
                backgroundColor:"green",
                border:"1px solid black",
                padding:"4px 8px",
                cursor:"pointer",
                borderRadius:"4px",
            }}
            type="button"
            // onClick={handleClick}
            onMouseOver={handleClick}
        >
            Click me!
        </button>
    );
}

export default Button;