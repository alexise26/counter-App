import { getSaludo } from "../base-pruebas/02-template-string.js";

describe('Pruebas en 02-template-string', () => {
  
    test('getSaludo debe regresar "Hola Fernando" ', () => {
      const name = "Fernando"
      const message = getSaludo(name);

      expect(message).toBe(`Hola ${ name }`)
    })
    
})
