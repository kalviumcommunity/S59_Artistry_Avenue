const express = require('express')
const router = express.Router();
const {connectDB} = require('./db.js')
const Artist = require('./Schemas/schema.js')
const userData = require('./Schemas/ProductSchema.js')
const user = require('./Schemas/UserSchema.js')
const Joi = require('joi');

const userDataSchema = Joi.object({
    name_of_the_artist: Joi.string().required(),
    art_category: Joi.string().required(),
    age: Joi.number(),
    net_worth: Joi.string(),
    famous_art: Joi.string(),
    country: Joi.string().required(),
    artSrc: Joi.string().required()
})

const checkValidation = (input, schema) => {
    const { error } = schema.validate(input)
    if (error) {
        return false
    }
    else {
        return true
    }
}


//for artist model
router.get('/',async (req , res) => {
    try{
        const Artists = await Artist.find()
        res.json(Artists)
    }catch (err){
        res.json({error : err})
    }
})

router.get('/user-artists',async (req , res) => {
    try{
        const Artists = await userData.find()
        res.json(Artists)
    }catch (err){
        res.json({error : err})
    }
})


router.get('/:id' , async (req, res)=>{
    try{
        const ArtistFound = await Artist.findById(req.params.id)
        res.json(ArtistFound)
    }
    catch(err){
        res.json({error : err})
    }
})

router.post('/add-artist', async (req , res)=>{
    const newArtist = new Artist(req.body)
    try{
        const saveArtists = await newArtist.save()
        res.json(saveArtists)
    }
    catch (err){
        res.json({error : err})
    }
})

router.post('/new-item', async (req , res)=>{
    const newArtist = new userData(req.body)
    try{
        const saveArtists = await newArtist.save()
        res.json(saveArtists)
    }
    catch (err){
        res.json({error : err})
    }
})

router.patch('/:id' , async (req,res)=>{
    try{
        const ArtistFound = await Artist.findByIdAndUpdate(req.params.id, req.body , {new : true});
        if(!ArtistFound){
            return res.status(404).json({error : "Artist not found "})
        }
        res.json(ArtistFound);
    }catch (err){
        res.status(500).send('Error: '+ err)
    }
})

router.delete('/:id' , async (req , res)=>{
    try{
        const ArtistFound = await Artist.findByIdAndDelete(req.params.id , req.body , {new : true});
        if(!ArtistFound){
            return res.status(404).json({error : "Artist not found "})
        }
        res.json('Artist deleted');
    }catch (err){
        res.status(500).send('Error:' +err)
    }
})


//for userData model
router.get('/custom-artist',async (req , res) => {
    try{
        const users_data = await userData.find()
        res.json(users_data)
    }catch (err){
        res.json({error : err})
    }
})


router.get('/custom-artist/:id' , async (req, res)=>{
    try{
        const userDataFound = await userData.findById(req.params.id)
        res.json(userDataFound)
    }
    catch(err){
        res.json({error : err})
    }
})

router.post('/custom-artist-add', async (req , res)=>{
    const isValid = checkValidation(req.body, userDataSchema);
    if (!isValid) {
        return res.status(400).json({ error: 'Invalid input data' });
    }

    const newUserData = new userData(req.body)
    try{
        const saveUserData = await newUserData.save()
        res.json(saveUserData)
    }
    catch (err){
        res.json({error : err})
    }
})

router.patch('/custom-artist/:id' , async (req,res)=>{
    try{
        const userDataFound = await userData.findByIdAndUpdate(req.params.id, req.body , {new : true});
        if(!userDataFound){
            return res.status(404).json({error : "User Data not found "})
        }
        res.json(userDataFound);
    }catch (err){
        res.status(500).send('Error: '+ err)
    }
})

router.delete('/custom-artist/:id' , async (req , res)=>{
    try{
        const userDataFound = await userData.findByIdAndDelete(req.params.id , req.body , {new : true});
        if(!userDataFound){
            return res.status(404).json({error : "User Data not found "})
        }
        res.json(`User's Data deleted`);
    }catch (err){
        res.status(500).send('Error:' +err)
    }
})

// for user signup
router.post('/sign-user', async (req, res) => {
    const { email, username, password } = req.body;

    const existingArtist = await user.findOne({ $or: [{ email }, { username }] });
    if (existingArtist) {
        return res.status(400).json({ error: 'Username or email already exists' });
    }

    const newArtist = new user(req.body);
    try {
        const savedArtist = await newArtist.save();
        res.json(savedArtist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// for user login
router.post('/login-user', async (req, res) => {
    const { username, email, password } = req.body;

    const existingUser = await user.findOne({ $or: [{ email }, { username }] });
    if (!existingUser) {
        return res.status(400).json({ error: 'Invalid username or email' });
    }

    const isPasswordValid = password == existingUser.password;
    if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid password' });
    }

    res.json({ message: 'Login successful', user: existingUser , username: username });
});

connectDB()

module.exports = router