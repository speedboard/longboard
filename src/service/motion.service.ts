import {isNullOrUndefined} from 'util';

export interface IMotionService {

    speed: number;

    accelerate(speed: number): number;

    decelerate(speed: number): number;

}

export class MotionService implements IMotionService {

    speed: number;

    constructor(service?: Partial<MotionService>) {
        if (!isNullOrUndefined(service)) {
            Object.assign(this, service);
        }
    }

    accelerate(speed: number): number {
        return this.speed + speed;
    }

    decelerate(speed: number): number {
        return this.speed - speed;
    }

}
