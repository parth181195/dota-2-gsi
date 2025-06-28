import express, { Express, Application } from 'express';
import { D2GameConfig } from '../interfaces';
import { D2GAME_DEFAULT_CONFIG } from '../defaults';
import bodyParser from 'body-parser';
import winston from 'winston';
import path from 'path';
import { GameState } from './gameState/gameState';

export class D2Game {
  private app: Express;
  config: D2GameConfig = D2GAME_DEFAULT_CONFIG;

  constructor(config?: Partial<D2GameConfig>) {
    this.config = { ...D2GAME_DEFAULT_CONFIG, ...config };
  }

  listen() {
    this.app = express();
    const port = this.config.port || D2GAME_DEFAULT_CONFIG.port;
    const uriPath = this.config.uriPath || D2GAME_DEFAULT_CONFIG.uriPath;
    const auth = this.config.auth || D2GAME_DEFAULT_CONFIG.auth;
    this.app.listen(port, () => {
      console.log(`D2Game server is running at http://localhost:${port}/${uriPath}`);
    });

    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.get(`/`, (req, res) => {
      res.send(`D2Game server is running at http://localhost:${port}/${uriPath}`);
    });
    console.log(`/${this.config.uriPath}`);
    this.app.post(`/${this.config.uriPath}`, (req, res) => {

      const gameState = new GameState(req.body);
      res.send('Received game state data');
    });
  }

  private checkAuth() {

  }
}
