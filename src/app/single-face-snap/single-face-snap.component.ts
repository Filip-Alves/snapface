import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute
  ){}

  faceSnap!: FaceSnap;
  userLiked!: boolean;
  likedButtonText!: string;

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  onLike(): void {
    if (!this.userLiked) {
      this.like();
    } else {
      this.unlike();
    }
  }

  like(): void {
    this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, "like");
    this.userLiked = true;
    this.likedButtonText = "Dislike";
  }

  unlike(): void {
    this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, "unlike");
    this.userLiked = false;
    this.likedButtonText = "Like";
  }

  private prepareInterface() {
    this.likedButtonText = 'Like';
    this.userLiked = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}
