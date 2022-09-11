
const BlackItem = ({ picture, name, description, price }) => {
    console.log("picture", picture);
    return (
        <div className="img-black-dop">
           {picture && <img src={picture} alt="img" width={"300px"}></img>} 
            <div className="text-black-Lebron">
                {name}
            </div>
            <div className="text-black-Nike">{description}</div>
            <div className="text-black-money">{price}</div>
        </div>
    )
}

export default BlackItem