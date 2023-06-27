import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HeroComponent,
      title: 'MyHeroes'
    },
    {
      path: 'hero/:id',
      component: HeroComponent,
      title: 'Hero Details'
    }
  ];
  
  export default routeConfig;