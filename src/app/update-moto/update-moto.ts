import { Component, OnInit } from '@angular/core';
import { MotoService } from '../services/moto';
import { ActivatedRoute, Router } from '@angular/router';
import { Moto } from '../model/moto.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-moto',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-moto.html',
})
export class UpdateMoto implements OnInit {
  currentMoto = new Moto();

  constructor(
    private motoService: MotoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentMoto = this.motoService.consulterMoto(this.route.snapshot.params['id']);
  }

  updateMoto() {
    this.motoService.updateMoto(this.currentMoto);
    this.router.navigate(['motos']);
  }
}
