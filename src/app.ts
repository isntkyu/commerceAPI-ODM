import express, { Express } from "express"; 
import * as bodyParser from 'body-parser';
import routes from './routes';
import connectDB from "./Loaders/db";
import generalErrorHandler from "./errors/generalErrorHandler";
const app : Express = express(); 
import 'dotenv/config';

// Connect Database
connectDB();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes);
app.use(generalErrorHandler);
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app 
  .listen(process.env.PORT || 3000, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${process.env.PORT || 3000} 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });