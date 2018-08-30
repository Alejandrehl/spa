import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];

  constructor( private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      console.log(params);
      this.heroes = this._heroesService.searchHeroes(params['text']);
      console.log(this.heroes);
    });
  }

}
