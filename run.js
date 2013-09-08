
var storage = chrome.storage.local;

storage.get('commodity_url', function(res){
  var url = res['commodity_url'];
  storage.set({'commodity_url': ''});
  $('input[name=url]').attr('value', url);
});
