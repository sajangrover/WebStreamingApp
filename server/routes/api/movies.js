const express = require('express');
const router = express.Router();
const movies = require('./../../models/Movies');

router.get("/", (req,res)=>{
    console.log("hi")
    movies.find()
    .then(result => {
        console.log(result)
        res.status(200).json({
            movies : result.map(movie => {
                return {
                    _id: movie._id,
                    name: movie.name,
                    link: movie.link,
                    ontime: movie.ontime
                }
            })
        })
    })
    .catch(err =>{
        res.status(500).json({error :err})
    })
})

module.exports = router;
