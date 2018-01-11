var some_words = [
  {text: 'Abc', weight: 1},
  {text: 'Def', weight: 2},
  {text: 'Ghi', weight: 3},
  {text: 'Jkl', weight: 4},
  {text: 'Mno', weight: 5},
  {text: 'Pqrs', weight: 6},
  {text: 'Tuv', weight: 7},
  {text: 'Wxyz', weight: 8},
  {text: 'ABC', weight: 9},
  {text: 'DEF', weight: 10},
]
//
$(document).ready(function() {
  $(".word_cloud_div_theme").jQCloud(some_words, {afterCloudRender: function() {

    test('Words with equal weight', function() {
      ok($(".word_cloud_div_theme span.w5").length == 3, "There should be three words with equal weight.");
    });

  }});
});
