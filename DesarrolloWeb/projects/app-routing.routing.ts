import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HtmlComponent } from './html/src/app/html.component';
import { InicioComponent } from './iniciosesion/InicioComponent';
import { JavaComponent } from './java/src/app/java.component';
import { JavascriptComponent } from './javascript/src/app/javascript.component';
//importar carpetas para rutas(si pones el pach se pone solo)
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
  //añadirr carpetas para rutaas
  { path: 'iniciosesion', component: InicioComponent },
  //para poner la pagina prinncipal a ver directamente
  { path: '', redirectTo: '/iniciosesion', pathMatch: 'full' },
  { path: 'java', component: JavaComponent },
  {path: 'javascript', component:JavascriptComponent},
  { path: 'html', component: HtmlComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//nos movemos entre routin.ts y component.html y algunas de css