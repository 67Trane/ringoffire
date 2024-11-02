import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {

  cardAction= [
    {
      title: "Waterfall",
      description: "Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 can stop, and so on."
    },
    {
      title: "You",
      description: "You decide who drinks."
    },
    {
      title: "Me",
      description: "Congratulations! Drink a shot!"
    },
    {
      title: "Category",
      description: "Come up with a category (e.g., Colors). Each player must enumerate one item from the category."
    },
    {
      title: "Bust a Jive",
      description: "Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one."
    },
    {
      title: "Chicks",
      description: "All girls drink."
    },
    {
      title: "Heaven",
      description: "Put your hands up! The last player drinks."
    },
    {
      title: "Mate",
      description: "Pick a mate. Your mate must always drink when you drink and the other way around."
    },
    {
      title: "Thumbmaster",
      description: "When you put your thumb on the table, everyone else has to do the same. The last one to do so drinks."
    },
    {
      title: "Men",
      description: "All men drink."
    },
    {
      title: "Quizmaster",
      description: "You are the quizmaster. Everyone who answers your questions must drink."
    },
    {
      title: "Never have I ever...",
      description: "Say something you never did. Everyone who did it has to drink."
    },
    {
      title: "Rule",
      description: "Make a rule. Everyone needs to drink when he breaks the rule."
    }
  ]

  title: string = '';
  description = '';

  @Input() card: string;

  constructor() {

  }

  ngOnChanges(): void {
    if (this.card) {
      console.log("current card is: ", this.card)
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title
      this.description = this.cardAction[cardNumber - 1].description
    }
  }

}


