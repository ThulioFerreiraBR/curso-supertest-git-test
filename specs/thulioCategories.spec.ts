import config from '../config/thulioBase.config'
import controller from '../controller/thulioCategories.controller'
import { getCategoryId, login } from '../utils/thulioHelper';
// test

describe('Categories', () => {

    describe('Fetch categories', () => {
        it('GET /categories', async () => {
            const res = await controller.getCategories();
            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toBeGreaterThan(1);
            expect(Object.keys(res.body[0])).toEqual(['_id', 'name']);
        });
    });

    describe('Create categories', () => {
        let token: any;
        beforeAll(async () => {
            token = await login(config.email, config.password);
        })

        const body = {
            'name': 'Test Brand ' + Math.floor(Math.random() * 100000),
        }


        it('POST /categories', async () => {
            const res = await controller
                .postCategories(body)
                .set("Authorization", "Bearer " + token)
            expect(res.statusCode).toEqual(200);
            expect(res.body.name).toEqual(body.name);
        })
    })

    describe('Update categories by ID', () => {
        let token: any;
        let categoryId: any;

        

        beforeAll(async () => {
            token = await login(config.email, config.password);
            categoryId = await getCategoryId(token);            
        })

        afterAll(async () => {
            await controller
                .deleteCategories(categoryId)
                .set("Authorization", "Bearer " + token)
        })

        it('PUT /categories/id', async () => {
            const body = { "name": "Test Category Updated " + Math.floor(Math.random() * 10000) }
            const res = await controller
                .putCategories(categoryId, body)
                .set("Authorization", "Bearer " + token)
            expect(res.statusCode).toEqual(200);
            expect(res.body.name).toEqual(body.name);

        })
    })

    describe('Delete categories by ID', () => {
        let token: any;
        let categoryId: any;

        beforeAll(async () => {
            token = await login(config.email, config.password);
            categoryId = await getCategoryId(token);
        })

        it('DELETE categories/id', async () => {
            const res = await controller
            .deleteCategories(categoryId)
            .set("Authorization", "Bearer " + token)
        })

    })

})