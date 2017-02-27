var LZX = require( './lzx' )
var Stream = require( 'stream' )
var inherit = require( 'bloodline' )

/**
 * LZX Decoder
 * @constructor
 * @memberOf LZX
 * @param {Object} [options]
 * @param {Number} [options.windowSize=]
 * @returns {LZXDecoder}
 */
function LZXDecoder( options ) {

  if( !(this instanceof LZXDecoder) )
    return new LZXDecoder( options )

  Stream.Transform.call( this, options )

}

/**
 * LZXDecoder prototype
 * @type {Object}
 * @ignore
 */
LZXDecoder.prototype = {

  constructor: LZXDecoder,

  _transform( chunk, encoding, next ) {
    next( null, chunk )
  },

  _flush( done ) {
    done()
  },

}

inherit( LZXDecoder, Stream.Transform )

module.exports = LZXDecoder
