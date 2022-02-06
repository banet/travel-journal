import { StyledCard } from "./styles/Card.styled";
const Card = ({title, googleMapsUrl, location, startDate, endDate, description,imageUrl}) => {
    return ( 
        <StyledCard>
            <img src={`../images/${imageUrl}`} alt="imageUrl" />
            <div>
                <span>{location}</span> <a href={googleMapsUrl}>View on Google Maps</a>
                <h1>{title}</h1> 
            </div>
            <div>
                <span>{startDate} - {endDate}</span>
                <p>{description}</p>
            </div>
        </StyledCard>
     );
}
 
export default Card; 