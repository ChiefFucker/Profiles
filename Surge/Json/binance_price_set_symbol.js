const symbols = ['BTC', 'ETH'];

// 鑵虫湰鍛煎彨骞ｅ畨 API锛屽洜姝よ珛杓稿叆骞ｅ畨鏈変笂鏋剁殑骞ｇó銆�

//================================================================
function binanceSymbolsNotify(subtitle = '', message = '') {
  $notification.post('鏈€鏂板梗鍍归潰鏉�', subtitle, message);
};
$persistentStore.write(JSON.stringify(symbols), "BinancePriceSymbols");
binanceSymbolsNotify(
  '瑷畾瀹屾垚 鉁�',
  ''
)
$done({});
