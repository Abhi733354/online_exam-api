// const express = require('express');
// const {response} = require('express');

// const router = express.Router();

// const db = require('../db');

// //http://localhost:4000/users/allusers
// router.get('/allusers', async(req, res) => {
//     try{
//         const response = await db.promise().query('SELECT * FROM users');
//         // console.log(response[0]);
//         request.send(response[0]);
        
//         res.status(200).json(response[0]);
//     }
//     catch(err){
//         res.status(400).json(err);
//     }
// })
 

// module.exports = router;