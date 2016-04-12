# pandora-box

> What will it be?

![](https://i.imgur.com/NOq0HKr.gif)

# install

```shell
npm install pandora-box
```

# `pandora.find(host)`

Finds and returns all methods on an object by traversing its property tree recursively and non-circularly.

# `pandora.findAll(host)`

Finds and returns all methods on an object by traversing its property tree recursively and non-circularly. Then executes each of those methods without any arguments, and returns all methods on objects returned by each individual call, plus the original methods.

# `pandora(box)`

Returns an `(...args) => fn(...args)` function that executes a random method in `box`, where `box` is an array of functions that defaults to `.findAll(global)`.

# why?

because.

![](./madness.gif)

# license

mit
