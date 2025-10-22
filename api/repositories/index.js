const GameRepository = require("./GameRepository");
const UserRepository = require("./UserRepository");
const WorkshopRepository = require("./WorkshopRepository")

module.exports = (db) =>
{
    const userRepository = new UserRepository(db); 

    const gameRepository = new GameRepository(db)
 
    const workshopRepository = new WorkshopRepository(db)

    return { userRepository, gameRepository, workshopRepository };
}