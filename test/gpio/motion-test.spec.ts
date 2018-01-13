import {MotionService} from '../../src/service/motion.service';
import {expect} from 'chai';

describe('MotionService accelerate/deceleration', () => {
    it('acceleration test at 10km', () => {
        const result = new MotionService({
            speed: 100,
        });
        expect(result.speed).to.equal(100);
        expect(result.accelerate(10)).to.equal(result.speed + 10);
    });
    it('10km deceleration test', () => {
        const result = new MotionService({
            speed: 110,
        });
        expect(result.speed).to.equal(110);
        expect(result.decelerate(10)).to.equal(result.speed - 10);
    });
});
