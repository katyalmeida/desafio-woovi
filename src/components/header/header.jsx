import React from 'react';
import Logo from '../../assets/logo.png'
import PropTypes from 'prop-types';




import {Container,Image,H5} from './styles';



function Header({children}){
    return (
        <Container>
<Image src={Logo}/>
            <H5>{ children}</H5>
        </Container>
    )
}
Header.propTypes = {
    children: PropTypes.string
}
export default Header;

