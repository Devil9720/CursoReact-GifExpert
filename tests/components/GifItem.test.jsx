import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"


describe('evaluaciones para GifItem', () => { 

    const title = 'Goku';
    const url = 'https://goku.com';


    test('deberia tomar una snapshot de GifItem', () => { 
        render(<GifItem title={ title }  url={ url }/>);
        expect( render ).toMatchSnapshot();
        
     })

 })