const express = require('express');
const router = express.Router();
const { Create } = require('./create');
const { Read } = require('./read');
const { Find } = require('./find');
const { Delete } = require('./delete');
const { Update } = require('./update');
const { Signup } = require('./signup');
const { Login } = require('./login');
const checkAuth = require('../middleware/check-auth');

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/create', checkAuth, Create);
router.get('/read', checkAuth, Read);
router.get('/find', checkAuth, Find);
router.delete('/delete', checkAuth, Delete);
router.post('/update', checkAuth, Update);

module.exports = router ;