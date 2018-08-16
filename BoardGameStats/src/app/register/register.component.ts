import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService  } from '../../../node_modules/ngx-bootstrap';
import { FormGroup, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { Player } from '../_models/player';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>;
  registerForm: FormGroup;
  player: Player;

  constructor(private fb: FormBuilder, private localeService: BsLocaleService) {
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

}
