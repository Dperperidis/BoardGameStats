import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService  } from '../../../node_modules/ngx-bootstrap';
import { FormGroup, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { Player } from '../_models/player';
import { AuthService } from '../_services/auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  player: Player;
  bsConfig: Partial<BsDatepickerConfig>;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private localeService: BsLocaleService, private router: Router,
     private authService: AuthService) {
    document.body.style.backgroundImage = 'url(../../../assets/img/regipic.jpg)';
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = 'auto';
   }

  ngOnInit() {
    (this.bsConfig = {
      containerClass: "theme-default",
      dateInputFormat: "DD/MM/YYYY"
    }),
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group(
      {
        fullName: ["",
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
        ]
       ],
        gender: ["male"],
        username: ["", Validators.required],
        dateOfBirth: [null, Validators.required],
        password: ["",
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(8)
          ]
        ],
        confirmPassword: ["", Validators.required]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get("password").value === g.get("confirmPassword").value
      ? null
      : { mismatch: true };
  }

  register() {
    if (this.registerForm.valid) {
      this.player = Object.assign({}, this.registerForm.value);
      this.authService.register(this.player).subscribe(res => {
        console.log(this.player);
      });
    }
  }

}
