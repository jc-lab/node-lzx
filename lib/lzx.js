var LZX = module.exports

/** @type {Number} Smallest allowable match length */
LZX.MIN_MATCH = 2
/** @type {Number} Largest allowable match length */
LZX.MIN_MATCH = 257
/** @type {Number} Number of uncompressed character types */
LZX.NUM_CHARS = 256
/** @type {Number} Smallest possible window size */
LZX.MIN_WINDOW_SIZE = Math.pow( 2, 15 )
/** @type {Number} Largest possible window size */
LZX.MAX_WINDOW_SIZE = Math.pow( 2, 21 )
/** @type {Number} Number of elements in length tree */
LZX.SECONDARY_LENGTHS = 256

/** @type {Number} 0x00 and 0x04-0x07 are undefined */
LZX.BLOCK_UNDEFINED = 0x00
/** @type {Number} Verbatim block */
LZX.BLOCK_VERBATIM = 0x01
/** @type {Number} Aligned offset block */
LZX.BLOCK_ALIGNED = 0x02
/** @type {Number} Uncompressed block */
LZX.BLOCK_UNCOMPRESSED = 0x03

/**
 * Windows Size / Position Slot Table
 * @type {Object}
 */
LZX.POSITION_SLOTS = {
  32768: 30, // 32K
  65536: 32, // 64K
  131072: 34, // 128K
  262144: 36, // 256K
  524288: 38, // 512K
  1048576: 40, // 1M
  2097152: 42, // 2M
}

LZX.Encoder = require( './encoder' )
LZX.Decoder = require( './decoder' )

LZX.createEncoder = function( options ) {
  return new LZX.Encoder( options )
}

LZX.createDecoder = function( options ) {
  return new LZX.Decoder( options )
}

LZX.encode = LZX.compress = function( buffer, options, callback ) {
  setImmediate(() => {
    callback( new Error( 'Not implemented' ) )
  })
}

LZX.encodeSync = LZX.compressSync = function( buffer, options ) {
  throw new Error( 'Not implemented' )
}

LZX.decode = LZX.decompress = function( buffer, options, callback ) {
  setImmediate(() => {
    callback( new Error( 'Not implemented' ) )
  })
}

LZX.decodeSync = LZX.decompressSync = function( buffer, options ) {
  throw new Error( 'Not implemented' )
}
