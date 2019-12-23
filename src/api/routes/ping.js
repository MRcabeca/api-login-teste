module.exports = (app) => {
    app.get('/api/ping', (req, res) => {
        res.status(200).send({ Data: new Date(), message: 'Api de login online' });
    });
}