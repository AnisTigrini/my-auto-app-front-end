import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ConnexionGuard } from './connexion.guard';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PageprincipaleComponent } from './pageprincipale/pageprincipale.component';

const routes: Routes = [
    {path:'inscription', component:InscriptionComponent, canActivate:[ConnexionGuard]},
    {path:'connexion', component:ConnexionComponent, canActivate:[ConnexionGuard]},
    {path:'', component:PageprincipaleComponent},
    {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }