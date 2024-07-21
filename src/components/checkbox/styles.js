import styled from 'styled-components';


export const ContainerCheckbox = styled.div`
   
   
    width: 25px;
    height: 26px;
    padding-left: 2px;
    margin: 0 2px;
    border-radius: 50%;
    top: 17.6em;
    left: 20em;
    

    background-color: ${ props => props.checked ? '#03D69D' : '#E5E5E5' };
    
    display: flex;
    position: absolute;
    align-items: center;
`;

export const CheckboxHidden = styled.input.attrs({ type: 'checkbox' })`
    overflow: hidden;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
`;

export const Text = styled.label`
    color: ${ props => props.checked ? '#03D69D' : '#03D69D' };
`;

export const StyleCheckbox = styled.label`
    width: 23px;
    height: 23px;
    border-radius: 50%;

    background: white;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        display: ${ props => props.checked ? 'flex' : 'none' };

        
    }
`;





