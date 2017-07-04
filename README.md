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

cd react-web
yarn start
```

Terminal 2:
```
cd my-book-api/
yarn dev
```

Terminal 3:
```
cd my-book-api/
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

Terminal 5:
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

## References:
* [Express API + React Web part 1](https://www.youtube.com/watch?v=aB3ZNoa7wYo&feature=youtu.be)
* [Express API + React Web part 2](https://www.youtube.com/watch?v=oPZpqUjc6CQ&feature=youtu.be)
* [React+Express App Example](https://github.com/BurntCaramel/portfolio-planner-react-express)
* [Monorepos in Git](https://developer.atlassian.com/blog/2015/10/monorepos-in-git/)
  * [movies-express-mongodb react-b branch](https://github.com/Coder-Academy-Patterns/movies-express-mongodb)
* [Express Auth MongoDB part 1](https://www.youtube.com/watch?v=0zPCLOikYAQ&feature=youtu.be)
  * [movies-express-mongodb auth2 branch](https://github.com/Coder-Academy-Patterns/movies-express-mongodb/tree/auth2)
* [React Express Require Authorization part 2 — Roles](https://www.youtube.com/watch?v=7mYr4lnZKuQ&feature=youtu.be)
* [React Express MongoDB part 1](https://www.youtube.com/watch?v=67BFclcwm-A&feature=youtu.be)

* [React Express MongoDB part 2](https://www.youtube.com/watch?v=7kCRoJwAo3I&feature=youtu.be)
* [fetchJSON helper](https://github.com/Coder-Academy-Patterns/movies-express-mongodb/blob/react-auth/react-web/src/api/fetchJSON.js)
* [fetchJSON usage](https://github.com/Coder-Academy-Patterns/movies-express-mongodb/blob/react-auth/react-web/src/api/movies.js)


* [React & NodeJS](https://coder-academy.thinkific.com/courses/react-node-js)
* [Express API JWT + React part 1](https://www.youtube.com/watch?v=kNHVkDUzYfg&feature=youtu.be)
* [Refactor using axios instead of fetch](https://github.com/mzabriskie/axios)
* [React.js Forms: Controlled Components](http://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/)
* [Moz Page Speed guide:](https://moz.com/learn/seo/page-speed)
* [ImageOptim — better Save for Web](https://imageoptim.com/mac)
* [Deploy Node API and React App to Now](https://www.youtube.com/watch?v=GsjloDH8H3M&feature=youtu.be)
* [Introduction to ARIA - Google Accessibility](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)

* [React Accessibility](https://facebook.github.io/react/docs/accessibility.html)
* [React Router 4](https://www.youtube.com/watch?v=jPRWOKZltFc&feature=youtu.be)

* [React Todo List](https://www.youtube.com/watch?v=v51sBEvBaV0&feature=youtu.be)

* [React Express Require Authorization part 1 - from react-router branch to roles](https://www.youtube.com/watch?v=CBY1Irxx7dw&feature=youtu.be)

## Notes:
updatePromises = ...map()
Promise.all(updatePromises)
now
now alias ... cafe-up-again


