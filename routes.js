const express = require('express')
const router = express.Router();
const {connectDB} = require('./db.js')
const Artist = require('./schema.js')

router.get('/',async (req , res) => {
    try{
        const Artists = await Artist.find()
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

connectDB()

module.exports = router