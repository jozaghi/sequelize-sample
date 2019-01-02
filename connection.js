const Sequelize=require("sequelize");
const Model=require("./model");

const databaseInitiated=false;

const connection =  new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const models=Model(connection);

const connect= async (force=false)=>{
    if(!databaseInitiated){
        await connection.sync({
            logging:console.log,
            force
        });
    }
    return models;
}

module.exports.connect=connect;
