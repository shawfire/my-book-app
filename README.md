# my-book-app

# my-book-api
[yarn global reference](https://yarnpkg.com/lang/en/docs/cli/global/)
yarn global <add/bin/ls/remove/upgrade> [--prefix]

Terminal 1:
```
502  mkdir my-book-app
503  cd my-book-app
506  git init
507  echo "# my-book-app" >> README.md
508  git add -A
509  git commit -m "first commit"
510  git remote add origin https://github.com/shawfire/my-book-app.git
511  git push -u origin master

yarn add express --save
node app.js
http://localhost:7000

yarn add nodemon --dev

brew install mongodb
brew services start mongodb

yarn add mongoose

yarn add body-parser

```

Terminal 2:
```
yarn dev
```

Terminal 3:
```
mongod
or brew services start mongodb
```

Terminal 4:
```
mongo
use bookAPI
db.books.insert({title: "War and Peace", genre: "Historical Fiction", author: "Lev Nikolayevich Tolstoy", read: false})
db.books.insert({title: "Les Misérables", genre: "Historical Fiction", author: "Victor Hugo", read: false})
db.books.insert({title: "The Time Machine", genre: "Science Fiction", author: "H. G. Wells", read: false})
db.books.insert({title: "A Journey into the Center of the Earth", genre: "Science Fiction", author: "Jules Verne", read: false})
db.books.insert({title: "The Dark World", genre: "Fantasy", author: "Henry Kuttner", read: false})

db.books.find()
db.books.find({genre:"Fantasy"})
```

# my-book-web
[Express API + React Web part 1](https://www.youtube.com/watch?v=aB3ZNoa7wYo&feature=youtu.be)
[Express API + React Web part 2](https://www.youtube.com/watch?v=oPZpqUjc6CQ&feature=youtu.be)
[React+Express App Example](https://github.com/BurntCaramel/portfolio-planner-react-express)
[Monorepos in Git](https://developer.atlassian.com/blog/2015/10/monorepos-in-git/)
[movies-express-mongodb react-b branch](https://github.com/Coder-Academy-Patterns/movies-express-mongodb)
[Express Auth MongoDB part 1](https://www.youtube.com/watch?v=0zPCLOikYAQ&feature=youtu.be)
[React Express MongoDB part 1](https://www.youtube.com/watch?v=67BFclcwm-A&feature=youtu.be)
[React Express MongoDB part 2](https://www.youtube.com/watch?v=7kCRoJwAo3I&feature=youtu.be)

```
cd ~/my-book-app
yarn create react-app react-web
cd !$
yarn start
http://localhost:3000
Ctrl-Alt-J
  Fetch API cannot load http://localhost:3000/api/books. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:7000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
Refer to create react-app README and Add proxy in package.json to api port and
access the api from the web project as if it was local.
```

