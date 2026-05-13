import supertest = require("supertest");
import config from '../config/Base.config'

const request = supertest(config.baseUrl);

class UploadController {
  postUploadSingle(filepath: string) {
    return request
      .post('/upload/single')
      .attach('single', filepath)
  }

  postUploadMultiple(files: string[]) {
    const req = request
      .post('/upload/multiple')

    files.forEach(file => {
      req
        .attach('multiple', file)
    })

    return req;
  }

}

export default new UploadController();