import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})

export class FaceSnapListComponent {

  constructor(private faceSnapsService: FaceSnapsService){}

  facesnaps!: FaceSnap[];
  
    ngOnInit(): void {
      this.facesnaps = this.faceSnapsService.getFaceSnaps();
  
      // this.facesnaps[0].setLocation("Dans la prairie");
      // this.facesnaps[1].setLocation("Près d'un fleuve");
    }
}
