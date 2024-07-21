import styled from "styled-components";


export const Container = styled.div `
   display: flex;
   flex-direction: column;
   border-radius: 15px;
   border: 1px solid #E5E5E5;
`

export const Check = styled.div `
`

export const Parcela = styled.div `
 display: flex;
flex-direction: row;
gap: ${props => (props.image ? '36px' : '173px')};
align-items: center;
height: ${props => (props.image ? '95px' : '70px')};
padding-left: 15px;
border: ${props => (props.active ? '2px solid #03D69D' : '1px solid #E5E5E5')};

 border-radius: ${(props) => {
    if (props.caixa && props.active) {
      return '10px 10px 10px 10px'; // Aplica bordas arredondadas completas se ambas as condições forem verdadeiras
    } else if (props.caixa) {
      return '0 0 10px 10px'; // Aplica bordas arredondadas somente na parte inferior
    } else if (props.active) {
      return '10px 10px 0 0'; // Aplica bordas arredondadas somente na parte superior
    } else {
      return '0'; // Sem bordas arredondadas
    }
  }};
/* border-radius: ${props =>(props.caixa ? '0 0 10px 10px' : '0')};
border-radius: ${props =>(props.active ? '10px 10px 0 0' : '0')}; */


.elipse{
    z-index: -2;
width: 23px;
margin-top:  ${props => (props.image ? '-40px' : '-25px')};
}

section {
    display: flex;
    /* flex-direction: row; */
    gap: 5px;
    p{
         font-size: 16px;
    color: #4D4D4D;
        font-weight: 600;
    }
    
}



 




`

export const P = styled.p `
    font-size: 11px;
text-align: left;
color: #AFAFAF;


`

export const H1  = styled.h1 `

    color: #4D4D4D;
     font-weight: 800;
        font-size: 17px;
`
export const H3 = styled.h3`
font-size: 12px;
color: white;
text-indent: 10px;
margin-top: 9px;


`
export const Image = styled.img`
width: 19.2em;
height: 1.5em;
z-index: -1;
display: flex;
position: absolute;
margin-top: 7px;

`
