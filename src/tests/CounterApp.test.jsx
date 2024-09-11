import { CounterApp } from "../CounterApp";
import { fireEvent, getByText, render, screen } from "@testing-library/react";



describe('Pruebas para CounterApp', () => {
  
    const value = 100;
    
    test('debe hacer match con el snapshot', () => {
      
        const {container} = render ( <CounterApp value = { value }/> );
        expect(container).toMatchSnapshot();

    });

    test('debe tener el valor inicial de 100', () => {
      
        const {container} = render ( <CounterApp value = { value }/> );
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading', {level:2}).innerHTML).toContain(value.toString());

    });

    test('debe de incrementar con el boton +1', () => {

        render ( <CounterApp value = { value }/> );
        fireEvent.click( screen.getByText('+1') );

        expect(screen.getByText('101')).toBeTruthy();

    });

    test('debe reiniciar el boton de reset', () => {
        
        render ( <CounterApp value = { value }/> );
        fireEvent.click( screen.getByText('reset') );

        screen.getByRole('button', {name:'btn-reset'});

        expect(screen.getByText('100')).toBeTruthy();
    })
    
    


    
})
