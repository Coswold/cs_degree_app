module.exports = (app) => {
    // Landing Page
    app.get('/', (req, res) => {
        res.render('landing');
    });

}
