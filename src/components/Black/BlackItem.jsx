
const BlackItem = ({picture, name, description, price}) => {
    
    return (
        <div className="img-black-dop">
            <img src={picture} alt="img"></img>
            <div className="text-black-Lebron">
                {name}
            </div>
            <div className="text-black-Nike">{description}</div>
            <div className="text-black-money">{price}</div>
        </div>
    )
}

export default BlackItem