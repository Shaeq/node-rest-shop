 const express = require('express');
 const router = express.Router();

 router.get('/',(req, res, next) => {
     res.status(200).json({
         message: 'Handling GET requests to /products'
     });
 });

 router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling post requests to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    console.log(id);
    if (id === "spacal") {
      res.status(200).json({
         message: 'You disscovered the specal ID',
         id: id
     });
    }
    else 
    {
        res.status(200),json ({
            message: 'you passed an ID'
        });
    }

});

module.exports = router;