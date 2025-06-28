import {Node} from './node';
import { Auth } from './auth/auth';
import { Provider } from './provider/provider';
import { Map } from './map/map';
import { Player } from './player/player';
import { Hero } from './hero/hero';
import { Abilities } from './abilities/abilities';
import { Items } from './items/items';
export class GameState extends Node {
  auth: Auth;
  provider: Provider;
  map: Map;
  player: Player;
  hero: Hero;
  abilities: Abilities;
  items: Items

  constructor(json: any = null) {
    super(json);
    this.auth = new Auth(this.getObject('auth'));
    this.provider = new Provider(this.getObject('provider'));
    this.map = new Map(this.getObject('map'));
    this.player = new Player(this.getObject('player'));
    this.hero = new Hero(this.getObject('hero'));
    this.abilities = new Abilities(this.getObject('abilities'));
    this.items =  new Items(this.getObject('items'));
    // console.log('GameState initialized with', this);
  }
}