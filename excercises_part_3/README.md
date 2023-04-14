# Web- ja mobiiliohjelmointi excercises part 3

Turun Yliopiston Web- ja mobiiliohjelmointikurssin tehtävien "Exercises, Part 3" ratkaisut

Deployed heroku app: https://young-coast-72270.herokuapp.com/

The heroku app is running version 3.8 of the app (it doesn't communicet with the database, because I don't want to store passwords on git)

Note retarded git setup: seperate git set up inside phonebook-front/ because heroku node.js breaks if package.json is somewhere else than the root, so I can't use the same git repo for this and heroku with two different repos

Note: Several files (
phonebook-back/models/person.js
phonebook-cli/mongo.js
) communicate with a database server for which they need a password. For security reasons, this password is not stored on git. Therefore after downloading these files they need to be edited with the correct password value to work, making the versions here on git unfunctional.
