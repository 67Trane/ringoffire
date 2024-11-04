import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData, addDoc, doc, docData } from '@angular/fire/firestore';
import { Game } from '../../models/game';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent implements OnInit {

  constructor(private firestore: Firestore, private router: Router) {

  }

  ngOnInit(): void {

  }

  async newGame() {
    let game = new Game();
    const gamesCollection = collection(this.firestore, 'games');
    await addDoc(gamesCollection, game.toJson()).then((gameInfo: any) => {
      this.router.navigateByUrl('/game/' + gameInfo.id)
    })
    
  }
}
