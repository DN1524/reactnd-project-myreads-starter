# FEND Project-6: MyReads
The goal of this project to use React to make make an app that dynamically changes with user's actions and inputs. A user should be able to move books in the main page from shelf to shelf or remove them with the little drop down menu that comes with each book. Also, they should be able to add new books in the search page, by typing in the search box and receive book results based on what they type. Unfortunately not all books can be found with the search (See Important).

## Installation

To download and install this project, you can either clone this repo through a command console such as git bash or PowerShell or you can just download the zipped folder straight from this GitHub repo.

To get started:

* install all project dependencies with `npm install`
* start the server with `npm start`

## Backend Server

A backend server if provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

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

## Acknowledgments

# This project was completed with the help of:

- Ryan Waite's walkthrough on YouTube: https://www.youtube.com/watch?v=acJHkd6K5kI&t=2550s

- Manorisms' YouTube video on debouncing: https://www.youtube.com/watch?v=KXao_qwl05k

- techsith's YouTube video on PureComponents: https://www.youtube.com/watch?v=PXXjkq4A-OU

# This project uses:

- React
- Debouncing from Lodash

## License

This code is available for anyone to look at and tinker with and should be given credit if anyone decides to use it.
