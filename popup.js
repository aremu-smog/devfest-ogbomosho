const nukeButton = document.querySelector("#nuke")

const doomsDay = () => {
	document.body.remove()
}
const nukeIt = async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

	await chrome.scripting.executeScript({
		target: { tabId: tab.id },
		func: doomsDay,
	})
}
nukeButton.addEventListener("click", nukeIt)
