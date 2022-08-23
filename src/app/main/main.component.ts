import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Observable, Observer } from 'rxjs';
import { ThemeService } from '../theme/theme.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  faSun = faSun;
  faMoon = faMoon;
  show = false
  viewMode = 'tab1';
 
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  
  }

  toggle() {
    this.show = !this.show
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

 

}
