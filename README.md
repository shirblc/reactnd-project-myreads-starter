# MyReads Project

## Description

MyReads is a React web application for keeping track of books you've read or you'd like to read. The app lets you search for books and add them to one of three personal shelves: Currently Reading, To Read and Read. You can also change the shelf to which a book belongs or remove it from your library completely. Enjoy having all the books on your reading list categorised in one place!

*Note: the search API is limited and only responds to specific terms. For more information, check out [this section](#Important).

## Requirements

- Node.js

## Installaton and Usage

1. Download or clone the repo.
2. cd into the project directory.
3. Run ```npm install``` to install dependencies.
4. Run ```npm start``` to start the server.

## Project Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # App styles.
    ├── App.js # App root. Contains the three currently existing paths.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── AddShelf.js # Component used for creating a new shelf.
    ├── Book.js # Book component. Contains a single book instance.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookShelf.js # A bookshelf. Contains all books that belong within the given shelf.
    ├── MyLibrary.js # Library component. Contains all of the user's bookshelves.
    ├── Search.js # Search component. Responsible for running the search and displaying results.
    ├── icons # Icons.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Index file used for DOM rendering.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Known Issues

There are no current issues at the time.
