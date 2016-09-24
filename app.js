import Koa from 'koa';
import hbs from 'koa-handlebars-pdh';

const router =  require('koa-router')();;


const app = new Koa();

app
    .use(hbs())
    .use(router.routes())
    .use(router.allowedMethods());



router.get('/test', function *(next) {
    this.body='first test';

    yield next;
});

app.listen(30010);