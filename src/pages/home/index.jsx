import React from 'react';

import Header from '../../components/header/header.jsx';
import Card from '../../components/card'
import Flag from "../../assets/marcador.png"
import Elipse from '../../assets/Ellipse.png'




import {Container,ContainerItens,H1,H3,H4,Pix,Marcador,P,H2,Image,H5} from './styles';
import Checkbox from '../../components/checkbox/index.jsx';



function Home() {
 


return(
<Container>
<ContainerItens>

            <Header>
                <H5>João, como você quer pagar?</H5>

       </Header>

</ContainerItens>
<H4>Pix</H4>

     <Pix>
     <Marcador>
        <H1><strong>1x</strong> R$ 30.500,00</H1>
                <H2>Ganhe 3% de Cashback</H2>
                <Image src={Flag} />
            <H3>  🤑 R$ 300,00 de volta no seu Pix na hora</H3>
            </Marcador>
        <img src={Elipse} className='elipse' /> 
         </Pix>
        <P className='pixparcelado'>Pix Parcelado</P>

        <Checkbox  />

<Card></Card>

</Container>
    






);

}

export  default Home;