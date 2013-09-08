var DOUBAN_COMMODITY_HOST = 'http://www.douban.com/show/create';

function checkForValidUrl(tabId, changeInfo, tab){
  var url = tab.url;
  if(is_commodity_url(url)){
    /* {{{
    var notification = webkitNotifications.createNotification(
      'icons/icon-48.png',
      'DoubanAutoCommodity',
      '此商品可自动添加到豆瓣东西!'
    );
    notification.show();
    }}} */
    chrome.pageAction.show(tabId);
  }
};


function clickEvent(tab){
  var url = tab.url;
  chrome.storage.local.set({
    'commodity_url': url
  });
  chrome.tabs.create({url: DOUBAN_COMMODITY_HOST});
}


chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.pageAction.onClicked.addListener(clickEvent);
