import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private facesnaps: FaceSnap[] = [
        new FaceSnap (
        'Paul',
        'Mon meilleur ami depuis toujours!',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        74
        ),
        new FaceSnap (
        'Libellule',
        'Un Insecte magnifique pour la nature.',
        'https://cdn.pixabay.com/photo/2025/01/11/21/43/dragonfly-9326948_1280.jpg',
        new Date(),
        6
        ).withLocation('à la montagne'),
        new FaceSnap (
        'Un bon repas',
        'Manh que c\'est bon!',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        156
        )
    ]

    getFaceSnaps(): FaceSnap[] {
        return [...this.facesnaps];
    }

    // likeFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    //   const foundFaceSnap = this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);
    //   if (!foundFaceSnap) {
    //     throw new Error('FaceSnap not found!');
    //   }
    //   foundFaceSnap.like(snapType);
    // }

    getFaceSnapById(faceSnapId: string): FaceSnap {
      const foundFaceSnap = this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if (!foundFaceSnap) {
        throw new Error('FaceSnap not found!');
      }
      return foundFaceSnap;
    }
  
    likeFaceSnapById(faceSnapId: string, snapType: SnapType): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      faceSnap.like(snapType);
    }
    
}