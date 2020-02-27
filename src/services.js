const models = require('./models');

class services{

    getInitiealRoute (req ,res ) {
        res.status(200).send('You have reached the server!!')
    }


    async getBooks( req, res ) {
      try{
        const books = await models.Book.find()
        res.status(200).json(books)
      }
      catch(err){
        res.status(500).json({massage: 'Server error' + err})
      }
    }

}

module.exports = new services();