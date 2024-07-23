import React from 'react';
import Header from '../../components/header/header.jsx';
import Qrcode from '../../assets/qrcode.png';
import Vector from '../../assets/Vector.png';
import Seta from '../../assets/setaVoltar.png'
import Conditions from '../../components/conditions'
import { Container, ContainerItens, H1, H2, H5, Image, Button, ContainerImg} from './styles.js';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Tes from '../../assets/tes.png'

function Second() {
    
  const navigate = useNavigate();
  
  
  const home = () => {
    navigate('/');
  }

  const third = () => {
    Swal.fire({
      title: 'Deseja continuar com o pagamento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'SIM',
      cancelButtonText: 'NÃO',
       customClass: {
      popup: 'custom-swal-popup', 
         icon: 'custom-swal-icon',  
       confirmButton: 'custom-confirm-button', 
      cancelButton: 'custom-cancel-button',   
    },
      didOpen: () => {
        const popup = document.querySelector('.custom-swal-popup');
        const icon = document.querySelector('.custom-swal-icon');
        const swalIcon = document.querySelector('.swal2-icon'); 
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
    })
      .then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Pix realizado com sucesso!',
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
        navigate('/third');
      });
    }
  });
};

 
    
 
     
    return (
        <Container>
            <img onClick={home} style={{display:'flex', position:'absolute',marginTop:'1em',width:'30px',left:'10px'}}  src={Seta}/>
            <ContainerItens>
                <Header>
                    <H5 >João, pague a entrada de <br/>
                   R$ 15.300,00 pelo Pix</H5>
                </Header>
                
            </ContainerItens>
            <ContainerImg>
              <div> <Image src={Qrcode} /></div> 
                <Button onClick={third}>Clique para copiar QR CODE<img src={Vector} /> </Button>
               <section><H1>Prazo de pagamento:</H1>
            <H2>15/12/2021 - 08:17</H2></section> 


        </ContainerImg>
                                                    <img src={Tes} style={{width:'40px',position:'absolute',marginTop:'22px'}}/>


        <Conditions>

            </Conditions>


            
        </Container> 
    )
}

export default Second