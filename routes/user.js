const {
    createUser,
    getUser
} = require('../services/user');

module.exports = (app) => {
    app.post('/signUp', async (req, res) => {
        const user = req.body
        try {
            const response = await createUser(user)
            res.json(response)
        } catch (e) {
            res.status(400).json({ token: '', mensaje: e.message })
        }
    })

    app.post('/login', async (req, res) => {
        const user = req.body;
        try {
            const reponse = await getUser(user)
            res.json(reponse)
        } catch (e) {
            res.status(400).json({ mensaje: e })
        }

    })
}