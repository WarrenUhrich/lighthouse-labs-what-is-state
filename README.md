# Lighthouse Labs | What is State?

* [X] What is React State?
* [X] Closures
* [X] Differences between State and Props
* [X] Setting up and Updating State
* [X] Event-Handling
* [X] Lifting State

## What is State?

In JavaScript in-general, how do we store or keep track of values?

```js
var myVar = 123;        // We can re-assign this later; function-scoped.
let myString = 'hello'; // We can re-assign this later; block-scoped.
const myBool = true;    // We CANNOT re-assign this later; block-scoped.
```

```js
myString = 'goodbye';
```

React state is a way of storing a value, but also keeping track to know if/when the value changes. In order for React to be "reactive" this is necessary.

## Closures

When a function is declared, it has access to variables / values that were in-scope at time of declaration (even if these wouldn't normally be readily available otherwise.)

## React Components Review

* A JavaScript function.
* This function returns JSX.
* The function can accept a parameter, we call `props`.
    * Props are traditionally an object of key-value pairs.

## Props

* Props act as a parameter for our components (functions.)
* Props are great for us to pass values down to child components... (note we can't easily pass back up.)

## Let's Create Another Component

* [X] We can type a topic for the page. (`<input>`)
* [X] The app must have an over-arching `<h1>` that stays in-sync with this `<input>`.
