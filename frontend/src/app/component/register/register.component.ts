import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.registerUser(this.model).subscribe(
      response => {
        this.authService.saveToken(response.accessToken);
        console.log('Registration successful', response);
        this.router.navigate(['/hello-world']);
      },
      error => {
        console.log('Registration failed', error);
      }
    );
  }
}
