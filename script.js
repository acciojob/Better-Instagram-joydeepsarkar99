let images = document.querySelectorAll(".image")

for (let i of images) {
	i.addEventListener("dragstart", (eventDetails) => {
		let draggedImage = eventDetails.target
		eventDetails.dataTransfer.setData("text/plain", draggedImage.id)
	})
}

let dragEvents = ["dragover", "dragenter", "drop"]
dragEvents.forEach(dropEvents => {
	let imageAll = document.querySelectorAll(".image")
	for (let i of imageAll) {
		i.addEventListener(dropEvents, (eventDetails) => {
			eventDetails.preventDefault()

			if (dropEvents == "drop") {
				let draggedImageId = eventDetails.dataTransfer.getData("text/plain")
				let draggedImage = document.querySelector(`#${draggedImageId}`)

				let swappedImageId = eventDetails.target.id
				let swappedImage = document.querySelector(`#${swappedImageId}`)

				let prevDrag = draggedImage.previousElementSibling
				let nextDrag = draggedImage.nextElementSibling

				let prevSwap = swappedImage.previousElementSibling
				let nextSwap = swappedImage.nextElementSibling

				if (draggedImage === prevSwap) {
					nextSwap.before(draggedImage)
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
		})
	}
})
