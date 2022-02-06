import { StyledHeader, Nav, Logo } from "./styles/Header.styled";

const Header = () => {
    return (    
        <StyledHeader >
            {/* <img src="../images/logo.svg" alt="logo" />
            <h1>Hubble</h1> */}
            <Nav>
                <Logo  src='../images/logo.svg' alt='logo'/>
                <h4>my travel journal</h4>
            </Nav>
        </StyledHeader>
      );
}
 
export default Header;  
