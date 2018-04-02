## Argentina Business Days [![Build Status](https://travis-ci.org/mbenedettini/feriados.svg?branch=master)](https://travis-ci.org/mbenedettini/feriados)

Tiny JS library that tells whether a given date is a business day and which is
the next business date.

Accepts `Date` and `moment` instances as arguments. Returns `Date` instances.

### Examples

```
const feriados = require('feriados');
feriados.isBusiness(new Date(2018, 3, 2))
// false
feriados.getNextBusiness(new Date(2018, 3, 1))
// Date(2018, 3, 3)
feriados.getNextBusiness(moment('2018-04-02'))
// Date(2018, 3, 3)
```
