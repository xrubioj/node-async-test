# node-async-test

Testing some assumptions about async-await in node.js 7.5.

The assumption is whether you need to use a promise to return a value to the calling function (as in `test()`) or not (as in `test2()`).

The conclusion is that you don't need it, but in the example of `test()` it allows us to return the value from the callback in `setTimeout()` to the caller of `test()`.

To run it:

- Install node.js 7.5+
- `node --harmony async-test.js`
