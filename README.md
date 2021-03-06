# graphql-fetcher
[![Build Status](https://travis-ci.org/joonhocho/graphql-fetcher.svg?branch=master)](https://travis-ci.org/joonhocho/graphql-fetcher)
[![Coverage Status](https://coveralls.io/repos/github/joonhocho/graphql-fetcher/badge.svg?branch=master)](https://coveralls.io/github/joonhocho/graphql-fetcher?branch=master)
[![npm version](https://badge.fury.io/js/graphql-fetcher.svg)](https://badge.fury.io/js/graphql-fetcher)
[![Dependency Status](https://david-dm.org/joonhocho/graphql-fetcher.svg)](https://david-dm.org/joonhocho/graphql-fetcher)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)


A GraphQL data fetcher using fetch API.


### Install
```
npm install --save graphql-fetcher
```


### Usage
```javascript
import createGraphQLFetcher from 'graphql-fetcher';

const fetcher = createGraphQLFetcher({
  // [REQUIRED] default = null
  url: 'https://www.graphqlhub.com/graphql',

  // [REQUIRED] default = null
  fetch,

  // [OPTIONAL] default = null
  headers: {
    AuthToken: 'SECRET_TOKEN',
  },

  // [OPTIONAL] default = 'POST'
  method: 'POST',
});

const data = await fetcher({
  query: `
    query q($id: ID!) {
      hn2 {
        node(id: $id) {
          id
          ... on HackerNewsV2Story {
            url
          }
        }
      }
    }
  `,
  variables: {
    id: 'aXRlbToxMTcxNjk3NQ==',
  },
});
```


### License
```
The MIT License (MIT)

Copyright (c) 2016 Joon Ho Cho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
