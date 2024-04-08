let imagesDiv = document.querySelectorAll(".image")
imagesDiv.forEach((div) => {
	div.addEventListener("dragstart", dragstartEvent)
	div.addEventListener("dragover", dragoverEvent)
	div.addEventListener("drop", dropEvent)
})


function dragstartEvent(eventDetails) {
	let draggedImage = eventDetails.target
	eventDetails.dataTransfer.setData("text/plain", draggedImage.id)
}

function dragoverEvent(eventDetails) {
	eventDetails.preventDefault()
}

function dropEvent(eventDetails) {
	eventDetails.preventDefault()
	let draggedImageId = eventDetails.dataTransfer.getData("text/plain")
	let draggedImage = document.querySelector(`#${draggedImageId}`)

	let swappedImageId = eventDetails.target.id
	let swappedImage = document.querySelector(`#${swappedImageId}`)

	let prevDrag = draggedImage.previousElementSibling
	let nextDrag = draggedImage.nextElementSibling

	let prevSwap = swappedImage.previousElementSibling
	let nextSwap = swappedImage.nextElementSibling

	if (draggedImage === prevSwap) {
		swappedImage.after(draggedImage)
	}
	else if (draggedImage === nextSwap) {
		swappedImage.before(draggedImage)
	}
	else {

		if (prevDrag != null) {
			prevDrag.after(swappedImage)
		}
		else {
			nextDrag.before(swappedImage)
		}

		if (prevSwap != null) {
			prevSwap.after(draggedImage)
		}
		else {
			nextSwap.before(draggedImage)
		}
	}

}
