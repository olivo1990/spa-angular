import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  parametroNombreheroe:string;

  constructor(private heroesService: HeroesService,
    private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    

    this.activatedRoute.params.subscribe(params =>{
      if(params["nombreHeroe"] !== "all"){
        this.parametroNombreheroe = params["nombreHeroe"];
        this.heroes = this.heroesService.buscarHeroes(params["nombreHeroe"]);
      }else if(params["nombreHeroe"] === "all"){
        this.heroes = this.heroesService.getHeroes();
      }
    })
  }

  verHeroe(id:number):void{
    this.router.navigate([`/heroe/${id}`]);
  }

}
