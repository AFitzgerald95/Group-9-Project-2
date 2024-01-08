const router = require('express').Router();
const { User } = require('../../models');

router.post('/newuser', async (req, res) => {
    try { 
        const userData = await User.create({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        });
        await req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'User created and logged in successfully'});
            console.log("hello")
            console.log(req.session)
        })
        console.log("BACKHELLO")
    } catch (err) {
        res.status(500).json(err)
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
        console.log('testtest')
    }
    // finally {
    //     res.redirect("/profile")
    // }
});

module.exports = router