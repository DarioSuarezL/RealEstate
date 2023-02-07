import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path: ".env"}) //Le avisamos que la direccion de nuestras env está en .env (valga la redundancia)

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mssql',
    port: 1433,
    define:{
        timestamp: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliasses: false
});

export default db;