const PrimaryButton=({label})=>{
    const onClickHandeler=()=>{
        alert("Button Clicked");
    }
    return <button className="myButton" onClick={onClickHandeler}>Click Here</button>
}

export default PrimaryButton;