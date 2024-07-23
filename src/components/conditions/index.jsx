import React from 'react';


import Linha from '../../assets/linha.png'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Container, H1, H2, ContainerParcelas} from './styles.js';



function conditions() {
    return (
        
<Container>
               
            <ContainerParcelas>

                <first>


                    <itens>

                        <p>1ª entrada no Pix</p>
                      <p>2ª no cartão</p>
                    </itens>
                    <itens2>
                        <p>R$ 15.300,00</p>
                        <p>R$ 15.300,00</p>
                    </itens2>
                    <img src={Linha}/>
                </first>


                <total>
                    <cet>
                        <p>CET: 0,5%</p>
                        <h1>Total: R$ 30.600,00</h1>
                <img src={Linha} className='linha2' />


                    </cet>

                    <seta>
                        <p>Como funciona?</p>
                        <ExpandLessIcon></ExpandLessIcon>
                                                                     <img src={Linha} className='linha3' />


                        
                    </seta>
                    <chave>
                        <p>Identificador:</p>
                            <h1>2c1b951f356c4680b13ba1c9fc889c47</h1>

                    </chave>

                    </total>
            </ContainerParcelas>  
            </Container>

    );
}
export default conditions