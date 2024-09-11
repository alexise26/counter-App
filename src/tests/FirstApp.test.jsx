import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en < FirstApp />', () => {
    
    // test('debe de hacer match con el snapshot', () => {
        
    //     const title = 'Hola soy Goku';
    //     const container = render( <FirstApp title = {title}/> );

    //     expect(container).toMatchSnapshot();
    // });
    
    test('debe de mostrar un titulo con el h1', () => {
        
        const title = 'Hola soy Goku';
        const subtitle = 'Soy un subtitulo';
        const {getAllByText} = render( <FirstApp title = {title} subtitle={subtitle}/> );

        expect(getAllByText(subtitle).length).toBe(2);
        // expect(getByTestId('test-title')).toBeTruthy();
        // expect(getByTestId('test-title').innerHTML).toBe(title);

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);
    });
    
});
