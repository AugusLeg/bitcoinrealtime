
$.getJSON( "https://api.coindesk.com/v1/bpi/currentprice.json", function( data ) {
  var items = [];
  $.each( data["bpi"], function( key1, val1 ) {
    $.each( val1, function( key2, val2 ) {
      items.push( "<li id='" + key2 + "_" + key1 + "'>" + val2 + "</li>" );
    });
    
  $( "<ul/>", {
    "id": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );    
  });
 

});