import React, { useState } from 'react';
import projectsArray from '../../components/card/projectsArray'
import Elipse from '../../assets/Ellipse.png'

 
import { Container, Parcela, H1, P, Check, H3, Image } from './styles.js';



function Card() {
  

    return(
<Container>

    {projectsArray &&
    projectsArray.map((portions)=> (

    <Parcela key={portions.id} image={portions.imagem} active={portions.select} caixa={portions.caixa}>
        
            <div>
                <section>
                    <H1>{portions.numero}</H1>
                    <p>{portions.texto1}</p>
                </section>
                <P>{portions.texto2}</P>
             {portions.imagem && <Image src={portions.imagem} />}
                <H3>{portions.texto3}</H3>
                
            </div>
            <img className='elipse'   src={Elipse} />                

</Parcela>
    ))}
            
    
     
            



</Container>  

            
        
             


    )
}

export default Card
