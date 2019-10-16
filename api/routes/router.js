const Users = require("../../data/users/user-model");
const bcrypt = require("bcryptjs");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  //   server.get("api/users", getUsers);
};

function register(req, res) {
  console.log(req.body);
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  Users.add(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: `Check register function router.js`,
        error: `${error}`
      });
    });
}

function login(req, res) {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
          message: `Welcome ${user.username}`,
          user
        });
      } else {
          res.status(401).json({ message: `You shall not pass!` });
      }
    })
    .catch(error => {
      res.status(500).json(error)
    });
}


