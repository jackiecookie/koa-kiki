import Koa from 'koa';

const hbs = require('koa-kiki-handlebars');

const app = new Koa();

const router = require('koa-kiki-router')(app, {
    root: './app/controller'
});
router.register();

app
    .use(hbs({
        root: './app/views'
    }));

app.listen(30010);