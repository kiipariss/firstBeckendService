import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';
import router from './Router.js';
import fileUpload from 'express-fileupload';

mongoose.set('strictQuery', true);

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.tq4clr4.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log('server to work ' + PORT))

    } catch (e) {
        console.log(e)
    }
}
startApp()