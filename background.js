browser.browserAction.onClicked.addListener(async() => {
	try {
		browser.windows.remove((await browser.windows.getCurrent({ windowTypes: ['normal'] })).id)
	} catch (err) { console.error(err) }
})