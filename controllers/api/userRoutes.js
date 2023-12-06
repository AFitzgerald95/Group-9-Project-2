const router = require('express').Router();
const { User } = require('../../models');

router.post('/login',async(req,res) => {
    try{
        const userData = await User.findOne({where: {email:req.body.email}})
    if(!userData){
        res.status(400).json({message:'Email or password is incorrect'})
        return;
    }
    const isValid = await userData.checkPassword(req.body.password)
    if(!isValid){
        res.status(400).json({message:'Email or password is incorrect'})
        return;
    }
    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({user:userData,message:'thank you for logging in'})
    })    
} //end Try
    catch(err){
        res.status(400).json(err);
        if(err){
            alert(err)
        }

    }//End Catch
});//End Router.Post

router.post('/logout',(req,res) => {
    if(req.session.logged_in){
        req.session.destroy(() =>{ 
            res.status(204).end()
            alert(204 + 'Session ended')
        });
     } else{
            res.status(404).end();
            console.log(res.status(404))
            alert(404 + 'Sesson ended')
        }
    }
)
module.exports = router;