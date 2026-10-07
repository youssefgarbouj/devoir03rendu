import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto';

@Component({
  selector: 'app-add-moto',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-moto.html',
})
export class AddMoto implements OnInit {
  newMoto = new Moto();
  message: string | undefined;

  constructor(private motoService: MotoService) {}

  ngOnInit(): void {}

  addMoto() {
    this.motoService.ajouterMoto(this.newMoto);
    this.message = "Moto " + this.newMoto.modeleMoto + " ajoutée avec succès !";
  }
}
