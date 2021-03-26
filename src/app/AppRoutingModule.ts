import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PageprincipaleComponent } from './pageprincipale/pageprincipale.component';

const routes: Routes = [
    {path:'inscription', component:InscriptionComponent},
    {path:'connexion', component:ConnexionComponent},
    {path:'', component:PageprincipaleComponent},
    {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }