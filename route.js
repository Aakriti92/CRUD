const express = require('express');
const router = express.Router();
const user     = require('./controllers/user');

router.route(`/getuser`).get(user.getUser);
router.route(`/addUser`).post(user.addUser);
router.route(`/updateUser`).patch(user.updateUser);
router.route(`/deleteUser`).delete(user.deleteUser);
module.exports = router;