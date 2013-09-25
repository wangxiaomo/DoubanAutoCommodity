var DOUBAN_COMMODITY_HOST = 'http://dongxi.douban.com/show/create?url=';

function checkForValidUrl(tabId, changeInfo, tab){
  var url = tab.url;
  if(is_commodity_url(url)){
    chrome.pageAction.show(tabId);
  }
};


function clickEvent(tab){
  var url = tab.url;
  chrome.tabs.create({url: DOUBAN_COMMODITY_HOST + encodeURIComponent(url)});
}


chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.pageAction.onClicked.addListener(clickEvent);
