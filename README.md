# fcc_url_shortener
This is another FCC project that develops an API. I used [node v4.2.3](https://nodejs.org/en/), [Express 4](http://expressjs.com/) with a project I scaffold myself using [gulp.js](http://gulpjs.com/). 

The API itself is super straightforward. The user stories are:

1. User Story: I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.

1. User Story: If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

1. User Story: When I visit that shortened URL, it will redirect me to my original link.

I implemented integration tests using [supertest](https://github.com/visionmedia/supertest), [should](https://shouldjs.github.io/) and [gulp-mocha](https://github.com/sindresorhus/gulp-mocha)hero. I deployed the API to [heroku](https://www.heroku.com/) which is still ridiculously easy. 

posgressql

* The source code for this application is at [https://github.com/ricmclaughlin/fcc_url_shortener](https://github.com/ricmclaughlin/fcc_url_shortener).

* The live running version of this application is at []().

My portfolio is at [ric.mclaughlin.today](http://ric.mclaughlin.today).