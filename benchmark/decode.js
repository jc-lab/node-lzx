var LZX = require( '..' )
var fs = require( 'fs' )
var path = require( 'path' )
var bench = require( 'nanobench' )

bench( 'LZX.decodeSync( 32KB ) x 100.000', function( run ) {

  var filename = path.join( __dirname, '..', 'test', 'data', 'something.bin' )
  var input = fs.readFileSync( filename )
  var output = null

  run.start()

  for( var i = 0; i < 100000; i++ ) {
    output = LZX.decodeSync( input )
  }

  run.end()

})
