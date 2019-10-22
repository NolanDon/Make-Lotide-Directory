# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Nolan Boxill.

## Usage

**Install it:**

`npm install @nolan295/lotide`

**Require it:**

`const _ = require('@nolan295/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `const assertArraysEqual = function(actual, expected) {}` : Checks for strict equality between two arrays.
* `const assertEqual = function(actual, expected) {`: Checks equality between two values.
* `const assertObjectsEqual = function(actual, expected) {}`: Checks for equality between two objects.
* `const countLetters = function(string){}`
: Counts letters in string - returns object with number of occurances of each value.
* `const eqArrays = function(oneArr, twoArr){`
: Sorts through two arrays - returns true if same false if not.
* `const eqObjects = function(object1, object2) {}`
: Sorts through two objects - returns true if they have the same contents.
* `const findByValue = function(object,value) {}`
: Sorts through 'object' - returns 'value'.
* `const findKey = function(obj, x) {}`
: Loops through object and returns x.
* `const flatten = function(array) {}`
: Given a nested array, it returns a flat array of the same elements.
* `const head = function(array){}`
: Given an array it returns the first indexed element.
* `const letterPositions = function(sentence) {}`
: Given a string - returns an object with an array with index's for each.
* `const map = function(array, callback) {}`
: Given an array and a callback function - returns an array with the callback invoked.
* `const middle = function(array1) {}`
: Returns the middle element of an array. If the array is even, it will return both middle ones. If the array is odd it will return the middle one.
* `const tail = function(array) {}`
: Returns the last element of an array.
* `const takeUntil = function(array, callback) {}`
: Given an array and a callback function, it returns all elements until matched.
* `const without = function (source, itemsToRemove) {}`
: Given an array and an exclusion list, returns a new array without excluded elements.