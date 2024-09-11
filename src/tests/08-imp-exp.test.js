import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    
    test('getHeroesById debe retornar heroe ', () => {
      
      const id = 1;
      const hero = getHeroeById(id);
      // console.log(hero);
      
      expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    });
    
    test('getHeroesById debe retornar undefined ', () => {
      
      const id = 100;
      const hero = getHeroeById(id);
      // console.log(hero);
      
      expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar heroes DC ', () => {
      
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        // console.log(hero);
        
        expect(hero.length).toEqual(3);
      });
    
      test('getHeroesByOwner debe retornar heroes Marvel ', () => {
      
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        // console.log(hero);
        
        expect(hero.length).toEqual(2);
      });
    
});
