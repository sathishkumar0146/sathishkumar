import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
