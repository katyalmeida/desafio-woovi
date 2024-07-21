import React from 'react';
import Logoimg from  '../../assets/logoimg.png'
import Logoname from '../../assets/logonome.png'


import  {Container, Image, P} from  './styles'


function Footer() {


    return (

<Container>

    <Image src={Logoimg} className='logoimagem'/>
    <P>Pagamento 100% seguro via:</P>
    <img src={Logoname} className='logonome'/>
</Container>


    )
}
export default Footer;

