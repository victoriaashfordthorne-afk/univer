import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Feature } from "./feature/feature";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Feature],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angualar-fourthproject');
}
