let indexRouter = require('../routes/index');
let songsRouter = require('../routes/songs');
module.exports = function (app) {
    app.use('/api', indexRouter);
    app.use('/api/songs', songsRouter)
};
