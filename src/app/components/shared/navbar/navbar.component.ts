import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe  } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private heroesService:HeroesService, private router:Router) {
  }

  ngOnInit() {
  }

  buscarHeroe(value:string):void{
    
    if(value === ''){
      value = 'all';
    }

    this.router.navigate([`heroes/${value}`]);
  }

}
