import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks.' },
    {
      title: 'Thumbmaster', description: 'Person who drew card is now thumbmaster. They can put there thumb on the table at any time through the rest of the game or until another person draws a 5 and becomes thumbmaster. Everyone else has to then put there thumb on the table; the last one to do so drinks.'
    },
    {
      title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.'
    },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
    { title: 'Quizmaster', description: 'Ask somebody a difficult question.' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one.' },
    { title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
    { title: 'Chicks', description: 'All girls drink.' }
  ];

  title = '';
  description = '';
  @Input() card: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.card) {
      let cardNumberFirstSplit = this.card.split('_')[1];
      let cardNumberSecondSplit = cardNumberFirstSplit.split('.')[0];
      this.title = this.cardAction[+cardNumberSecondSplit - 1].title;
      this.description = this.cardAction[+cardNumberSecondSplit - 1].description;
    }
  }

}