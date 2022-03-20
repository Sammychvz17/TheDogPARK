const { User } = require('../models');

const userController = {
    //get all users
    getAllUser(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err); 
            res.status(400).json(err);
        });
    },
    // get specific User
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        then(dbUserData => {
            // If no User is found, send 404
            if (!dbUserData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      },
      // create new user object
      createUser({ body }, res) {
        User.create(body)
            //submitting data
          .then(dbUserData => res.json(dbUserData))
            //catching errors 
          .catch(err => res.status(400).json(err));
      },
      
      //update User Info with ID
      updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
          .then(dbUserData => {
            //If no ID   
            if (!dbUserData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.status(400).json(err));
      },

      //deletes user 
      deleteUser({ params }, res) {
          //find one and delete 
        User.findOneAndDelete({ _id: params.id })
          .then(dbUserData => {
            // if no ID send 404 message 
            if (!dbUserData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            //the response of the function 
            res.json(dbUserData);
          })
          //This will 'catch' all other errors and show 404 
          .catch(err => res.status(400).json(err));
      }

};

module.exports = userController;