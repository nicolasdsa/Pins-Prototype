const jobModel = require("../models/job");
//Só copiei o tag, necessario implementar
class JobController {
  static async create(user) {
    const create = await jobModel.insert(user);
    return create;
  }

  static async getUser(email) {
    const getUser = await jobModel.getUser(email);
    return getUser;
  }
}

module.exports = JobController;
