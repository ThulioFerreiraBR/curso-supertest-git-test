import config from '../config/thulioBase.config'
import controller from '../controller/thulioCategories.controller'

describe('Categories', () => {

    describe('Test Fail', () => {
        it('GET /categories', async () => {
            const res = await controller.getCategories();
            expect(res.statusCode).toEqual(200);
        });
    });

    describe('Fetch categories', () => {
            it('GET /categories', async () => {
                const res = await controller.getCategories();
                expect(res.statusCode).toEqual(200);
                expect(res.body.length).toBeGreaterThan(1);
                expect(Object.keys(res.body[0])).toEqual(['_id', 'name']);
            });
        });

})