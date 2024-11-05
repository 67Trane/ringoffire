import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-edit-player',
  standalone: true,
  imports: [CommonModule, DialogAddPlayerComponent, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.scss'
})
export class EditPlayerComponent {
  allProfilePictures = ["1.webp", "2.png", "monkey.png", "pinguin.svg", "serious-woman.svg", "winkboy.svg"]
  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>){

  }

}
