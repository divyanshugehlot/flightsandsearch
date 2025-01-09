const { response } = require("express");
const {CityService} = require("../services/index")

const cityService = new CityService();
// Post -> /city-> req.body
const create = async(req,res)=>{
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            err:{}
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            err:error
        })
    }
}
// Delete -> /city/:id -> req.body
const destroy = async(req,res)=>{
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted a city",
            err:{}
        })

    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete the city",
            err:error
        })
    }
}
// get -> /city/:id -> req.body
const get = async(req,res)=>{
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched a city",
            err:{}
        })
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch the city",
            err:error
        })
    }
}
// Patch -> /city/:id -> req.body
const update = async(req,res)=>{
    try{
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully updated a city",
            err:{}
        })
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            err:error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}