import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {FormsModule,ReactiveFormsModule, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-suivre',
  templateUrl: './suivre.component.html',
  styleUrls: ['./suivre.component.css']
})
export class SuivreComponent implements OnInit {
  submitted:false |any;
  form: any;
  constructor(private Apiservice:ApiService,private formBuilder: FormBuilder,private router: Router,private http: HttpClient) {};
  ngOnInit() {
    this.form = new FormGroup({
      "email": new FormControl('', [Validators.required,Validators.email]),
      "recaptcha":new FormControl('', [Validators.required])
    });
  }
  siteKey:string="6Ld-nPQjAAAAAFubdSXADStYvuTJJUeEJ9aPgYyN";
 onSubmit(data:any)
{
  this.submitted=true;
  this.Apiservice.search(data);
  this.router.navigate(['liste']);
 }
 get email(){ return this.form.get('email');}

}
