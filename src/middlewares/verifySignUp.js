import {ROLES} from '../models/rol.js';

export const checkRolesExisted = (req,res,next)=>{
    const roles = req.body.roles;
    if(roles){
        for(let i = 0; i<roles.length;i++ ){
            if(!ROLES.includes(roles[i])){
                return res.status(400).json({
                    // msg: "Role {roles[i].name no existe}"
                    msg: "Rol no existe}"
                })
            }
        }
    }
    next();
}