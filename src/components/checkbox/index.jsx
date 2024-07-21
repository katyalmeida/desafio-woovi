import React, { useState } from 'react';
import { ContainerCheckbox, CheckboxHidden, Text, StyleCheckbox,  } from './styles.js';
import Check from '../../assets/check.png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Checkbox() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const checkboxChange = ({ ...props }) => {
    setChecked(!checked);

    setTimeout(() => {

    
      
  Swal.fire({
        title: 'Ir para o pagamento?',
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
      if (result.isDismissed) {
      setChecked(checked);
    }

    if (result.isConfirmed) {
      Swal.fire({
        title: 'Continuar com o pagamento.',
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
        navigate('/second');
      });
    }
  })}, 600);
};
  
    
  //   .then((result) => {
  //       if (result.isConfirmed) {
  //         Swal.fire('Pronto!');
  //         navigate('/second'); 
  //       }
  //     });
  //   }, 2000);
  // };
     
  



  return (
    <ContainerCheckbox
      checked={checked}
      onClick={checkboxChange}
    >
    <CheckboxHidden
      onChange={checkboxChange}
      checked={checked}
    />
      <StyleCheckbox checked={checked}>
          <img
          style={{ width: '25px' }}
          src={Check}
        />
    </StyleCheckbox>
      <Text checked={checked}/>
    </ContainerCheckbox>
  );
}

export default Checkbox;
