document.addEventListener('DOMContentLoaded', function() {
  var weekAgo = new Date().setDate(new Date().getDate() - 7)
  chrome.history.search({text: 'stackoverflow.com', startTime: weekAgo, endTime: Date.now()}, function(data) {
    var rating = data.reduce(function(previousValue, currentValue){
      return previousValue + currentValue.visitCount
    }, 0)
    document.getElementById('so-rating').innerText = rating
  });
});
