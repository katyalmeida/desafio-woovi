import React from 'react';
import Header from '../../components/header/header.jsx';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Select from 'react-select'
import Seta from '../../assets/setaVoltar.png'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';




import{Container,ContainerItens,ContainerForm,ContainerParcelas,H5,Section,Button,H1,H2} from './styles.js'


function Third() {


 const finished = () => {
    Swal.fire({
      title: 'Finalizar pagamento ? ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'SIM',
      cancelButtonText: 'NÃO',   customClass: {
      popup: 'custom-swal-popup', 
         icon: 'custom-swal-icon',  
       confirmButton: 'custom-confirm-button', 
      cancelButton: 'custom-cancel-button',   
    },
        didOpen: () => {
            const popup = document.querySelector('.custom-swal-popup');
            const icon = document.querySelector('.custom-swal-icon');
            const title = document.querySelector('.swal2-title');
            const confirmButton = document.querySelector('.custom-confirm-button');
            const cancelButton = document.querySelector('.custom-cancel-button');

            if (popup) {
                popup.style.width = '200px'; 
                popup.style.height = '200px'; 
            }
         if (icon) {
          icon.style.width = '27px';  
          icon.style.height = '27px'; 
          icon.style.marginTop = '3em ';
                  icon.style.fontSize = '7px';

       
        }
        if (title) {
          title.style.fontSize = '18px'; 
        }
        if (confirmButton) {
          confirmButton.style.fontSize = '14px'; 
          confirmButton.style.padding = '8px 16px';
          confirmButton.style.backgroundColor = 'green'; 
          
        }

        if (cancelButton) {
          cancelButton.style.fontSize = '14px';
          cancelButton.style.padding = '8px 16px'; 
        }
        

        }
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
            title: 'Pagamento Concluido com sucesso.',
            customClass: {
                container: 'custom-swal-success-container', 
                popup: 'custom-swal-popup', 
                confirmButton: 'custom-confirm-button', 

        
            },
    
            didOpen: () => {

                const popup = document.querySelector('.custom-swal-popup');
                const confirmButton = document.querySelector('.custom-confirm-button');
                const title = document.querySelector('.swal2-title'); 
                if (title) {
                    title.style.fontSize = '18px'; 
                    title.style.marginTop = '2em ';

                }
                if (popup) {
                    popup.style.width = '200px'; 
                    popup.style.height = '200px'; 
                }
 
                if (confirmButton) {
                    confirmButton.style.fontSize = '14px'; 
                    confirmButton.style.padding = '8px 16px'; 
                    confirmButton.style.backgroundColor = 'green'; 
          
                }
            }
        
     }).then(() => {
      });
    }
  });
};
  
  
    const navigate = useNavigate();
    const second = () => {
         
    navigate('/second');
  };

    const options = [
  { value: '15.300', label: '1x de R$ 15.300,00' },
  { value: '15.300', label: '2x de R$ 15.300,00' },
]
    return (
        
        <Container>
            <img onClick={second} style={{display:'flex', position:'absolute',marginTop:'1em',width:'30px',left:'10px'}}  src={Seta}/>

            <ContainerItens>

                <Header>

                    <H5 >João, pague a entrada de <br/>
                   R$ 15.300,00 pelo Pix</H5>
                </Header>
            </ContainerItens>

            <ContainerForm>
                <label className='nome'>Nome completo </label>
                <input placeholder="João Linaldo Dias Fraga Santos" />

                <label className='cpf'>CPF</label>
                <input placeholder="405.503.503-15" />
                
                <label className='numero'>Número do cartão</label>
                <input placeholder="405.503.503-15" />
                
                <Section>
                    <vencimento>
                            <label>Vencimento</label>
                <input placeholder="10/11" />
                    </vencimento>    
            
                    
                       <cvv><label>CVV</label>
                      <input placeholder="405" /></cvv>
                
                </Section>

                   
               
                <label className='parcelas'
                >Parcelas</label>
                <Select options={options}
               placeholder='     1x de R$ 15.300,00 '                      
                     styles={{
        container: (provided) => ({
            ...provided,
                             width: '320px',
                             color: '#4D4D4D',
                             fontWeight: '600',
                             boxShadow: 'none',
                                      

                         }),
                          control: (provided) => ({
                    ...provided,
                        borderRadius: '8px', 
                    border: '2px solid #E5E5E5', 
                              boxShadow: 'none', 
                                                                                                               

                              '&:hover': {
                                  border: '2px  solid #03D69D' 
                              }

                   
                }),
                                 placeholder: (provided) => ({
            ...provided,
                                     color: '#4D4D4D',
            fontWeight:'600'
                         }),
                                  dropdownIndicator: (provided) => ({
                    ...provided,
                    color: '#4D4D4D', 
                    '&:hover': {
                        color: '#03D69D' 
                                      },
                         }),
                                  indicatorSeparator: () => ({
                    display: 'none' 
                         }),
                                  
                                    input: (provided) => ({
                    ...provided,
                    margin: 0, 
                    padding: 0, 
                }),


    }}

                
                
                />
                


                <Button onClick={finished}> Pagar </Button>
               <prazo><H1>Prazo de pagamento:</H1>
                <H2>15/12/2021 - 08:17</H2></prazo> 
            </ContainerForm>
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
                </first>
                                    <hr></hr>



                <total>
                    <cet>
                        <p>CET: 0,5%</p>
                        <h1>Total: R$ 30.600,00</h1>

                    </cet>
<hr></hr>

                    <seta>
                        <p>Como funciona?</p>
                        <ExpandLessIcon></ExpandLessIcon>

                    </seta>
                    <hr></hr>

                    <chave>
                        <p>Identificador:</p>
                            <h1>2c1b951f356c4680b13ba1c9fc889c47</h1>

                    </chave>

                    </total>
            </ContainerParcelas>  
            
</Container>


    )
    }

    export default Third