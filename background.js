browser.browserAction.onClicked.addListener(async () => {
	try {
		await browser.windows.remove(browser.windows.WINDOW_ID_CURRENT)
	} catch (err) { console.error(err) }
})