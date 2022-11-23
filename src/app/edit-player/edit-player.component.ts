import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  allProfilePictures = [
    'profile-pic-man.png',
    'profile-pic-woman.png',
    'profile-pic-man-2.png',
    'profile-pic-woman-2.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
