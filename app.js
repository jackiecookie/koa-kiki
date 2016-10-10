import Koa from 'koa';

import hbs from 'koa-kiki-handlebars'
const app = new Koa();


app.use(hbs({
    root: './app/views'
}));


const router = require('koa-kiki-router')(app, {
    root: './app/controller'
});
router.register();


app.listen(30010);