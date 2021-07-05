chrome.browserAction.onClicked.addListener(function(tab){
	let msg = {
		text: "background script is running",
		connection_key: 1
	} 
	chrome.tabs.sendMessage(tab.id, msg);
	chrome.browserAction.disable(tab.id);
});

// chrome.runtime.port.onDisconnect.addListener(function(tab){
// 	chrome.tabs.reload(tab.id, true);
// });