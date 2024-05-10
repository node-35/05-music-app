const { getAll, create, getOne, remove, update } = require('../controllers/album.controllers');
const express = require('express');

const albumRouter = express.Router();

albumRouter.route('/albums')
    .get(getAll)
    .post(create);

albumRouter.route('/albums/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = albumRouter;