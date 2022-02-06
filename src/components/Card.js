import { StyledCard, ImageLocation } from "./styles/Card.styled";
const Card = ({title, googleMapsUrl, location,imageLocation, startDate, endDate, description,imageUrl}) => {
    return ( 
        <StyledCard>
            <img src={imageUrl} alt="imageUrl" />
            <div>
                <ImageLocation src="../images/location.svg"  /><span>{location}</span> <a href={googleMapsUrl}>View on Google Maps</a>
                <h1>{title}</h1> 
           
                <span>{startDate} - {endDate}</span>
                <p>{description}</p>
            </div>
        </StyledCard>
     );
}
 
export default Card; 