import controller from '../controller/Brand.controller';

describe('Brands', () => {

    describe('Fetch brands', () => {
        it('GET /brands', async () => {
            const res = await controller.getBrands();
            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toBeGreaterThan(1);
            expect(Object.keys(res.body[0])).toEqual(['_id', 'name']);
        });
    });

    describe('Create & Fetch Brands', () => {
        let postBrand: any;
        const data = {
            'name': 'Test Brand ' + Math.floor(Math.random() * 100000),
            'description': 'Test Brand Description'
        }
        beforeAll(async () => {
            postBrand = await controller.postBrands(data);
        })

        afterAll(async () => {
            await controller.deleteBrand(postBrand.body._id);
        })

        it('POST /brands', async () => {
            expect(postBrand.statusCode).toEqual(200);
            expect(postBrand.body.name).toEqual(data.name);
            expect(postBrand.body.description).toEqual(data.description);
            expect(postBrand.body).toHaveProperty("createdAt");
        })

        it('GET /brands/{id}', async () => {
            const res = await controller.getBrandById(postBrand.body._id);
            expect(res.statusCode).toEqual(200);
            expect(res.body.name).toEqual(postBrand.body.name);

        })
    })

    describe('Update Brands Id', () => {
        let postBrand: any;
        const data = {
            'name': 'Test Brand ' + Math.floor(Math.random() * 100000),
            'description': 'Test Brand Description'
        }
        beforeAll(async () => {
            postBrand = await controller.postBrands(data);
        })

        afterAll(async () => {
            await controller.deleteBrand(postBrand.body._id)
        })

        it('PUT /brands', async () => {
            const data = {
                'name': postBrand.body.name + ' Updated',
                'description': 'Updated Description'
            }

            const res = await controller.putBrands(postBrand.body._id, data);
            expect(res.statusCode).toEqual(200);
            expect(res.body.name).toEqual(data.name);
            expect(res.body.description).toEqual(data.description);
        })

        it('Schema Verification - Max char length for name = 30', async () => {
            const data = {
                'name': 'This is a really long name to test max lenght',
                'description': 'Test Brand Description'
            }
            const res = await controller.putBrands(postBrand.body._id, data);
            expect(res.statusCode).toEqual(422)
            expect(res.body.error).toEqual('Brand name is too long');
        })

        it('Schema Verification - Brand description should be a string', async () => {
            const data = {
                'name': postBrand.body.name + 'Updated',
                'description': 'Test Brand Description'
            }
            const res = await controller.putBrands(postBrand.body._id, data);
            expect(res.statusCode).toEqual(200);
            expect(typeof res.body.description).toBe('string');
        });

        it('Schema Verification - Brand description should be a string', async () => {
            const data = {
                'name': postBrand.name + 'Updated',
                'description': 222
            }
            const res = await controller.putBrands(postBrand.body._id, data);
            expect(res.statusCode).toEqual(422);
            expect(res.body.error).toEqual('Brand description must be a string');
        });

        it('Business Logic - PUT /brand/invalid_id should throw 404', async () => {
            const data = {
                'name': postBrand.name + 'Updated',
                'description': 'Test Brand Description'
            }
            const res = await controller.putBrands('12348f0500b2931578c0a5ac', data);
            expect(res.statusCode).toEqual(404);
            expect(res.body.error).toContain('Brand not found.')
        })

        it('Business Logic - PUT /brand/invalid_id should throw 404', async () => {
            const data = {
                'name': postBrand.name + 'Updated',
                'description': 'Test Brand Description'
            }
            const res = await controller.putBrands(123, data)
            expect(res.statusCode).toEqual(422);
            expect(res.body.error).toContain('Unable to update brand')
        })

    })

    describe('Delete Brands Id', () => {
        let postBrand: any;
        const data = {
            'name': 'Test Brand ' + Math.floor(Math.random() * 100000),
            'description': 'Test Brand Description'
        }
        beforeAll(async () => {
            postBrand = await controller.postBrands(data)
        })

        it('DELETE /brands', async () => {
            const res = await controller.deleteBrand(postBrand.body._id)
            expect(res.statusCode).toEqual(200);
        })

        it('Business Logic - DELETE /brand/invalid_id should throw 404', async () => {
            const res = await controller.deleteBrand(postBrand.body._id)
            expect(res.statusCode).toEqual(404);
            expect(res.body.error).toContain('Brand not found.')
        })

        it('Business Logic - DELETE /brand/invalid_id should throw 404', async () => {
            const res = await controller.deleteBrand(123)
            expect(res.statusCode).toEqual(422);
            expect(res.body.error).toContain('Unable to delete brand')
        })

    })

})



