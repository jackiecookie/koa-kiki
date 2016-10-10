import {method, action, parameters} from 'koa-kiki-router/decorators/decorator'

class Index {
    @action('/')
    async root(ctx, next) {
        ctx.body = await ctx.render('Home/root.hbs',{
            title:'home/root',
            body:'test'
        });
        await next();
    }

    @method('get')
    @parameters(':id')
    async parameter(ctx, next) {
        ctx.body = ctx.params.id;
        await next();
    }

}

module.exports.controler = Index;
