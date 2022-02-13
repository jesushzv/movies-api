var router = require('express').Router();
var Movie = require('./movies.model')

//Get all movies
router.get('/', async (req,res)=>{
    const movies = await Movie.findAll();
    res.send(movies);
} )

// Create a new movie
router.post('/', async (req,res)=>{
    const movie = await Movie.create({
        name: req.body.name,
        release_year: req.body.release_year,
        genre: req.body.genre,
        picture: req.body.picture

    });

    res.send(movie);
})

// Update a movie
router.put('/', async (req,res)=>{

    Movie.update({
        name: req.body.name,
        release_year: req.body.release_year,
        genre: req.body.genre,
        picture: req.body.picture
    },
    {
        where: {
            id: req.body.id
        },
        returning: true,
        plain: true
    }).then(function(result) {
        res.send(result[1].dataValues);
    })
    })
    
// Delete a movie
router.delete('/delete/:id', async (req,res)=>{
    const movie = await Movie.findByPk(req.params.id);

    if(!movie){
        res.status(404).send("Movie not found");
    }
    else{
        Movie.destroy({
            where: {
                id: req.params.id
            }
        }).then(()=>{
            res.send(`Movie ${movie.name} deleted, with id ${movie.id}`);
        })
    }

})

//Find a movie by id
router.get('/:id', async (req,res)=>{
    const movie = await Movie.findByPk(req.params.id);
    res.send(movie);
})

//Find movies by year
router.get('/year/:year', async (req,res)=>{
    const movie = await Movie.findAll({
        where: {
            release_year: req.params.year
        }
    });
    res.send(movie);
})

//Find movies by genre
router.get('/genre/:genre', async (req,res)=>{
    const movie = await Movie.findAll({
        where: {
            genre: req.params.genre
        }
    });
    res.send(movie);
} )


module.exports = router;