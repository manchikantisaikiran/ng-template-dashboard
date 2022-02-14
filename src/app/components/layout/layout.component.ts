import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  html:HTMLElement | null;
  themeSection = false;
  activeThemeMode = 'light';
  activeTheme = 'default';
  activeLayout = 'side-nav-side-menu';
  isSidebarHidden = false;

  constructor() {
    this.html = document.querySelector('html');
    const activeTheme = localStorage.getItem('currentTheme');
    const activeLayout = localStorage.getItem('currentLayout');
    if(activeTheme){
      [this.activeTheme,this.activeThemeMode] = activeTheme.split('-');
      this.html?.classList.add(activeTheme);

    }
    if(activeLayout){
      this.activeLayout = activeLayout;
      this.html?.setAttribute('layout',this.activeLayout);
    }
  }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeSection = !this.themeSection;
  }

  changeThemeMode(theme: string) {
    this.activeThemeMode = theme;
    const classToToggle = `${this.activeTheme}-${this.activeThemeMode}`
    this.html?.setAttribute('date-theme',theme);
    this.html?.classList.add(classToToggle);
    const body = document.querySelector('body')
    body?.setAttribute('data-theme',theme);
    localStorage.setItem('currentTheme',`${this.activeTheme}-${this.activeThemeMode}`);
    this.toggleTheme();
  }

  changeTheme(theme: string) {
    this.activeTheme = theme;
    this.changeThemeMode(this.activeThemeMode);
  }

  changeLayout(layout: string){
    this.activeLayout = layout;
    this.html?.setAttribute('layout',this.activeLayout);
    localStorage.setItem('currentLayout',this.activeLayout);
    this.toggleTheme();
  }

  toggleSidebar(){
    this.isSidebarHidden = !this.isSidebarHidden;
  }

}
