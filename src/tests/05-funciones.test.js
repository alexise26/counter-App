import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones.js";

describe(' Pruebas en 05-funciones', () => {
    test('get User debe retornar un objeto', () => {
      
        const testUser = {
            uid:'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toStrictEqual(user);
        
    })

    test('getUsuario debe retornar un objeto', () => {
      const name = 'Fernando';
      
      const testUser = {
        uid:'ABC567',
        username: name
      };

      const activeUser = getUsuarioActivo(name);

      expect(testUser).toStrictEqual(activeUser);

    })
    
    
});
