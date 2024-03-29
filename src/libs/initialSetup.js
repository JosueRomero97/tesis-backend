import Role from '../models/rol.js';

export const createRoles = async ()=>{
    try {
        const count = await Role.estimatedDocumentCount();
        if (count>0) return;

        const values = await Promise.all([
            new Role({name: "Admin"}).save(),
            new Role({name: "Investigador"}).save(),
            new Role({name: "Estudiante"}).save(),
        ]);

        console.log(values);
        
    } catch (error) {
        console.log(error);
    }
}