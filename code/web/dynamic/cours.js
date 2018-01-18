var trend_colors = {
  'trend_very_positive': '#32CD32',
  'trend_positive': '#7FFF00',
  'trend_neutral': '#FFD700',
  'trend_negative': '#FF4500',
  'trend_very_negative': '#B22222'
};

var words = [
  {text: "Lorem", weight: 13, trend: 'trend_very_positive'},
  {text: "Ipsum", weight: 10.5, trend: 'trend_positive'},
  {text: "Dolor", weight: 9.4, trend: 'trend_neutral'},
  {text: "Sit", weight: 8, trend: 'trend_negative'},
  {text: "Amet", weight: 6.2, trend: 'trend_very_negative'},
  {text: "Consectetur", weight: 5, trend: 'trend_very_positive'},
  {text: "Adipiscing", weight: 5, trend: 'trend_positive'}
];

var tab =[];
for (var i = 0;i<7;i++){
  var color = words[i].trend;
  console.log(trend_colors[color]);
  tab = tab.concat({text : words[i].text, weight : words[i].weight, color : trend_colors[color]});
  //tab = tab.concat({text : words[i].text, weight : words[i].weight, color : '#32CD32'});
}

$(document).ready(function() {
  $('.word_cloud_row_graph').jQCloud(tab);
  setTimeout(function () {
    var obj = $(".word_cloud_row_graph").data("jqcloud");
    var data = obj.word_array;
    for (var i in data) {
        $("#" + data[i]["attr"]["id"]).css("color", data[i]["color"]);
    }
  });
});