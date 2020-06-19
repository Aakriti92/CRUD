
const express = require( 'express');
const dotenv = require( 'dotenv');
const routes = require( './route');
const responseCode = require( "./common/response_code");
dotenv.config();

const app = express();
const port = parseInt(process.env.PORT) || 8081;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes); 

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
  res.status(err.status || 404);
  //res.render('error');
  responseCode.customResponse(res, 404, err);
});

// START THE SERVER
// ==============================================
app.listen(port, '0.0.0.0', (err) => {
  if (err) throw err;
  console.log(`Noode app listening at port ${port}`);
});
