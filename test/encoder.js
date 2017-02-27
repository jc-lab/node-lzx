var LZX = require( '..' )
var assert = require( 'assert' )

describe( 'Encoder', function() {

  context( 'options', function() {

    specify( 'window size must be larger than MIN_WINDOW_SIZE', function() {
      assert.throws(() => { new LZX.Encoder({ windowSize: LZX.MIN_WINDOW_SIZE / 2 }) })
    })

    specify( 'window size must be smaller than MAX_WINDOW_SIZE', function() {
      assert.throws(() => { new LZX.Encoder({ windowSize: LZX.MAX_WINDOW_SIZE * 2 }) })
    })

    specify( 'reject invalid non-power-of-two window size', function() {
      assert.throws(() => { new LZX.Encoder({ windowSize: LZX.MIN_WINDOW_SIZE + 2 }) })
    })

  })

})
