import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { Firestore, collection, collectionData, addDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIcon, MatDialogModule, DialogAddPlayerComponent, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  game: Game;
  gameItems$: Observable<any>;
  gameId: string;

  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      const gameId = params['id']; // Dokument-ID aus den Routen-Parametern
      console.log('Game ID:', gameId);

      this.gameId = params['id'];
      // Erstelle eine Referenz zu dem spezifischen Dokument in der Collection 'games'
      const gameDocRef = doc(this.firestore, `games/${gameId}`);

      // Hole die Daten des Dokuments
      this.gameItems$ = docData(gameDocRef);

      // Abonniere das Observable, um die Dokumentdaten zu erhalten
      this.gameItems$.subscribe((game: any) => {
        console.log('Game update:', game);
        this.game.currentPlayer = game.currentPlayer;
        this.game.playedCards = game.playedCards;
        this.game.players = game.players;
        this.game.stack = game.stack;
        this.game.pickCardAnimation = game.pickCardAnimation;
        this.game.currentCard = game.currentCard;
      });
    });
  }

  async newGame() {
    this.game = new Game();


  }

  takeCard() {
    if (!this.game.pickCardAnimation) {
      this.game.currentCard = this.game.stack.pop()
      this.game.pickCardAnimation = true;
      
      this.game.currentPlayer++
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      this.saveGame();
      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard)
        this.game.pickCardAnimation = false;
        this.saveGame();
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent)

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.saveGame();
      }
    });
  }

  saveGame() {
    const gameDocRef = doc(this.firestore, `games/${this.gameId}`);
    updateDoc(gameDocRef, this.game.toJson())
  }

}
