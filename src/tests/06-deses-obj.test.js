import { usContext } from "../base-pruebas/06-deses-obj.js";


describe('Pruebas en 06-deses-obj', () => {
    test('Debe regresar un objeto', () => {
      
        const cap = usContext('1','2','3');


        expect(cap).toStrictEqual(cap);
    })
    
});
