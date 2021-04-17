import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AfficherAutoComponent } from './afficher-auto/afficher-auto.component';
import { AutoUniqueComponent } from './auto-unique/auto-unique.component';
import { ConnexionGuard } from './connexion.guard';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PageprincipaleComponent } from './pageprincipale/pageprincipale.component';
import { ProfilComponent } from './profil/profil.component';
import { ResultatsAutoComponent } from './resultats-auto/resultats-auto.component';

const routes: Routes = [
    {path:'inscription', component:InscriptionComponent},
    {path:'connexion', component:ConnexionComponent},
    {path:'resultats', component:ResultatsAutoComponent},
    {path:'auto-unique', component:AutoUniqueComponent},
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