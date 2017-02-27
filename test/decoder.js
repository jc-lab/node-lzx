var LZX = require( '..' )
var assert = require( 'assert' )

describe( 'Decoder', function() {

  context( 'options', function() {

    specify( 'require a window size to be set', function() {
      assert.throws(() => { new LZX.Decoder({ windowSize: null }) })
    })

    specify( 'window size must be larger than MIN_WINDOW_SIZE', function() {
      assert.throws(() => { new LZX.Decoder({ windowSize: LZX.MIN_WINDOW_SIZE / 2 }) })
    })

    specify( 'window size must be smaller than MAX_WINDOW_SIZE', function() {
      assert.throws(() => { new LZX.Decoder({ windowSize: LZX.MAX_WINDOW_SIZE * 2 }) })
    })

    specify( 'reject non-power-of-two window size', function() {
      assert.throws(() => { new LZX.Decoder({ windowSize: LZX.MIN_WINDOW_SIZE + 2 }) })
    })

  })

})
