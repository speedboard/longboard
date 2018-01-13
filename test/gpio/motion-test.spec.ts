import {MotionService} from '../../src/service/motion.service';
import {expect} from 'chai';

describe('MotionService accelerate', () => {
    it('should return to full throttle', () => {
        const result = new MotionService({
            speed: 100,
        });
        // expect(result.speed).to.equal(100);
        expect(result.accelerate(10)).to.equal(result.speed + 10);
    });
});
