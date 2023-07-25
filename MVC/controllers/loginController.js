const jwt = require('jsonwebtoken');

const secret = 'mysecretkey';

module.exports = {
    login: function (req, res) {
      const user = { id: 1, username: 'john.doe You are protected' };
  
      // generate JWT
      const token = jwt.sign({ user }, secret, { expiresIn: '1h' });
    
      res.json({ token });
    },
    
    protected: function (req, res) {
      res.send(`Hello ${req.user.user.username}!`);
    }


  };

