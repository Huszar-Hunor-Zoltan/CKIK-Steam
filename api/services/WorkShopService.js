const { BadRequestError, NotFoundError } = require("../errors");

class WorkshopService {
  constructor(db) {
    this.workshopRepository = require("../repositories")(db).workshopRepository;
  }

  async createWorkshop(workshopData) {
    if (!workshopData)
      throw new BadRequestError("Missing workshop data from payload", {
        data: workshopData,
      });
    return await this.workshopRepository.createWorkshop(workshopData);
  }
}

module.exports = WorkshopService;
