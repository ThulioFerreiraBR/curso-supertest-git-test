import supertest = require("supertest");
import config from '..//config/thulioBase.config';

const request = supertest(config.baseUrl)

class AdminController{
    postAdminLogin(data: { [key: string]: string }) {
        return request
            .post('/admin/login')
            .send(data)
    }
}

export default new AdminController();