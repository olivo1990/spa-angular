import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  public heroe:Heroe;
  public ImgCasa:string;

  constructor(private route:ActivatedRoute,
    private heroesService:HeroesService) { }

  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.heroe = this.heroesService.getHeroe(params['id']);
      this.ImgCasa = "assets/img/casa_marvel.png";
      if(this.heroe.casa === "DC"){
        this.ImgCasa = "assets/img/casa_dc.png";
      }
    });
  }

}
