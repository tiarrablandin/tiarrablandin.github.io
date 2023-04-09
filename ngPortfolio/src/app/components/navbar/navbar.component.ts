import { Component } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  faLinkedin = faLinkedin;
  faGithub = faGithub;

  openPdf() {
  window.open("assets/TiarraBlandinResume.pdf");
  }
}
