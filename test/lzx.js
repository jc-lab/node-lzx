var LZX = require( '..' )
var assert = require( 'assert' )
var util = require( 'util' )

function inspect( value ) {
  return util.inspect( value, {
    depth: null,
    colors: process.stdout.isTTY,
  })
}

function log( value ) {
  console.log( '' )
  console.log( inspect( value ) )
  console.log( '' )
}

log( LZX )
