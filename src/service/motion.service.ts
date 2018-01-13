import {isNullOrUndefined} from 'util';

export interface IMotionService {

    speed: number;

    accelerate(speed: number): number;

    decelerate(speed: number): number;

}

export class MotionService implements IMotionService {

    private _speed: number;

    constructor(service?: Partial<MotionService>) {
        if (!isNullOrUndefined(service)) {
            Object.assign(this, service);
        }
    }

    accelerate(speed: number): number {
        return this._speed + speed;
    }

    decelerate(speed: number): number {
        return this._speed - speed;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

}
