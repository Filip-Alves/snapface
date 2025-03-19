import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  constructor(private router: Router){}

  @Input() faceSnap!: FaceSnap;

  userLiked!: boolean;
  likedButtonText!: string;

  ngOnInit(): void {
    this.likedButtonText = "Like";
    this.userLiked = false;
  }

  onViewFaceSnap(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
