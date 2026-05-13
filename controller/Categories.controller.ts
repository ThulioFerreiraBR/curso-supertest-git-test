import supertest = require("supertest");
import config from '../config/Base.config';

const request = supertest(config.baseUrl)

class CategoriesController {
    getCategories() {
        return request.get('/categories');
    }

    getCategoriesById(id: string) {
        return request.get('/categories/' + id)
    }

    postCategories(data: { [key: string]: string | number }) {
        return request
            .post('/categories')
            .send(data)
    }

    putCategories(id: string | number, data: { [key: string]: string | number }) {
        return request
            .put('/categories/' + id)
            .send(data)
    }

    deleteCategories(id: string | number) {
        return request
            .delete('/categories/' + id)
    }
}

export default new CategoriesController();