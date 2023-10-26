import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  clients: Client[] = [
    { nom: 'martin', prenom: 'jean', age: 20 },
    { nom: 'dupond', prenom: 'lucien', age: 15 },
    { nom: 'meyer', prenom: 'jacques', age: 10 },
    { nom: 'bertrand', prenom: 'rené', age: 30 },
  ];

  constructor() {}

  ngOnInit() {}
}
