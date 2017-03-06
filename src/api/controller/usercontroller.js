import 'isomorphic-fetch';
let userController = {
  fetchPhpUsers: (req, res) => {
    fetch(`https://api.github.com/search/users?q=language:php+location:nairobi`)
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json({
        message: 'Fetched users',
        data
      });
    }).catch((err) => {
      res.status(500).json({
        message: err.errmessage
      });
    });
  }
};

export default userController;