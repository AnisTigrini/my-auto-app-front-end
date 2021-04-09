import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './AppRoutingModule'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageprincipaleComponent } from './pageprincipale/pageprincipale.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ConnexionGuard } from './connexion.guard';
import { ProfilComponent } from './profil/profil.component';
import { InformtionsComponent } from './profil/informtions/informtions.component';
import { FavorisComponent } from './profil/favoris/favoris.component';
import { AfficherAutoComponent } from './afficher-auto/afficher-auto.component';
import { MespostsComponent } from './profil/mesposts/mesposts.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    PageprincipaleComponent,
    PagenotfoundComponent,
    HeaderComponent,
    SpinnerComponent,
    ProfilComponent,
    InformtionsComponent,
    FavorisComponent,
    AfficherAutoComponent,
    MespostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConnexionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
