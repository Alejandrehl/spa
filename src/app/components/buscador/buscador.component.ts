import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.termino = params['text'];
      this.heroes = this._heroesService.searchHeroes(this.termino);
    });
  }

}
