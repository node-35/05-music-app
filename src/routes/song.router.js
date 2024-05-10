const { getAll, create, getOne, remove, update, setSongArtists } = require('../controllers/song.controllers');
const express = require('express');

const songRouter = express.Router();

songRouter.route('/songs')
    .get(getAll)
    .post(create);

songRouter.route('/songs/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

songRouter.route('/songs/:id/artists')
    .post(setSongArtists);

module.exports = songRouter;