import { SnapType } from "./snap-type.type";

export class FaceSnap {

    location?: string;
    id: string;

    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public likes: number) {
        this.id = crypto.randomUUID().substring(0, 8);
        // console.log(this);
    }

    addLike(): void {
        this.likes++;
    }

    removeLike(): void {
        this.likes--;
    }

    like(snapType: SnapType) {
        if (snapType === "like") {
          this.addLike();
        } else if (snapType === "unlike") {
          this.removeLike();
        }
    }

    setLocation(newLocation: string): void {
        this.location = newLocation;
    }

    withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
    }
}