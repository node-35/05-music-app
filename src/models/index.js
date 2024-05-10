const Album = require('./Album');
const Artist = require('./Artist');
const Genre = require('./Genre');
const Song = require('./Song');

Artist.belongsToMany(Genre, { through: 'artists_genres' });
Genre.belongsToMany(Artist, { through: 'artists_genres' });

Artist.hasMany(Album);
Album.belongsTo(Artist);

Album.hasMany(Song);
Song.belongsTo(Album);

Artist.belongsToMany(Song, { through: 'artists_songs' });
Song.belongsToMany(Artist, { through: 'artists_songs' });
