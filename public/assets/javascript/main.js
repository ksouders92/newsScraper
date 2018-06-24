$.get("/scrape", function (req, res) {})
  .then(function (res) {

  })

$(".leavecomment").click('click', function (event) {
  var modal = $("#modal1") 
  $("#postcomment").attr('data_id', $(this).attr('data_id'))
  modal.show()
})


$(".closemodal").click('click', function (event) {
  var modal = $("#modal1") 
  modal.hide()
})


$("#postcomment").click('click', function (event) {
  var queryString = '/articles/' + $(this).attr('data_id')
  var commentData = {
    title: $("#commenttitle").val().trim(),
    body: $("#commentbody").val().trim()
  }
  $.post(queryString, noteData)
    .then(function (response) {})
  var modal = $("#modal1") 
  modal.hide()
  location.reload(true);
})

$(".deletecommenticon").click('click', function (event) {
  var queryString = "/deletecomment/" + $(this).attr('data_id')
  $.ajax({
    url: queryString,
    method: "DELETE"
  }).then(function (response) {

  })
  location.reload(true);

})