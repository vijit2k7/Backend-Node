const express = require('express')
const app = express()

app.use(loggingMiddleware);

app.get('/', (req, res) => {
  console.log('Home page called');
  res.send('Home Page')
});


app.get('/users',authorizeUsersAccess,(req, res) => {
    console.log('Welcome',req.name);
  res.send('Users Page');
});




function loggingMiddleware(req, res, next) {
  console.log('logging')
  next();
  console.log('after next logging');
}

function authorizeUsersAccess(req, res, next) {
  console.log('authorizeUsersAccess Middleware',req.query);
  if(req.query.admin=='true')
    {
        req.name='Vijit';
        next();
        return
    }
    res.send('403 Forbidden Error!Unable to Authorise');
}

app.listen(3000, () => console.log('Server Started'))

// req--->loggingMiddleware----> controller--->res