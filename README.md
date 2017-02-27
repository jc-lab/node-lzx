# LZX Data Compression Algorithm
[![npm](https://img.shields.io/npm/v/lzx.svg?style=flat-square)](https://npmjs.com/package/lzx)
[![npm license](https://img.shields.io/npm/l/lzx.svg?style=flat-square)](https://npmjs.com/package/lzx)
[![npm downloads](https://img.shields.io/npm/dm/lzx.svg?style=flat-square)](https://npmjs.com/package/lzx)
[![build status](https://img.shields.io/travis/jhermsmeier/node-lzx.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-lzx)

LZX is an LZ77 based compressor that uses static Huffman encoding and a sliding window of selectable size. Data symbols are encoded either as an uncompressed symbol, or as an (offset, length) pair indicating that length symbols should be copied from a displacement of -offset symbols from the current position in the output stream. The value of offset is constrained to be less than the size of the sliding window.

- from [Microsoft Cabinet Format / LZX Data Compression](https://msdn.microsoft.com/en-us/library/bb417343.aspx#lzxdatacompressionformat)

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save lzx
```

## Usage

```js
var lzx = require( 'lzx' )
```
