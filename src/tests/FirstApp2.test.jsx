import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en < FirstApp />', () => {
    
    const title = 'Hola soy Goku';
    const subtitle = 'Hola soy un subtitulo';

    test('debe hacer match con el snapshot ', () => {
       
        const {container} = render ( <FirstApp title = { title }/> );
        expect(container).toMatchSnapshot();

    });

    test('debe mostrar el mensaje Hola soy Goku', () => {
      

        render ( <FirstApp title = { title }/> );
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe mostrar el texto en un h1', () => {
        render ( <FirstApp title = { title }/> );
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title);

    });

    test('debe demostrar subtitulo enviado por props', () => {
      
        render ( <FirstApp title = { title } subtitle ={subtitle}/> );
        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
    
    
    
        

    
});
