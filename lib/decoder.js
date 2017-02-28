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

  /** @type {Number} Window size */
  this.windowSize = options.windowSize
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
