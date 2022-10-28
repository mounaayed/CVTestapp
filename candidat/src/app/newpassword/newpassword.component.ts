import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  passworForm: FormGroup;
  submit = false;
  User;
  _id: number;


  token;
  error;
  errorToken;
  result;

  constructor(public formBuilder: FormBuilder,
              private authservice: AuthentificationService, private route: ActivatedRoute,
              private router: Router) {
  }

   ngOnInit() {
  //
  //   this.errorToken = '';
  //   this.token = this.route.snapshot.params.token;
  //   console.log(this.token)
  //   this.passworForm = this.formBuilder.group({
  //     MotDePasse: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required]
  //   }, {
  //     validator: MustMatch('MotDePasse', 'confirmPassword')
  //   });
  }


  get f() {
    return this.passworForm.controls;
  }

  //OnSubmit() {
    //this.submit = true;
    //this.error = '';
    //if (this.passworForm.valid) {
      //this.authservice.PasswordReset(this.token, this.passworForm.value["MotDePasse"]).subscribe(res => {
        //this.User = res;
        //this.submit = false;
        //this.passworForm.reset()

       // this.router.navigate(['']);

      //});
    //}
  //}
}


