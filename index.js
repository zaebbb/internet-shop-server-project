require('dotenv').config()
const express = require('express');
const fileUpload = require('express-fileupload')
const sequelize = require('./db.js');
const models = require('./models/models.js');
const cors = require('cors')
const router = require('./routes/index.js')
const {v4} = require('uuid')
const ErrorHandler = require('./middleware/ErrorHandingMiddleware.js')
const path = require('path')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
// Обработка ошибок, последний Middleware
app.use(ErrorHandler)



const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`запущен сервер на порте ${PORT}`));
    } catch (e) {
        console.log(e);
    }

}

start()