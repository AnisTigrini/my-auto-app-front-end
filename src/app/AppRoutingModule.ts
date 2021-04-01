import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AfficherAutoComponent } from './afficher-auto/afficher-auto.component';
import { ConnexionGuard } from './connexion.guard';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PageprincipaleComponent } from './pageprincipale/pageprincipale.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
    {path:'inscription', component:InscriptionComponent},
    {path:'connexion', component:ConnexionComponent},
    {path:'profil', component:ProfilComponent, canActivate:[ConnexionGuard]},
    {path:'afficher-automobile', component:AfficherAutoComponent, canActivate:[ConnexionGuard]},
    {path:'', component:PageprincipaleComponent},
    {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }