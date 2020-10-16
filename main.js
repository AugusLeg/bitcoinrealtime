$.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json", function(data) {
  $.each(data["bpi"], function(key1, val1) {
    var items = [];
    $.each(val1, function(key2, val2) {
      items.push(
        "<li class='liste' id='" + key2 + "_" + key1 + "'>" + val2 + "</li>"
      );
    });

    $("<h2/>", {
      class: "titre",
      id: key1 + "_title",
      html: key1
    }).appendTo(".container");

    $("<ul/>", {
      class: "corps",
      id: key1,
      html: items.join("")
    }).appendTo(".container");
  });

  var Date = data["time"]["updated"];

  $("<h3/>", {
    class: "Date",
    id: "Date",
    html: "Last update " + Date
  }).appendTo(".container");
});
