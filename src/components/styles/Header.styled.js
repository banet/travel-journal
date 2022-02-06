import styled from 'styled-components'

export const StyledHeader = styled.header`
   background-color: ${({theme}) => theme.colors.header};
   
   width:550px;
   border-top-left-radius: 5px;
    border-top-right-radius: 5px;

   h4 {
      font-size:14px;
      font-weight:medium;
      text
   } 
    
`

export const Nav=styled.nav`
   display: flex;
   justify-content: center;
   align-content: center;
   padding: 20px 0;

   h4{
      font-weight: lighter;
      color:white;
      font-size:14px;
      padding-left: 4px;
   }
`

export const Logo=styled.img`
   color: orange;
`