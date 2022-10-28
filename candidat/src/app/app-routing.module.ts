import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './home/layout/layout.component';
import {OffreComponent} from './offre/offre.component';
import {EntrepriseComponent} from './entreprise/entreprise.component';
import {DetailoffreComponent} from './offre/detailoffre/detailoffre.component';
import {CompetenceComponent} from "./competence/competence.component";
import {ProfilcandidatComponent} from "./profilcandidat/profilcandidat.component";
import {ProfilentrepriseComponent} from "./profilentreprise/profilentreprise.component";
import {CvComponent} from "./cv/cv.component";
import {ProfilsComponent} from "./profils/profils.component";
import {ListfavorieComponent} from "./listfavorie/listfavorie.component";
import {CandidatureComponent} from "./candidature/candidature.component";
import {PublieroffreComponent} from "./publieroffre/publieroffre.component";
import {CommentComponent} from "./comment/comment.component";
import {TestComponent} from "./test/test.component";
import {PassertestComponent} from "./passertest/passertest.component";
import {TestbycompetenceComponent} from "./testbycompetence/testbycompetence.component";
import {ErreurComponent} from "./erreur/erreur.component";
import {ResultatComponent} from "./testbycompetence/resultat/resultat.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [{path: '', component: LayoutComponent},
      {path: 'offre', component: OffreComponent},
      {path: 'detailoffre/:id', component: DetailoffreComponent},
      {path: 'entreprise', component: EntrepriseComponent},
      {path: 'competence', component: CompetenceComponent},
      {path: 'profile', component: ProfilsComponent},
      {path: 'profileentreprise/:id', component: ProfilentrepriseComponent},
      {path: 'profilecandidat/:id', component: ProfilcandidatComponent},
      {path: 'testcandidat/:comptence', component: PassertestComponent},
      {path: 'resultat/:resultat', component: ResultatComponent},

      {path: 'passertest1/:idtest', component: TestbycompetenceComponent},
      {path: 'cv', component: CvComponent},
      {path: 'allfavorie', component: ListfavorieComponent},
      {path: 'candidature', component: CandidatureComponent},
      {path: 'publieroffre', component: PublieroffreComponent},
      {path: 'notresite', component: CommentComponent},
      {path: 'test', component: TestComponent},

    ] },
  { path : '**', component: ErreurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
