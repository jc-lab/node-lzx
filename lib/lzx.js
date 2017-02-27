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
