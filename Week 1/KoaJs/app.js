const Koa = require("koa");
const koaRouter = require("koa-router");

const app = new Koa();
const router = new koaRouter();

const funct = app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`
  Adres: ${ctx.url}
  Method: ${ctx.method}
  Total Time: ${ms}ms
  `);
});

router.get("home", "/", (context) => {
  context.body = "Welcome to my Koa.js Server"; funct;
});

router.get("about", "/about", (context) => {
    context.body = "Welcome to my about page"; funct;
  });

  router.get("contact", "/contact", (context) => {
    context.body = "Welcome to my contact page"; funct;
  });

  router.get("blank", "/(.*)", (context) => {
    context.body = "404 Not Found"; funct;
  });

app.use(router.routes()).use(router.allowedMethods());

const port = 3000;
app.listen(port, function () {
    console.log(`Our server is working on ${port}`)
})
