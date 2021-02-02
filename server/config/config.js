//================================
// Puerto
//================================

process.env.PORT = process.env.PORT || 3000;

//================================
// Entorno
//================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//================================
// Vencimiento del token
//================================
//60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = '48h';

//================================
// Seed
//================================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//================================
// Base de datos
//================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


//================================
// Google Client ID
//================================

process.env.CLIENT_ID = process.env.CLIENT_ID || '193064893235-1u5fa3vm2uu3gas0n8p0n2qq1c2t9ef1.apps.googleusercontent.com';