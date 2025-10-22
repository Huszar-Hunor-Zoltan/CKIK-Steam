const { DbError } = require("../errors");

class WorkshopRepository
{
    constructor(db)
    {
        this.Workshop = db.Workshop;

        this.sequelize = db.sequelize;
    }

    async getWorkshops()
    {
        try
        {
            return await this.Workshop.findAll();
        }
        catch(error)
        {
            throw new DbError("Failed to fetch Workshops", 
            {
                details: error.message,
            });
        }
    }

    async getWorkshopByID(WorkshopID)
    {
        try
        {
            return await this.Workshop.findOne(
            {
                where:
                {
                   ID: WorkshopID
                }
            });
        }
        catch(error)
        {
            throw new DbError("Failed to fetch Workshop", 
            {
                details: error.message,
                data: WorkshopID,
            });
        }
    }

    async createWorkshop(WorkshopData)
    {
        try
        {
            return await this.Workshop.create(WorkshopData);
        }
        catch(error)
        {
            throw new DbError("Failed to create Workshop object", 
            {
               details: error.message,
               data: WorkshopData, 
            });
        }
    }

    async deleteWorkshop(WorkshopID)
    {
        try
        {
            return await this.Workshop.destroy(
            {
                where:
                {
                    ID: WorkshopId
                }
            });
        }
        catch(error)
        {
            throw new DbError("Failed to delete Workshop from database", { details: error.sqlMessage, data: { WorkshopID } });
        }
    }

    async updateWorkshop(WorkshopData, WorkshopID = WorkshopData.ID)
    {
        try
        {
            return await this.Workshop.update({ ...WorkshopData }, 
            {
                where:
                {
                    ID: WorkshopID,
                }
            })
        }
        catch(error)
        {
            throw new DbError("Failed to update Workshop", { details: error.message, data: { WorkshopData } });
        }
    }
}

module.exports = WorkshopRepository;