import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links = [
    {
      link: 'Dashboards',
      childLinks: ['Ecommerce','CRM'],
      activeLink: false
    },
    {
      link: 'Forms',
      childLinks: ['Controls','Extended Controls','Sample Layouts'],
      activeLink: false
    },
    {
      link: 'Tables',
      childLinks: ['regular Tables', 'Extended tables','Smart Tables','Tables with Filters'],
      activeLink: false
    },
    {
      link: 'Charts',
      childLinks: ['E-charts','NGX charts','Chart js'],
      activeLink: false
    },
    {
      link: 'Utilities',
      childLinks: ['Notifications','Modala','File Uploader','Auto Complete','Alerts'],
      activeLink: false
    },
  ];

  @Output() onToggleSidebar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  openChildLinks(i:any){
    this.links[i].activeLink = !this.links[i].activeLink;
    this.links.forEach((e,j)=> {
      if(i!==j)
      e.activeLink = false
    });
    console.log(i);
  }

  // toggleNavItem(event:any){
  //  console.log(event); 
  //  event.target.classList.toggle('active')
  //  var content = event.target.nextElementSibling;
  //   if (content.style.maxHeight){
  //     content.style.maxHeight = null;
  //   } else {
  //     content.style.maxHeight = content.scrollHeight + "px";
  //   } 
  // }

}
