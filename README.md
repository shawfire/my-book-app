# my-book-app

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
http://localhost:3000

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
```
