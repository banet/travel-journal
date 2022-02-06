import styled from 'styled-components'

export const StyledCard = styled.div`
    display:flex;
    align-items:center;
    padding:20px 10px 18px 0px;
    border-bottom: .3px solid #e5e5e5;
    
   
    a {
        font-size:10px;
        color:#918E9B;
    }

    span {
        font-size:10px;
        text-transform:uppercase;
    }

    p {
        font-size:10px;
    }
    h1 {
        font-weight:bold;
        font-size:25px;
        padding-bottom:10px;
    }

    div {
        padding-left:1rem;
        
    }

     &:last-child {
        content"";
        border-bottom: none;
    
    }
   

    
`

export const ImageLocation = styled.img`
        width:12px;
        height:12px;
        padding-right:5px;
`
    

