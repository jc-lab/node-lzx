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

  /** @type {Number} Window size */
  this.windowSize = options.windowSize || LZX.MIN_WINDOW_SIZE
  /** @type {Number} Number of window subdivisions, or "position slots" */
  this.positionSlots = LZX.POSITION_SLOTS[ this.windowSize ]
  /** @type {Number} Number of elements in main tree */
  this.treeElements = this.positionSlots * 8 + LZX.NUM_CHARS

  if( this.windowSize == null )
    throw new Error( 'Window size required' )

  if( this.windowSize < LZX.MIN_WINDOW_SIZE )
    throw new Error( 'Window size too small' )

  if( this.windowSize > LZX.MAX_WINDOW_SIZE )
    throw new Error( 'Window size too large' )

  if( (this.windowSize & ( this.windowSize - 1 )) !== 0 )
    throw new Error( 'Window size must be a power of 2' )

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
