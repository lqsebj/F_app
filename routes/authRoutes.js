const passport = require('passport')


module.exports = (app) => {
    // Route to trigger Google OAuth
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email'],
        })
    );

    // Callback route for Google to redirect to
    app.get('/auth/google/callback', passport.authenticate('google'))

    app.get('/api/logout', (req, res) => {
        req.logout((err) => {
            if(err) {
                return res.status(500).send({ error: 'logout failed' })
            }
            res.send({ message: 'logged out successfully', user: req.user })
        })
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
}