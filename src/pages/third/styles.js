import styled from "styled-components";


export const Container = styled.div`
/* display: flex;
flex-direction: column;
 justify-content: center;
 align-items: center; */

`

export const ContainerItens = styled.div`

`

export const ContainerParcelas = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 
      hr {
    width: 320px;                  
  height: 2px;                    
    background-color: #E5E5E5; 
   border: none;                   
   

 }

 total{
    display: flex;
flex-direction: column;
 justify-content: center;
 align-items: center;
  
 }
first{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap:80px;
    padding: 19px;
    width: 100%;


    itens{
 p{
    font-size: 16px;
font-weight:600;
 }
  
}
itens2{
      font-size: 16px;
font-weight:720;
}





}

cet{
   display: flex;
    flex-direction: row;  
    align-items: center;
    justify-content: center;
    gap:110px;
padding: 19px;       

p{
       font-size :14px ;
    }
    h1{
               font-size :16px ;
               font-weight: 600;

    }
  
}
seta{
    display: flex;
    flex-direction: row;
     align-items: center;
     gap: 170px;
    padding: 23px;
    p{
               font-size :16px ;
               font-weight: 800;

    }
}
chave{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    padding: 25px;
p{
    font-size:15px ;
font-weight:600;
color: #B2B2B2;
}
h1{
        font-size:12px ;
        font-weight: 800;
color:#4D4D4D
;
}
}
`





export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 25px;
padding: 17px;
 input{
width: 320px;
height: 48px;
border-radius: 8px  ;
border: 2px solid #E5E5E5;
opacity: 0px;



 }

 .nome{
    display: flex;
    position: absolute;
    top:9.5em;
    background-color: white;
    left: 35px;
    width: 114px; 
 }
 .cpf{
    display: flex;
    position: absolute;
   
    top:14.7em;
    background-color: white;
    left: 36px;
    width: 39px;  
 }
 .numero{
     
      display: flex;
    position: absolute;
    top:20em;
    background-color: white;
    left: 36px;
    width: 133px;
 }
 .parcelas{
      display: flex;
    position: absolute;
    top: 30.3em;
    background-color: white;
    left: 35px;
    width: 70px;
    z-index: 2;
 }

 input::placeholder{
  color:  #4D4D4D;
  font-weight: 600;
  font-size: 15px;
 text-indent: 18px;
 }

label{
      color:  #4D4D4D;
  font-weight: 600;
  font-size: 14px;
 text-indent: 12px;
}



`

export const Section = styled.div`
display: flex;
flex-direction: row;
gap:20px;

vencimento{

input{
width:200px;
height: 48px;
}
label{
    display: flex;
    position: absolute;
    top:25.2em;
    background-color: white;
    left: 35px;
    width: 90px;

}
}

cvv{
   
input{
width:100px;
height: 48px;
} 
label{
    display: flex;
    position: absolute;
    top: 29.6em;
    background-color: white;
    left: 252px;
    width: 38px;
    font-size: 12px;

}

}




`
export const H1 = styled.h1`
font-size:16px ;
display: flex;
justify-content: center;
align-items: center;
color: #B2B2B2;
;

`
export const H2 = styled.h2`
font-size:16px ;
display: flex;
justify-content: center;
align-items: center;
color: #4D4D4D;
`


export const H5 = styled.p``

export const Button = styled.button`

width: 320px;
height: 40px;
top: 704px;
left: 20px;
gap: 0px;
border-radius: 8px ;
border: none;
background-color: #133A6F;
color: #FFFFFF;
font-size: 16px;
font-weight: 600;

`





