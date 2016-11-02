# Javascript isTelephoneNumber function
isTelephoneNumber attempts to determine if supplied is a valid telephone number.
## Usage
```
    isTelephoneNumber('0818118181') === true;
    isTelephoneNumber('+440818118181') === true;
```

## Methodology

Regular Expression;
```
    ^(\+[0-9]{1,4}(\.|\-|\ )*)?([0-9]+[\-\.\ ]?){7,14}([0-9]+)$
```

## Issues

* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
