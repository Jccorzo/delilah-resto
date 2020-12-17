const {
    createUser,
    getUser
} = require('../services/user');

module.exports = (app) => {
    app.post('/signup', (req, res) => {
        const user = req.body
        res.json(createUser(user))
    })

    app.post('/login', (req, res) => {
        const user = req.body;
        res.json(getUser(user))
    })
}