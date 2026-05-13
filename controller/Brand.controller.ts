import supertest = require("supertest");
import config from '../config/Base.config';

const request = supertest(config.baseUrl)

class BrandController {
    getBrands() {
        return request.get('/brands');
    }

    getBrandById(id: string) {
        return request.get('/brands/' + id)
    }

    postBrands(data: { [key: string]: string | number }) {
        return request
            .post('/brands')
            .send(data)
    }

    putBrands(id: string | number, data: { [key: string]: string | number }) {
        return request
            .put('/brands/' + id)
            .send(data)
    }

    deleteBrand(id: string | number) {
        return request
            .delete('/brands/' + id)
    }
}

export default new BrandController();