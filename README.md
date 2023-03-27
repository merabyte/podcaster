
# Podcaster App

This project is a small SPA that shows information of the 100 most popular podcasts on iTunes and it brings to you the chance to listen to any of them.

It uses the [iTunes Search API](https://performance-partners.apple.com/search-api) to get all the information of artists, collections and tracks.

If you want to take a look at how it works without having to install it, the repo is sync with Netlify, so you can see the last version through this [link](https://velvety-otter-85aca1.netlify.app/).


### Tech stack

The project has been developed with the following technology:
- [ReactJS](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [NPM](https://www.npmjs.com)


### Install and run

To download and install dependencies in your local machine you have to do:
```
$ git clone https://github.com/merabyte/podcaster.git
$ cd podcaster
$ npm i
```

In the project directory, you can run the app in **development** mode doing:
```
npm run dev
```

Also you can build the app in **production** mode typing:
```
npm run build
```
> In production mode, the whole code will be minified and deployed in a new folder inside the root folder named `dist`.


### Testing
To run the components unit testing, please do:
```
npm run test
```

If you want to check the component testing coverage, you have to type:
```
npm run coverage
```

The **end-to-end** testing has been made using [Cypress](https://www.cypress.io/).
You can run it with this command:
```
npm run cy:e2e
```

Enjoy!
