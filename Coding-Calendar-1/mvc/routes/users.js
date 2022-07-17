var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/user');
const middleware = require('./middleware');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



// Clist
// router.get('/fetch',usersCtrl.clist);

// Calendar
router.get('/calendar', usersCtrl.addCalendar);

// Login Page
router.get('/login', (req, res) => {
  res.render('login');
})

// After login
router.post('/login', usersCtrl.auth);


// Logout
router.get('/logout', (req, res) => {
  res.clearCookie('session-token');
  res.redirect('/users/login')
})

// router.get('/delete',usersCtrl.deleteAllUsers);
// router.get('/deleteContest',usersCtrl.deleteAllContest);

// Dashboard
router.get('/dashboard', middleware.checkAuthenticated, (req, res) => {
  let user = req.user;
  res.render('dashboard', { user });
})

module.exports = router;
