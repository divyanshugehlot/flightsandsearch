const { where } = require("sequelize");
const{ City} = require("../models/index")

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name})
            return city
        }
        catch (error){
            throw {error};
        }
    }

    async deleteCity({cityId}){
        try{
                await City.destroy({
                    where:{
                        id:cityId
                    }
                });
        }catch(error){
            throw{error};
        }
    }
    async updateCity(cityId,data){
        try{
                await City.update(data,{
                    where:{
                        id:cityId
                    }
                });
        }catch(error){
            throw{error};
        }
    }
    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
        }catch(error){
            throw{error};
        }
    }
}

module.exports = CityRepository;