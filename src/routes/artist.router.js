const { getAll, create, getOne, remove, update, setArtistGenres } = require('../controllers/artist.controllers');
const express = require('express');

const artistRouter = express.Router();

artistRouter.route('/artists')
    .get(getAll)
    .post(create);

artistRouter.route('/artists/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

artistRouter.route('/artists/:id/genres')
    .post(setArtistGenres);

module.exports = artistRouter;