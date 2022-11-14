import { Component, OnInit, Inject } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection, setDoc, doc, firestoreInstance$, CollectionReference, DocumentData, addDoc, docData, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: any;
  game: Game;
  doc$: Observable<DocumentData>;
  coll: CollectionReference<DocumentData>;
  doc: DocumentReference<DocumentData>;

  constructor(private firestore: Firestore, public dialog: MatDialog, private angularFire: AngularFirestore, private route: ActivatedRoute) {
    this.coll = collection(this.firestore, 'games') as CollectionReference<DocumentData>;

  }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe(params => {
      this.doc = doc(this.coll, params['id']);
      this.doc$ = (docData(this.doc) as Observable<DocumentData>);

      this.doc$.subscribe((game: any) => {
        this.game.currentPlayer = game.currentPlayer;
        this.game.playedCards = game.playedCards;
        this.game.players = game.players;
        this.game.stack = game.stack;
      });
    });
  }

  async newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false
      }, 1000)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
};

