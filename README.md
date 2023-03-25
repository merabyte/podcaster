
# Podcaster App

This project is a small SPA that shows information and it brings to you the chance to listen to any of the 100 most popular podcasts on iTunes.

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

The command to run the app in **development** mode is:
```
npm run dev
```

If you want to build the app in **production** mode is:
```
npm run build
```
> The whole production code will be deployed in a new folder inside the root folder named `dist`.


### Test
For run the unit testing made for components, please run:
```
npm run test
```

If you want to check the test coverage, you have to type:
```
npm run coverage
```

Enjoy!
