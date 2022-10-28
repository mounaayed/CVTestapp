import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './home/footer/footer.component';
import {SidbarComponent} from './home/sidbar/sidbar.component';
import {NavbarComponent} from './home/navbar/navbar.component';
import {LayoutComponent} from './home/layout/layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {OffreComponent} from './offre/offre.component';
import {EntrepriseComponent} from './entreprise/entreprise.component';
import {EntreprisePipe} from './recherche/entreprise.pipe';
import {CandidatPipe} from './recherche/candidat.pipe';
import {DetailoffreComponent} from './offre/detailoffre/detailoffre.component';
import {ProfilcandidatComponent} from './profilcandidat/profilcandidat.component';
import {ProfilentrepriseComponent} from './profilentreprise/profilentreprise.component';
import {CvComponent} from './cv/cv.component';
import {ProfilsComponent} from './profils/profils.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModalModule} from "ngx-bootstrap/modal";
import { ListfavorieComponent } from './listfavorie/listfavorie.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { OfferPipe } from './recherche/offer.pipe';
import { PublieroffreComponent } from './publieroffre/publieroffre.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { CommentComponent } from './comment/comment.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceproffesionelleComponent } from './experienceproffesionelle/experienceproffesionelle.component';
import { PassertestComponent } from './passertest/passertest.component';
import { TestbycompetenceComponent } from './testbycompetence/testbycompetence.component';
import { PropositionComponent } from './testbycompetence/proposition/proposition.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ResultatComponent } from './testbycompetence/resultat/resultat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SidbarComponent,
    NavbarComponent,
    LayoutComponent,

    OffreComponent,
    EntrepriseComponent, CandidatPipe,
    EntreprisePipe,

    DetailoffreComponent,

    ProfilcandidatComponent,
    ProfilentrepriseComponent,
    CvComponent,
    ProfilsComponent,
    ListfavorieComponent,
    CandidatureComponent,
    OfferPipe,
    PublieroffreComponent,
    NewpasswordComponent,
    CommentComponent,
    PresentationComponent,
    FormationComponent,
    ExperienceproffesionelleComponent,
    PassertestComponent,
    TestbycompetenceComponent,
    PropositionComponent,
    ErreurComponent,
    ResultatComponent,
  ],
  imports: [NgxPaginationModule, ModalModule,
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
