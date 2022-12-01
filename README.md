<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Close

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Close a file descriptor.



<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

To use in Observable,

```javascript
close = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-close@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var close = require( 'path/to/vendor/umd/fs-close/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/fs-close@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.close;
})();
</script>
```

#### close( fd, clbk )

Asynchronously closes a file descriptor, so that the file descriptor no longer refers to any file and may be reused.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var openSync = require( '@stdlib/fs-open' ).sync;

var fd = openSync( __filename );
close( fd, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
}
```

#### close.sync( fd )

Synchronously closes a file descriptor.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var openSync = require( '@stdlib/fs-open' ).sync;

var fd = openSync( __filename );

var err = close.sync( fd );
if ( err instanceof Error ) {
    throw err;
}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The difference between this API and [`fs.closSync()`][node-fs] is that [`fs.closeSync()`][node-fs] will throw if an `error` is encountered (e.g., if given an invalid file descriptor) and this API will return an `error`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript">
(function () {
var join = require( 'path' ).join;
var openSync = require( '@stdlib/fs-open' ).sync;
var close = require( '@stdlib/fs-close' );

var err;

/* Sync */

var fd = openSync( join( __dirname, 'package.json' ), 'r+' );
if ( fd instanceof Error ) {
    console.error( fd.message );
} else {
    err = close.sync( fd );
    // returns undefined

    if ( err instanceof Error ) {
        console.error( err.message );
    } else {
        console.log( 'Synchronously closed file descriptor.' );
    }
}

/* Async */

fd = openSync( join( __dirname, 'package.json' ), 'r+' );
if ( fd instanceof Error ) {
    console.error( fd.message );
} else {
    close( fd, done );
}

function done( error ) {
    if ( error ) {
        console.error( error.message );
    } else {
        console.log( 'Asynchronously closed file descriptor.' );
    }
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/fs/exists`][@stdlib/fs/exists]</span><span class="delimiter">: </span><span class="description">test whether a path exists on the filesystem.</span>
-   <span class="package-name">[`@stdlib/fs/open`][@stdlib/fs/open]</span><span class="delimiter">: </span><span class="description">open a file.</span>
-   <span class="package-name">[`@stdlib/fs/read-file`][@stdlib/fs/read-file]</span><span class="delimiter">: </span><span class="description">read the entire contents of a file.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-close.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-close

[test-image]: https://github.com/stdlib-js/fs-close/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/fs-close/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-close/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-close?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-close.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-close/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/fs-close/tree/deno
[umd-url]: https://github.com/stdlib-js/fs-close/tree/umd
[esm-url]: https://github.com/stdlib-js/fs-close/tree/esm
[branches-url]: https://github.com/stdlib-js/fs-close/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-close/main/LICENSE

[node-fs]: https://nodejs.org/api/fs.html

<!-- <related-links> -->

[@stdlib/fs/exists]: https://github.com/stdlib-js/fs-exists/tree/umd

[@stdlib/fs/open]: https://github.com/stdlib-js/fs-open/tree/umd

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs-read-file/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
