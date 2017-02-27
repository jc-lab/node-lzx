var LZX = require( './lzx' )
var Stream = require( 'stream' )
var inherit = require( 'bloodline' )

/**
 * LZX Encoder
 * @constructor
 * @memberOf LZX
 * @param {Object} [options]
 * @param {Number} [options.windowSize=]
 * @returns {LZXEncoder}
 */
function LZXEncoder( options ) {

  if( !(this instanceof LZXEncoder) )
    return new LZXEncoder( options )

  Stream.Transform.call( this, options )

}

/**
 * LZXEncoder prototype
 * @type {Object}
 * @ignore
 */
LZXEncoder.prototype = {

  constructor: LZXEncoder,

  _transform( chunk, encoding, next ) {
    next( null, chunk )
  },

  _flush( done ) {
    done()
  },

}

inherit( LZXEncoder, Stream.Transform )

module.exports = LZXEncoder
