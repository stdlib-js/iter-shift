/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@main/index.d.ts"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Callback invoked with the skipped value.
*
* @param value - iterated value
*/
type Callback = ( value?: any ) => any;

/**
* Returns an iterator which skips the first value of a provided iterator.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param clbk - callback to invoke with the skipped value
* @param thisArg - callback execution context
* @returns iterator
*
* @example
* var array2iterator = require( '@stdlib/array-to-iterator' );
*
* var iter = iterShift( array2iterator( [ 1, 2 ] ) );
*
* var v = iter.next().value;
* // returns 2
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterShift( iterator: Iterator, clbk?: Callback, thisArg?: any ): Iterator;


// EXPORTS //

export = iterShift;