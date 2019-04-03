# Center for Humanities Computing Sites Generator

> generates static vue app into ./docs to be served with github pages at https://centre-for-humanities-computing.github.io/website/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# start for production
npm run prod
```

## Texts

Each page has its own route name (home, portfolio, service, people, ...)
Page Markup is located at

```
/src/components/{route.name}
```
Some components are more complex and have nested components at that path.


Content presented in cards is stored in the data store. Each route with dynamic content has its own store module at
```
/src/store/{route.name}/state.js
```
here you also find an array for the slides at the top of the page, if any.

The .body attributes in state.js accept HTML

##### _Quotation Marks_

There are three types of quotation marks for strings:
  - single quote ' holds a single line of string and can be escaped with \
  - double quotes " are equivalent to ' and conventient for single line strings
  - the new ` allows for complex strings that span over multiple lines without and even supports ${embedded expressions}
