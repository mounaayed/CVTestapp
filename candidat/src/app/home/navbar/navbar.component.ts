import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../services/authentification.service';
import {CandidatService} from '../../services/candidat.service';
import {EntrepriseService} from '../../services/entreprise.service';
import {OffreService} from '../../services/offre.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginForm: FormGroup;
  formcandidat: FormGroup;
  formentreprise: FormGroup;
  submitted = false;
  connected;
  token;
  role;
  userconnectee;
  choixcandidat = true;
  choixentreprise = false;
  fileToUpload: File = null;
  roleuserconnectee;
  user;
  listfavorie;
  offre;

  constructor(private router: Router, private offreservice: OffreService,
              private candidatservice: CandidatService, private entrepriseservice: EntrepriseService,
              private authservice: AuthentificationService, private formBuilder: FormBuilder) {
    this.role = localStorage.getItem('roleuserconnectee');
    console.log("role", this.role);
    if (localStorage.getItem('conected') === 'false') {
      this.connected = false;
    }
    if (localStorage.getItem('conected') === 'true') {
      this.connected = true;
    }


  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: [''],
      password: [''],
    });
    this.formcandidat = this.formBuilder.group({

      username: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      sexe: ['', Validators.required],
      adresse: ['', Validators.required],
      cin: ['', Validators.required],
      age: ['', Validators.required],
      numtel: ['', Validators.required],
      codepostale: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      civilite: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.formentreprise = this.formBuilder.group({

      username: ['', Validators.required],
      nomentreprise: ['', Validators.required],
      matriculefiscale: ['', Validators.required],
      localisation: ['', Validators.required],
      anneefondation: ['', Validators.required],
      secteuractivite: ['', Validators.required],
      description: ['', Validators.required],
      numtel: ['', Validators.required],
      codepostale: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.user = JSON.parse(localStorage.getItem('userconnectee'));
    this.listfavorie = this.user.offre;
    for (const i of this.listfavorie) {
      this.offreservice.getofferbyid(i).subscribe(res => {
        console.log(res);
        this.offre = res;

      });


    }


  }
  postMethod(files: FileList) {
    this.fileToUpload = files.item(0);
    return false;
  }

  choixcand() {
    this.choixcandidat = true;
    this.choixentreprise = false;
  }

  choixentre() {
    this.choixcandidat = false;
    this.choixentreprise = true;
  }

  get f() {
    return this.loginForm.controls;
  }

  get c() {
    return this.formcandidat.controls;
  }

  get e() {
    return this.formentreprise.controls;
  }

  login() {
    this.submitted = true;
    console.log(this.loginForm.value);
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authservice.login(
      this.loginForm.value
    ).subscribe((res: any) => {
      console.log(res);
      this.token = res.data.token;
      this.connected = true;
      localStorage.setItem('conected', 'true');
      // console.log(this.token);
      this.userconnectee = res.data.user;
      localStorage.setItem('userconnectee', JSON.stringify(this.userconnectee));
      this.roleuserconnectee = res.data.user.__t;
      console.log(this.roleuserconnectee)
      localStorage.setItem('roleuserconnectee', this.roleuserconnectee);

      this.router.navigate(['']);
      localStorage.setItem('tocken', this.token);
      window.location.reload()

    });

  }

  registercandidat() {
    this.submitted = true;
    console.log(this.formcandidat.value);
    // stop here if form is invalid
    // if (this.formcandidat.invalid) {
    //   return;
    // }
    this.candidatservice.registerdoctor(this.formcandidat.value, this.fileToUpload).subscribe((res: any) => {
      console.log(res);

      // console.log(this.token);
      this.router.navigate(['']);

    });
  }


  registerentreprise() {
    this.submitted = true;
    console.log(this.formentreprise.value);
    // stop here if form is invalid
    if (this.formentreprise.invalid) {
      return;
    }
    this.entrepriseservice.registerentre(this.formentreprise.value, this.fileToUpload).subscribe((res: any) => {
      console.log(res);

     // console.log(this.token);
      this.router.navigate(['']);

    });
  }

  logout() {
    localStorage.setItem('conected', 'false');
    localStorage.clear();
    window.location.reload();
  }
}
